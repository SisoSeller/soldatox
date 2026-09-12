import * as THREE from "three";
import * as CANNON from "cannon-es";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { SSAOPass } from "three/examples/jsm/postprocessing/SSAOPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import { Reflector } from "three/examples/jsm/objects/Reflector.js";
import { skyState } from "./time.js";

const KEYS = {
  KeyW: "forward",
  KeyS: "back",
  KeyA: "left",
  KeyD: "right",
  ShiftLeft: "sprint",
  ShiftRight: "sprint",
  KeyC: "crouch",
  KeyX: "prone",
  KeyQ: "leanLeft",
  KeyE: "leanRight",
};

function publicAsset(path) {
  const base = import.meta.env.BASE_URL || "/";
  const prefix = base.endsWith("/") ? base : `${base}/`;
  return `${prefix}${String(path).replace(/^\/+/, "")}`;
}

const LOOK_SENS = 0.0022;
const PITCH_MIN = -1.45;
const PITCH_MAX = 1.45;
const TP_DISTANCE = 2.15;

export function createEngine(canvas, getSettings) {
  const api = { onPauseRequest: null };
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x76b0ec);
  scene.fog = new THREE.Fog(0xb0c8dc, 40, 160);

  const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.08, 2000);
  const yaw = new THREE.Object3D();
  const pitch = new THREE.Object3D();
  const leanPivot = new THREE.Object3D();
  yaw.position.set(0, 1.7, 8);
  scene.add(yaw);
  yaw.add(pitch);
  pitch.add(leanPivot);
  leanPivot.add(camera);
  camera.position.set(0, 0, 0);
  camera.rotation.set(0, 0, 0);

  let lookYaw = 0;
  let lookPitch = 0;
  let lookEnabled = false;
  let thirdPerson = false;
  let thirdBlend = 0;
  let controlLock = false;
  let fpsMaxOn = true;
  let raining = false;
  let walkPhase = 0;
  let walkAmp = 0;

  const hemi = new THREE.HemisphereLight(0xd7e0ea, 0x2a2a2a, 1);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xffffff, 1.8);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = 160;
  sun.shadow.camera.left = -50;
  sun.shadow.camera.right = 50;
  sun.shadow.camera.top = 50;
  sun.shadow.camera.bottom = -50;
  sun.shadow.bias = -0.00025;
  scene.add(sun);
  scene.add(sun.target);
  const moon = new THREE.DirectionalLight(0x9bb7ff, 0.15);
  scene.add(moon);

  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    toneMapped: false,
    uniforms: {
      top: { value: new THREE.Color(0x76b0ec) },
      horizon: { value: new THREE.Color(0xcfe4f5) },
      groundCol: { value: new THREE.Color(0x0a0a0a) },
      sunDir: { value: new THREE.Vector3(0.2, 0.9, 0.2) },
      sunColor: { value: new THREE.Color(1, 0.96, 0.82) },
      night: { value: 0 },
      rain: { value: 0 },
      time: { value: 0 },
    },
    vertexShader: `
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        vec4 clip = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_Position = clip.xyww;
      }
    `,
    fragmentShader: `
      varying vec3 vDir;
      uniform vec3 top;
      uniform vec3 horizon;
      uniform vec3 groundCol;
      uniform vec3 sunDir;
      uniform vec3 sunColor;
      uniform float night;
      uniform float rain;
      uniform float time;
      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
      }
      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
      }
      float fbm(vec2 p) {
        float v = 0.0;
        v += noise(p) * 0.5;
        v += noise(p * 2.03) * 0.25;
        v += noise(p * 4.11) * 0.125;
        v += noise(p * 8.07) * 0.0625;
        return v;
      }
      void main() {
        vec3 dir = normalize(vDir);
        float elev = clamp(dir.y * 0.5 + 0.5, 0.0, 1.0);
        vec3 col;
        if (elev > 0.28) {
          float t = clamp((elev - 0.28) / 0.72, 0.0, 1.0);
          col = mix(horizon, top, pow(t, 0.82));
        } else {
          float t = clamp(elev / 0.28, 0.0, 1.0);
          col = mix(groundCol, horizon, pow(t, 1.35));
        }
        vec3 sdir = normalize(sunDir);
        float sunDot = max(dot(dir, sdir), 0.0);
        float disk = pow(sunDot, 860.0);
        float glow = pow(sunDot, 8.0) * 0.32;
        float halo = pow(sunDot, 2.0) * 0.14;
        float sunAmt = (1.0 - night) * (1.0 - rain * 0.94);
        col += sunColor * (disk * 1.55 + glow + halo) * sunAmt;
        float moonDot = max(dot(dir, -sdir), 0.0);
        col += vec3(0.82, 0.88, 1.0) * pow(moonDot, 1200.0) * night * (1.0 - rain);
        if (dir.y > -0.08) {
          vec2 uv = dir.xz / max(dir.y + 0.42, 0.06);
          uv += sdir.xz * 0.12 + vec2(time * 0.003, time * 0.002);
          float c = fbm(uv * mix(1.8, 3.6, rain));
          float cover = mix(0.22, 0.88, rain);
          float clouds = smoothstep(1.0 - cover, 1.05, c);
          vec3 cloudCol = mix(vec3(0.93, 0.95, 0.98), mix(horizon, vec3(0.36, 0.39, 0.43), 0.55), rain);
          cloudCol = mix(cloudCol, sunColor, glow * 0.35 * (1.0 - rain));
          col = mix(col, cloudCol, clouds * mix(0.32, 0.84, rain) * smoothstep(-0.05, 0.2, dir.y));
        }
        if (rain > 0.5) {
          col = mix(col, mix(horizon, vec3(0.34, 0.38, 0.42), 0.5), 0.22);
        }
        gl_FragColor = vec4(col, 1.0);
      }
    `,
  });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(12, 64, 32), skyMat);
  sky.frustumCulled = false;
  sky.renderOrder = -100;
  scene.add(sky);

  const starGeo = new THREE.BufferGeometry();
  const starPos = new Float32Array(700 * 3);
  for (let i = 0; i < 700; i += 1) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 0.78 + 0.08);
    starPos[i * 3] = Math.sin(phi) * Math.cos(theta) * 7.4;
    starPos[i * 3 + 1] = Math.cos(phi) * 7.4;
    starPos[i * 3 + 2] = Math.sin(phi) * Math.sin(theta) * 7.4;
  }
  starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
  const stars = new THREE.Points(
    starGeo,
    new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.035,
      sizeAttenuation: false,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      fog: false,
      toneMapped: false,
    })
  );
  stars.frustumCulled = false;
  sky.add(stars);

  const RAIN_COUNT = 2600;
  const rainState = new Float32Array(RAIN_COUNT * 4);
  for (let i = 0; i < RAIN_COUNT; i += 1) {
    rainState[i * 4] = (Math.random() - 0.5) * 64;
    rainState[i * 4 + 1] = Math.random() * 24;
    rainState[i * 4 + 2] = (Math.random() - 0.5) * 64;
    rainState[i * 4 + 3] = 16 + Math.random() * 18;
  }
  const rainDummy = new THREE.Object3D();
  const rainMesh = new THREE.InstancedMesh(
    new THREE.BoxGeometry(0.012, 0.58, 0.012),
    new THREE.MeshBasicMaterial({
      color: 0xc9d7e6,
      transparent: true,
      opacity: 0.42,
      depthWrite: false,
      side: THREE.DoubleSide,
      fog: true,
    }),
    RAIN_COUNT
  );
  rainMesh.frustumCulled = false;
  rainMesh.visible = false;
  rainMesh.renderOrder = 4;
  scene.add(rainMesh);

  const SPLASH_COUNT = 160;
  const splashData = Array.from({ length: SPLASH_COUNT }, () => ({ x: 0, z: 0, t: 99, life: 0.3 }));
  let splashWrite = 0;
  const splashDummy = new THREE.Object3D();
  const splashMesh = new THREE.InstancedMesh(
    new THREE.CircleGeometry(1, 14),
    new THREE.MeshBasicMaterial({
      color: 0xd5e2ee,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
      side: THREE.DoubleSide,
    }),
    SPLASH_COUNT
  );
  splashMesh.frustumCulled = false;
  splashMesh.visible = false;
  splashMesh.renderOrder = 3;
  scene.add(splashMesh);

  const cubeTarget = new THREE.WebGLCubeRenderTarget(256, {
    type: THREE.HalfFloatType,
    colorSpace: THREE.SRGBColorSpace,
  });
  const cubeCam = new THREE.CubeCamera(0.3, 280, cubeTarget);
  scene.add(cubeCam);

  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(140, 140, 128, 128),
    new THREE.MeshPhysicalMaterial({
      color: 0x4a4744,
      roughness: 1,
      metalness: 0.04,
      envMap: cubeTarget.texture,
      envMapIntensity: 0.7,
    })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  floor.material.userData.pbr = true;
  scene.add(floor);

  const puddles = new Reflector(new THREE.PlaneGeometry(90, 90), {
    clipBias: 0.003,
    textureWidth: 1024,
    textureHeight: 1024,
    color: 0x7d8b98,
  });
  puddles.rotation.x = -Math.PI / 2;
  puddles.position.y = 0.035;
  puddles.visible = false;
  puddles.material.transparent = true;
  puddles.material.depthWrite = false;
  puddles.material.uniforms.uTime = { value: 0 };
  puddles.material.onBeforeCompile = (shader) => {
    shader.vertexShader = shader.vertexShader.replace(
      "void main() {",
      "varying vec2 vWorldXZ;\nvoid main() {\n\tvWorldXZ = (modelMatrix * vec4(position, 1.0)).xz;"
    );
    shader.fragmentShader = shader.fragmentShader
      .replace("uniform vec3 color;", "uniform vec3 color;\nuniform float uTime;\nvarying vec2 vWorldXZ;")
      .replace(
        "gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );",
        `
        vec2 cell = vWorldXZ * 0.095;
        vec2 gv = fract(cell) - 0.5;
        float n = fract(sin(dot(floor(cell), vec2(27.1, 91.7))) * 43758.5453);
        vec2 stretch = vec2(1.0, 0.62 + n * 0.5);
        float ripple = sin(length(vWorldXZ) * 7.5 - uTime * 6.0) * 0.04;
        float blob = 1.0 - smoothstep(0.08 + n * 0.06, 0.34 + n * 0.16, length(gv * stretch) + ripple);
        blob *= step(0.22, n);
        vec3 wet = mix(blendOverlay(base.rgb, color), base.rgb * vec3(0.78, 0.84, 0.9), 0.28);
        gl_FragColor = vec4(wet, blob * 0.78);
        `
      );
    shader.uniforms.uTime = puddles.material.uniforms.uTime;
  };
  scene.add(puddles);

  loadCobbleFloor(floor);

  const boxMat = new THREE.MeshPhysicalMaterial({
    color: 0x3c4046,
    roughness: 0.42,
    metalness: 0.28,
    envMap: cubeTarget.texture,
    envMapIntensity: 0.9,
  });
  const metalMat = new THREE.MeshPhysicalMaterial({
    color: 0x8a919c,
    roughness: 0.18,
    metalness: 0.92,
    envMap: cubeTarget.texture,
    envMapIntensity: 1.4,
  });

  const physWorld = new CANNON.World({ gravity: new CANNON.Vec3(0, -22, 0) });
  physWorld.broadphase = new CANNON.SAPBroadphase(physWorld);
  physWorld.allowSleep = true;
  physWorld.solver.iterations = 10;
  physWorld.defaultContactMaterial.friction = 0;
  physWorld.defaultContactMaterial.restitution = 0;
  const groundMat = new CANNON.Material("ground");
  const playerMat = new CANNON.Material("player");
  physWorld.addContactMaterial(
    new CANNON.ContactMaterial(playerMat, groundMat, { friction: 0, restitution: 0 })
  );
  const groundBody = new CANNON.Body({ mass: 0, shape: new CANNON.Plane(), material: groundMat });
  groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
  physWorld.addBody(groundBody);

  const playerHalf = 0.85;
  const playerBody = new CANNON.Body({
    mass: 90,
    shape: new CANNON.Box(new CANNON.Vec3(0.32, playerHalf, 0.32)),
    position: new CANNON.Vec3(0, playerHalf + 0.02, 8),
    fixedRotation: true,
    allowSleep: false,
    linearDamping: 0,
    material: playerMat,
  });
  playerBody.allowSleep = false;
  physWorld.addBody(playerBody);

  const crates = [];
  for (let i = 0; i < 22; i += 1) {
    const sx = 0.7 + Math.random() * 0.9;
    const sy = 0.7 + Math.random() * 1.1;
    const sz = 0.7 + Math.random() * 0.9;
    const mat = i % 5 === 0 ? metalMat : boxMat;
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz), mat);
    let x = (Math.random() - 0.5) * 48;
    let z = (Math.random() - 0.5) * 48;
    if (Math.hypot(x, z - 8) < 4) z += 8;
    mesh.position.set(x, sy / 2 + 0.03, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    scene.add(mesh);
    const body = new CANNON.Body({
      mass: 0,
      type: CANNON.Body.STATIC,
      shape: new CANNON.Box(new CANNON.Vec3(sx / 2, sy / 2, sz / 2)),
      position: new CANNON.Vec3(x, sy / 2 + 0.03, z),
    });
    physWorld.addBody(body);
    crates.push({
      mesh,
      body,
      origin: { x, y: sy / 2 + 0.03, z },
    });
  }

  const playerRig = makePlayerMesh();
  const playerMesh = playerRig.group;
  playerMesh.visible = false;
  scene.add(playerMesh);

  const player = { stance: "stand", lean: 0, active: false };
  const wish = {
    forward: false,
    back: false,
    left: false,
    right: false,
    sprint: false,
    crouch: false,
    prone: false,
    leanLeft: false,
    leanRight: false,
  };

  function clearWish() {
    wish.forward = false;
    wish.back = false;
    wish.left = false;
    wish.right = false;
    wish.sprint = false;
    wish.crouch = false;
    wish.prone = false;
    wish.leanLeft = false;
    wish.leanRight = false;
  }

  function inputBlocked() {
    const tag = document.activeElement?.tagName;
    return controlLock || tag === "INPUT" || tag === "TEXTAREA";
  }

  function onKey(e, down) {
    if (down && inputBlocked()) return;
    if (!down) {
      const mappedUp = KEYS[e.code];
      if (mappedUp) wish[mappedUp] = false;
      if (inputBlocked()) return;
    }
    if (e.code === "KeyV" && down && player.active && !paused) {
      thirdPerson = !thirdPerson;
      return;
    }
    const mapped = KEYS[e.code];
    if (mapped) {
      wish[mapped] = down;
      e.preventDefault();
    }
  }
  const onDown = (e) => onKey(e, true);
  const onUp = (e) => onKey(e, false);
  window.addEventListener("keydown", onDown, true);
  window.addEventListener("keyup", onUp, true);

  function onMouseMove(e) {
    if (!lookEnabled || !player.active || paused) return;
    lookYaw -= e.movementX * LOOK_SENS;
    lookPitch -= e.movementY * LOOK_SENS;
    lookPitch = Math.max(PITCH_MIN, Math.min(PITCH_MAX, lookPitch));
    yaw.rotation.set(0, lookYaw, 0);
    pitch.rotation.set(lookPitch, 0, 0);
  }
  document.addEventListener("mousemove", onMouseMove);

  let last = performance.now();
  let nextFrameAt = 0;
  let frames = 0;
  let fps = 0;
  let fpsStamp = performance.now();
  let running = true;
  let paused = false;
  let worldLive = false;
  let composer = null;
  let bloomPass = null;
  let ssaoPass = null;
  let frame = 0;
  const rayFrom = new CANNON.Vec3();
  const rayTo = new CANNON.Vec3();
  const groundHit = new CANNON.RaycastResult();

  function isGrounded() {
    rayFrom.set(playerBody.position.x, playerBody.position.y, playerBody.position.z);
    rayTo.set(playerBody.position.x, playerBody.position.y - playerHalf - 0.14, playerBody.position.z);
    groundHit.reset();
    physWorld.raycastClosest(rayFrom, rayTo, { skipBackfaces: true }, groundHit);
    if (groundHit.hasHit && groundHit.body !== playerBody) return true;
    return playerBody.position.y <= playerHalf + 0.1 && playerBody.velocity.y <= 0.4;
  }
  const camWorld = new THREE.Vector3();
  const skyFollow = new THREE.Vector3();
  const raycaster = new THREE.Raycaster();
  const rayDir = new THREE.Vector3();

  function stanceHeight() {
    if (player.stance === "prone") return 0.42;
    if (player.stance === "crouch") return 1.05;
    return 1.7;
  }

  function moveSpeed() {
    if (player.stance === "prone") return 1.0;
    if (player.stance === "crouch") return 1.9;
    if (wish.sprint) return 5.0;
    return 3.1;
  }

  function animateWalk(dt, moving, grounded) {
    const pace = wish.sprint ? 7.4 : 4.6;
    if (moving && grounded) walkPhase += dt * pace;
    const targetAmp = moving && grounded ? (wish.sprint ? 0.72 : 0.5) : 0;
    walkAmp += (targetAmp - walkAmp) * Math.min(1, dt * 8);
    const swing = Math.sin(walkPhase) * walkAmp;
    playerRig.armL.rotation.x = swing;
    playerRig.armR.rotation.x = -swing;
    playerRig.legL.rotation.x = -swing * 1.08;
    playerRig.legR.rotation.x = swing * 1.08;
    playerRig.body.rotation.x = walkAmp * 0.1;
    if (player.stance === "crouch") {
      playerRig.group.scale.set(1, 0.78, 1);
    } else if (player.stance === "prone") {
      playerRig.group.scale.set(1, 0.38, 1);
    } else {
      playerRig.group.scale.set(1, 1, 1);
    }
  }

  function spawnSplash(x, z) {
    const s = splashData[splashWrite % SPLASH_COUNT];
    splashWrite += 1;
    s.x = x;
    s.z = z;
    s.t = 0;
    s.life = 0.22 + Math.random() * 0.18;
  }

  function updateRain(dt) {
    const on = raining && worldLive;
    rainMesh.visible = on;
    splashMesh.visible = on;
    puddles.visible = on;
    if (!on) return;
    puddles.material.uniforms.uTime.value += dt;
    const ox = yaw.position.x;
    const oz = yaw.position.z;
    for (let i = 0; i < RAIN_COUNT; i += 1) {
      const i4 = i * 4;
      rainState[i4 + 1] -= rainState[i4 + 3] * dt;
      rainState[i4] += 1.35 * dt;
      if (rainState[i4 + 1] <= 0.02) {
        spawnSplash(ox + rainState[i4], oz + rainState[i4 + 2]);
        rainState[i4] = (Math.random() - 0.5) * 64;
        rainState[i4 + 1] = 10 + Math.random() * 16;
        rainState[i4 + 2] = (Math.random() - 0.5) * 64;
        rainState[i4 + 3] = 16 + Math.random() * 18;
      }
      rainDummy.position.set(ox + rainState[i4], rainState[i4 + 1], oz + rainState[i4 + 2]);
      rainDummy.rotation.set(0.12, 0, 0.08);
      rainDummy.updateMatrix();
      rainMesh.setMatrixAt(i, rainDummy.matrix);
    }
    rainMesh.instanceMatrix.needsUpdate = true;
    for (let i = 0; i < SPLASH_COUNT; i += 1) {
      const s = splashData[i];
      s.t += dt;
      const k = Math.min(1, s.t / s.life);
      const alive = s.t < s.life;
      const sc = alive ? 0.04 + k * 0.34 : 0.0001;
      splashDummy.position.set(s.x, 0.04, s.z);
      splashDummy.scale.set(sc, sc, sc);
      splashDummy.rotation.set(-Math.PI / 2, 0, 0);
      splashDummy.updateMatrix();
      splashMesh.setMatrixAt(i, splashDummy.matrix);
    }
    splashMesh.instanceMatrix.needsUpdate = true;
    splashMesh.material.opacity = 0.5;
  }

  function rgb(arr) {
    return new THREE.Color(arr[0] / 255, arr[1] / 255, arr[2] / 255);
  }

  function applyFloorWeather() {
    const g = getSettings().graphics;
    const env = g.rayTracing || g.reflections === "ultra" || g.reflections === "high" ? 1.25 : g.reflections === "off" ? 0.18 : 0.6;
    const wet = raining ? 1 : 0;
    floor.material.roughness = wet ? 0.32 : 1;
    floor.material.metalness = wet ? 0.08 : 0.04;
    floor.material.envMapIntensity = env * (wet ? 1.9 : 0.62);
    floor.material.color.setHex(wet ? 0xc5c8cc : 0xffffff);
  }

  function setTimeOfDay(minutes) {
    const s = skyState(minutes);
    skyMat.uniforms.top.value.copy(rgb(s.top));
    skyMat.uniforms.horizon.value.copy(rgb(s.horizon));
    skyMat.uniforms.groundCol.value.copy(rgb(s.ground));
    skyMat.uniforms.night.value = s.night;
    skyMat.uniforms.rain.value = raining ? 1 : 0;
    skyMat.uniforms.sunColor.value.setRGB(s.sun[0], s.sun[1], s.sun[2]);
    scene.background = raining ? rgb(s.horizon) : rgb(s.top);
    scene.fog.color.copy(rgb(s.fog));
    if (raining) scene.fog.color.lerp(new THREE.Color(0x5c6770), 0.45);
    hemi.color.copy(rgb(s.top));
    hemi.groundColor.copy(rgb(s.ground));
    hemi.intensity = s.hemi * (raining ? 0.68 : 1);
    const dist = 90;
    const y = Math.max(s.elev, -0.25) * dist;
    sun.position.set(Math.cos(s.azim) * dist, y, Math.sin(s.azim) * dist);
    sun.target.position.set(0, 0, 0);
    sun.color.setRGB(s.sun[0], s.sun[1], s.sun[2]);
    sun.intensity = Math.max(0, s.sunI) * (raining ? 0.18 : 1);
    skyMat.uniforms.sunDir.value.copy(sun.position).normalize();
    moon.position.copy(sun.position).multiplyScalar(-1).setY(Math.abs(sun.position.y) + 18);
    moon.intensity = raining ? 0.02 : 0.05 + s.night * 0.35;
    stars.material.opacity = raining ? 0 : s.night;
    stars.visible = !raining && s.night > 0.05;
    renderer.toneMappingExposure = raining ? 0.58 + (1 - s.night) * 0.12 : 0.82 + (1 - s.night) * 0.35;
    applyFloorWeather();
  }

  function rebuildComposer() {
    const g = getSettings().graphics;
    const size = new THREE.Vector2();
    renderer.getSize(size);
    composer = new EffectComposer(renderer);
    composer.setSize(size.x, size.y);
    composer.addPass(new RenderPass(scene, camera));
    bloomPass = null;
    ssaoPass = null;
    if (g.ao && g.postProcessing) {
      try {
        ssaoPass = new SSAOPass(scene, camera, size.x, size.y);
        ssaoPass.kernelRadius = 12;
        ssaoPass.minDistance = 0.002;
        ssaoPass.maxDistance = 0.08;
        composer.addPass(ssaoPass);
      } catch {
        ssaoPass = null;
      }
    }
    if (g.bloom && g.postProcessing) {
      try {
        bloomPass = new UnrealBloomPass(new THREE.Vector2(size.x, size.y), 0.16, 0.38, 0.9);
        composer.addPass(bloomPass);
      } catch {
        bloomPass = null;
      }
    }
    composer.addPass(new OutputPass());
  }

  function applyGraphics() {
    const g = getSettings().graphics;
    const pr = Math.min(window.devicePixelRatio, g.pixelRatio || 1);
    renderer.setPixelRatio(pr);
    renderer.shadowMap.enabled = g.shadows !== "off";
    const dist = 24 + (g.viewDistance / 100) * 160;
    scene.fog.near = dist * 0.22;
    scene.fog.far = dist;
    if (raining) {
      scene.fog.near *= 0.5;
      scene.fog.far *= 0.72;
    }
    sun.castShadow = g.shadows !== "off";
    const map = { low: 512, medium: 1024, high: 2048, ultra: 4096 };
    const size = map[g.shadowQuality] || 1024;
    sun.shadow.mapSize.set(size, size);
    const env = g.rayTracing || g.reflections === "ultra" || g.reflections === "high" ? 1.25 : g.reflections === "off" ? 0.15 : 0.55;
    boxMat.envMapIntensity = env;
    metalMat.envMapIntensity = env + 0.3;
    applyFloorWeather();
    try {
      rebuildComposer();
    } catch {
      composer = null;
    }
  }

  function applyScreen() {
    const s = getSettings().screen;
    camera.fov = s.fov;
    camera.updateProjectionMatrix();
    resize();
  }

  function parseRes(value) {
    if (value === "native") return { w: window.innerWidth, h: window.innerHeight };
    const [w, h] = value.split("x").map(Number);
    return { w, h };
  }

  function aspectValue(name, fallback) {
    const table = { "16:9": 16 / 9, "16:10": 16 / 10, "4:3": 4 / 3, "21:9": 21 / 9 };
    if (name === "auto") return fallback;
    return table[name] || fallback;
  }

  function resize() {
    const s = getSettings().screen;
    const world = document.getElementById("world");
    const nativeW = window.innerWidth;
    const nativeH = window.innerHeight;
    let { w, h } = parseRes(s.resolution);
    let targetAspect = aspectValue(s.aspect, w / h);
    const stretched = !!s.stretched;
    if (stretched && s.aspect === "auto") targetAspect = 4 / 3;
    h = Math.round(w / targetAspect);
    if (stretched) {
      world.classList.remove("is-letterboxed");
      world.classList.add("is-stretched");
      canvas.style.width = "100%";
      canvas.style.height = "100%";
    } else {
      world.classList.remove("is-stretched");
      const fit = Math.min(nativeW / w, nativeH / h);
      const cssW = Math.round(w * fit);
      const cssH = Math.round(h * fit);
      const letterbox = s.resolution !== "native" || s.aspect !== "auto";
      world.classList.toggle("is-letterboxed", letterbox);
      canvas.style.width = letterbox ? `${cssW}px` : "100%";
      canvas.style.height = letterbox ? `${cssH}px` : "100%";
    }
    renderer.setSize(w, h, false);
    composer?.setSize(w, h);
    ssaoPass?.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    const brightness = 0.35 + (s.brightness / 100) * 1.25;
    const contrast = 0.7 + (s.contrast / 100) * 0.8;
    const blur = paused ? "blur(16px) " : "";
    canvas.style.filter = `${blur}brightness(${brightness}) contrast(${contrast})`;
  }

  async function setDisplayMode(mode) {
    try {
      if (mode === "fullscreen" || mode === "borderless") {
        if (!document.fullscreenElement) await document.documentElement.requestFullscreen();
      } else if (document.fullscreenElement) {
        await document.exitFullscreen();
      }
    } catch {
      /* ignore */
    }
  }

  function lock() {
    if (!player.active || paused) return;
    canvas.requestPointerLock();
  }

  function onLockChange() {
    lookEnabled = document.pointerLockElement === canvas;
  }

  function currentFpsCap() {
    if (!fpsMaxOn) return 9999;
    const lim = getSettings().screen.fpsLimit;
    if (!lim || lim === "unlimited") return 9999;
    const n = Number(lim);
    return Number.isFinite(n) && n > 0 ? n : 9999;
  }

  function tick(now) {
    if (!running) return;
    requestAnimationFrame(tick);
    const cap = currentFpsCap();
    const dt = Math.min(0.05, Math.max(0, (now - last) / 1000));
    last = now;

    if (worldLive) {
      if (player.active && !paused) {
        if (wish.prone) player.stance = "prone";
        else if (wish.crouch) player.stance = "crouch";
        else player.stance = "stand";

        const targetLean = (wish.leanLeft ? 0.16 : 0) + (wish.leanRight ? -0.16 : 0);
        player.lean += (targetLean - player.lean) * Math.min(1, dt * 10);
        leanPivot.rotation.set(0, 0, player.lean);

        const move = new THREE.Vector3();
        if (wish.forward) move.z -= 1;
        if (wish.back) move.z += 1;
        if (wish.left) move.x -= 1;
        if (wish.right) move.x += 1;
        const speed = move.lengthSq() > 0 ? moveSpeed() : 0;
        if (speed) move.normalize();
        const sin = Math.sin(lookYaw);
        const cos = Math.cos(lookYaw);
        const vx = (move.x * cos + move.z * sin) * speed;
        const vz = (-move.x * sin + move.z * cos) * speed;
        const grounded = isGrounded();
        playerBody.wakeUp();
        playerBody.velocity.x = vx;
        playerBody.velocity.z = vz;

        physWorld.step(1 / 60, dt, 4);
        playerBody.velocity.x = vx;
        playerBody.velocity.z = vz;

        yaw.position.x = playerBody.position.x;
        yaw.position.z = playerBody.position.z;
        yaw.position.y = playerBody.position.y - playerHalf + stanceHeight();

        for (const crate of crates) {
          crate.mesh.position.copy(crate.body.position);
          crate.mesh.quaternion.copy(crate.body.quaternion);
        }

        playerMesh.position.set(playerBody.position.x, playerBody.position.y - playerHalf, playerBody.position.z);
        playerMesh.rotation.y = lookYaw;
        animateWalk(dt, speed > 0.2, grounded);
      }

      const targetThird = thirdPerson ? 1 : 0;
      thirdBlend += (targetThird - thirdBlend) * Math.min(1, dt * 1.85);
      playerMesh.visible = player.active;
      playerRig.head.visible = thirdBlend > 0.4;
      playerRig.armL.visible = thirdBlend > 0.4;
      playerRig.armR.visible = thirdBlend > 0.4;
      playerRig.body.visible = thirdBlend > 0.4;
      playerRig.legL.visible = thirdBlend > 0.4;
      playerRig.legR.visible = thirdBlend > 0.4;
      const back = thirdBlend * TP_DISTANCE;
      camera.position.set(0, thirdBlend * 0.28, back);
      if (thirdBlend > 0.05) {
        camera.getWorldPosition(camWorld);
        const origin = new THREE.Vector3(yaw.position.x, yaw.position.y, yaw.position.z);
        rayDir.subVectors(camWorld, origin);
        const dist = rayDir.length();
        if (dist > 0.2) {
          rayDir.normalize();
          raycaster.set(origin, rayDir);
          raycaster.far = dist;
          raycaster.near = 0.15;
          const hits = raycaster.intersectObjects(
            crates.map((c) => c.mesh).concat(floor),
            false
          );
          if (hits.length && hits[0].distance < dist) {
            const safe = Math.max(0.35, hits[0].distance - 0.2);
            camera.position.set(0, thirdBlend * 0.28, (safe / dist) * back);
          }
        }
      }

      updateRain(dt);
      skyMat.uniforms.time.value = now * 0.001;
      camera.getWorldPosition(skyFollow);
      sky.position.copy(skyFollow);
    }

    if (cap < 9000 && now < nextFrameAt) return;
    nextFrameAt = cap < 9000 ? now + 1000 / cap : 0;
    frames += 1;
    frame += 1;
    if (now - fpsStamp >= 500) {
      fps = Math.min(cap, Math.round((frames * 1000) / (now - fpsStamp)));
      frames = 0;
      fpsStamp = now;
    }

    if (!worldLive) return;

    const g = getSettings().graphics;
    if (g.reflections !== "off" && frame % (raining ? 2 : 7) === 0) {
      cubeCam.position.copy(yaw.position);
      cubeCam.position.y = Math.max(0.6, yaw.position.y * 0.45);
      sky.visible = true;
      const hideFx = raining;
      if (hideFx) {
        rainMesh.visible = false;
        splashMesh.visible = false;
        puddles.visible = false;
      }
      cubeCam.update(renderer, scene);
      if (hideFx) {
        rainMesh.visible = true;
        splashMesh.visible = true;
        puddles.visible = true;
      }
    }

    const useFx = g.postProcessing || g.rayTracing;
    if (useFx && composer) {
      try {
        composer.render();
      } catch {
        renderer.render(scene, camera);
      }
    } else {
      renderer.render(scene, camera);
    }
  }

  requestAnimationFrame(tick);
  setTimeOfDay(720);

  Object.assign(api, {
    startPlay(minutes = 720, opts = {}) {
      player.active = true;
      paused = false;
      worldLive = true;
      thirdPerson = false;
      thirdBlend = 0;
      lookYaw = 0;
      lookPitch = 0;
      player.lean = 0;
      raining = !!opts.rain;
      controlLock = false;
      walkPhase = 0;
      walkAmp = 0;
      clearWish();
      playerBody.position.set(0, playerHalf + 0.02, 8);
      playerBody.velocity.set(0, 0, 0);
      playerBody.angularVelocity.set(0, 0, 0);
      playerBody.wakeUp();
      for (const crate of crates) {
        crate.body.position.set(crate.origin.x, crate.origin.y, crate.origin.z);
        crate.body.velocity.set(0, 0, 0);
        crate.body.angularVelocity.set(0, 0, 0);
        crate.body.quaternion.set(0, 0, 0, 1);
        crate.mesh.position.copy(crate.body.position);
        crate.mesh.quaternion.copy(crate.body.quaternion);
      }
      yaw.position.set(0, 1.7, 8);
      yaw.rotation.set(0, 0, 0);
      pitch.rotation.set(0, 0, 0);
      leanPivot.rotation.set(0, 0, 0);
      camera.position.set(0, 0, 0);
      camera.rotation.set(0, 0, 0);
      playerMesh.visible = true;
      playerRig.head.visible = false;
      playerRig.armL.visible = false;
      playerRig.armR.visible = false;
      setTimeOfDay(minutes);
      applyGraphics();
      applyScreen();
      canvas.addEventListener("click", lock);
      document.addEventListener("pointerlockchange", onLockChange);
    },
    stopPlay() {
      player.active = false;
      paused = false;
      worldLive = false;
      lookEnabled = false;
      thirdPerson = false;
      raining = false;
      controlLock = false;
      rainMesh.visible = false;
      splashMesh.visible = false;
      puddles.visible = false;
      clearWish();
      if (document.pointerLockElement) document.exitPointerLock();
      canvas.removeEventListener("click", lock);
      document.removeEventListener("pointerlockchange", onLockChange);
    },
    setPaused(value) {
      paused = value;
      worldLive = true;
      if (value && document.pointerLockElement) document.exitPointerLock();
      lookEnabled = false;
      resize();
    },
    setWorldLive(value) {
      worldLive = value;
    },
    setTimeOfDay,
    getFps: () => Math.min(fps, currentFpsCap()),
    applyGraphics,
    applyScreen,
    setDisplayMode,
    setControlLock(value) {
      controlLock = !!value;
      if (controlLock) clearWish();
    },
    setFpsMax(value) {
      fpsMaxOn = Number(value) !== 0;
    },
    getFpsMax: () => (fpsMaxOn ? 1 : 0),
    getFpsCap: () => currentFpsCap(),
    resize,
    dispose() {
      running = false;
      window.removeEventListener("keydown", onDown, true);
      window.removeEventListener("keyup", onUp, true);
      document.removeEventListener("mousemove", onMouseMove);
    },
  });
  return api;
}

function makePlayerMesh() {
  const group = new THREE.Group();
  const skin = new THREE.MeshStandardMaterial({ color: 0xc68642, roughness: 0.7 });
  const shirt = new THREE.MeshStandardMaterial({ color: 0x3d6b3d, roughness: 0.75 });
  const pants = new THREE.MeshStandardMaterial({ color: 0x2c3a5a, roughness: 0.75 });

  const head = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.34, 0.34), skin);
  head.position.y = 1.52;
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.5, 0.2), shirt);
  body.position.y = 1.1;

  function limb(w, h, d, mat, x, y) {
    const pivot = new THREE.Group();
    pivot.position.set(x, y, 0);
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    mesh.position.y = -h / 2;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    pivot.add(mesh);
    group.add(pivot);
    return pivot;
  }

  const armL = limb(0.12, 0.48, 0.12, shirt, -0.26, 1.32);
  const armR = limb(0.12, 0.48, 0.12, shirt, 0.26, 1.32);
  const legL = limb(0.14, 0.62, 0.14, pants, -0.1, 0.77);
  const legR = limb(0.14, 0.62, 0.14, pants, 0.1, 0.77);
  head.castShadow = true;
  body.castShadow = true;
  group.add(head, body);
  return { group, head, body, armL, armR, legL, legR };
}

function loadCobbleFloor(mesh) {
  const loader = new THREE.TextureLoader();
  const repeat = 28;
  const prep = (tex, space) => {
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(repeat, repeat);
    tex.anisotropy = 8;
    tex.colorSpace = space;
    tex.needsUpdate = true;
    return tex;
  };
  const mat = mesh.material;
  mat.map = prep(loader.load(publicAsset("textures/cobble/diff.jpg")), THREE.SRGBColorSpace);
  mat.normalMap = prep(loader.load(publicAsset("textures/cobble/nor.png")), THREE.NoColorSpace);
  mat.normalScale.set(1.4, 1.4);
  mat.roughnessMap = prep(loader.load(publicAsset("textures/cobble/rough.png")), THREE.NoColorSpace);
  mat.displacementMap = prep(loader.load(publicAsset("textures/cobble/disp.png")), THREE.NoColorSpace);
  mat.displacementScale = 0.1;
  mat.displacementBias = -0.03;
  mat.color.set(0xffffff);
  mat.needsUpdate = true;
}
