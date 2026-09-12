import { hoverSound, clickSound, backSound, confirmSound, unlockAudio, setAudioLevels } from "./audio.js";
import { applyPreset, markCustomIfNeeded, saveSettings } from "./settings.js";
import { TIME_PRESETS, formatClock, periodName, skyState, clampMinutes } from "./time.js";

const MAPS = [
  { id: "sandbox", name: "SANDBOX", art: "sandbox", locked: false },
  { id: "range", name: "MAP", art: "soon", locked: true },
  { id: "factory", name: "MAP", art: "soon", locked: true },
  { id: "harbor", name: "MAP", art: "soon", locked: true },
  { id: "outpost", name: "MAP", art: "soon", locked: true },
];

const RESOLUTIONS = [
  ["native", "NATIVE"],
  ["1280x720", "1280 x 720"],
  ["1366x768", "1366 x 768"],
  ["1600x900", "1600 x 900"],
  ["1920x1080", "1920 x 1080"],
  ["2560x1440", "2560 x 1440"],
  ["3840x2160", "3840 x 2160"],
];

export function createUI(root, { settings, engine, onQuitToMenu }) {
  let screen = "menu";
  let optionsReturn = "menu";
  let selectedMap = null;
  let selectedMinutes = 720;
  let selectedWeather = "clear";
  let playerName = "";
  let mpMax = 4;
  let mpMap = "sandbox";
  let mpLobby = null;
  let mpLobbies = [];
  let hudHidden = false;
  let loadTimer = 0;
  let ignoreEsc = false;

  root.innerHTML = `
    <section class="screen is-on" data-screen="menu">
      <h1 class="title-xl">SolDatoX</h1>
      <nav class="menu-stack">
        <button class="menu-btn" data-act="play">Play</button>
        <button class="menu-btn" data-act="multi">Multiplayer</button>
        <button class="menu-btn" data-act="mods">Mods</button>
        <button class="menu-btn" data-act="options">Options</button>
        <button class="menu-btn" data-act="exit">Exit</button>
      </nav>
    </section>

    <section class="screen" data-screen="loading">
      <h1 class="title-xl">SolDatoX</h1>
      <div class="loading-center">
        <div class="loading-label">LOADING</div>
        <div class="loading-bar"><span></span></div>
        <div class="loading-hint" id="load-hint">PREPARING</div>
      </div>
    </section>

    <section class="screen" data-screen="maps">
      <h1 class="title-xl compact">SELECT MAP</h1>
      <div class="maps-wrap">
        <div class="maps-grid" id="maps-grid"></div>
      </div>
      <button class="corner-btn left" data-act="back-maps">BACK</button>
      <button class="corner-btn right is-hidden" id="play-map" data-act="start-map">PLAY</button>
    </section>

    <section class="screen" data-screen="time">
      <h1 class="title-xl compact">TIME OF DAY</h1>
      <div class="time-stage">
        <div class="time-sky" id="time-sky"><div class="time-rain"></div></div>
        <div class="time-clock" id="time-clock">12:00</div>
        <div class="time-period" id="time-period">NOON</div>
        <div class="preset-row time-presets">
          ${TIME_PRESETS.map((p) => `<button class="chip" data-minutes="${p.minutes}">${p.label}</button>`).join("")}
        </div>
        <div class="weather-label">WEATHER</div>
        <div class="preset-row time-presets">
          <button class="chip" data-weather="clear">CLEAR</button>
          <button class="chip" data-weather="rain">RAIN</button>
        </div>
        <div class="time-slider-wrap">
          <input class="slider" id="time-slider" type="range" min="0" max="1439" value="720" />
        </div>
      </div>
      <button class="corner-btn left" data-act="back-time">BACK</button>
      <button class="corner-btn right" data-act="play-time">PLAY</button>
    </section>

    <section class="screen" data-screen="options">
      <h1 class="title-xl compact">OPTIONS</h1>
      <div class="options-tabs">
        <button class="tab-btn is-active" data-tab="screen">SCREEN</button>
        <button class="tab-btn" data-tab="graphics">GRAPHICS</button>
        <button class="tab-btn" data-tab="audio">AUDIO</button>
        <button class="tab-btn" data-tab="extra">EXTRA</button>
      </div>
      <div class="options-body" id="options-body"></div>
      <button class="corner-btn left" data-act="back-options">BACK</button>
    </section>

    <section class="screen" data-screen="mp-name">
      <h1 class="title-xl compact">NAME</h1>
      <div class="mp-form">
        <div class="opt-label">PLAYER NAME</div>
        <input class="mp-input" id="mp-player-name" maxlength="16" autocomplete="off" spellcheck="false" placeholder="ENTER NAME" />
      </div>
      <button class="corner-btn left" data-act="back-mp-name">BACK</button>
      <button class="corner-btn right is-disabled" id="mp-name-go" data-act="mp-name-go">CONTINUE</button>
    </section>

    <section class="screen" data-screen="mp-hub">
      <h1 class="title-xl compact">MULTIPLAYER</h1>
      <div class="mp-form">
        <div class="mp-signed" id="mp-signed"></div>
        <nav class="mp-hub-nav">
          <button class="menu-btn" data-act="mp-create">Create Match</button>
          <button class="menu-btn" data-act="mp-join">Join Match</button>
        </nav>
      </div>
      <button class="corner-btn left" data-act="back-mp-hub">BACK</button>
    </section>

    <section class="screen" data-screen="mp-create">
      <h1 class="title-xl compact">CREATE MATCH</h1>
      <div class="mp-form">
        <div class="opt-row">
          <div class="opt-label">LOBBY NAME</div>
          <div class="opt-control">
            <input class="mp-input mp-input-row" id="mp-lobby-name" maxlength="18" autocomplete="off" spellcheck="false" placeholder="NAME" />
          </div>
        </div>
        <div class="opt-row">
          <div class="opt-label">PLAYERS</div>
          <div class="opt-control mp-chips" id="mp-max-chips">
            <button type="button" class="chip" data-mp-max="2">2</button>
            <button type="button" class="chip is-on" data-mp-max="4">4</button>
            <button type="button" class="chip" data-mp-max="8">8</button>
            <button type="button" class="chip" data-mp-max="16">16</button>
          </div>
        </div>
        <div class="opt-label" style="margin-top:18px">MAP</div>
        <div class="mp-maps" id="mp-maps"></div>
      </div>
      <button class="corner-btn left" data-act="back-mp-create">BACK</button>
      <button class="corner-btn right" data-act="mp-create-go">CREATE</button>
    </section>

    <section class="screen" data-screen="mp-join">
      <h1 class="title-xl compact">JOIN MATCH</h1>
      <div class="mp-form">
        <div class="mp-row-list" id="mp-join-list"></div>
      </div>
      <button class="corner-btn left" data-act="back-mp-join">BACK</button>
    </section>

    <section class="screen" data-screen="mp-lobby">
      <h1 class="title-xl compact" id="mp-lobby-title">LOBBY</h1>
      <div class="mp-form">
        <div class="mp-lobby-meta" id="mp-lobby-meta"></div>
        <ul class="mp-players" id="mp-players"></ul>
        <div class="mp-note">MENU TEST ONLY</div>
      </div>
      <button class="corner-btn left" data-act="back-mp-lobby">BACK</button>
      <button class="corner-btn right" data-act="mp-start">START</button>
    </section>

    <section class="screen" data-screen="pause">
      <h1 class="title-xl">PAUSE</h1>
      <nav class="menu-stack">
        <button class="menu-btn" data-act="resume">Resume</button>
        <button class="menu-btn" data-act="options-pause">Options</button>
        <button class="menu-btn" data-act="quit">Quit</button>
      </nav>
    </section>

    <section class="screen" data-screen="exit">
      <div class="exit-screen">
        <h1 class="title-xl" style="position:relative;top:auto;left:auto">SolDatoX</h1>
      </div>
    </section>

    <div class="overlay-msg" id="toast" hidden></div>

    <div class="dev-console" id="dev-console" hidden>
      <div class="dev-console-log" id="dev-console-log"></div>
      <label class="dev-console-row">
        <span>]</span>
        <input id="dev-console-input" maxlength="180" autocomplete="off" spellcheck="false" />
      </label>
    </div>

    <div class="hud-layer" id="hud" hidden>
      <div class="crosshair" id="crosshair">
        <span class="n"></span><span class="s"></span><span class="w"></span><span class="e"></span>
        <span class="dot"></span><span class="ring"></span>
      </div>
      <div class="hud-hp" id="hud-hp">
        <span class="hp-cur">100</span><span class="hp-rest">/100</span>
      </div>
      <div class="fps-readout" id="fps"></div>
      <div class="chat-box" id="chat">
        <input id="chat-input" maxlength="120" placeholder="SAY..." />
      </div>
      <div class="inv-box" id="inv">
        <div class="inv-title">INVENTORY</div>
        <div class="inv-grid">
          ${Array.from({ length: 15 }, () => `<div class="inv-slot"></div>`).join("")}
        </div>
      </div>
    </div>
  `;

  const grid = root.querySelector("#maps-grid");
  grid.innerHTML = MAPS.map(
    (m) => `
    <button class="map-card ${m.locked ? "is-locked" : ""}" data-map="${m.id}" ${m.locked ? "disabled" : ""}>
      <div class="map-art ${m.art}"></div>
      ${m.locked ? `<div class="map-tag">COMING SOON</div>` : ""}
      <div class="map-name">${m.name}</div>
    </button>`
  ).join("");

  const mpMaps = root.querySelector("#mp-maps");
  mpMaps.innerHTML = MAPS.map(
    (m) => `
    <button class="map-card ${m.locked ? "is-locked" : "is-selected"}" data-mp-map="${m.id}" ${m.locked ? "disabled" : ""}>
      <div class="map-art ${m.art}"></div>
      ${m.locked ? `<div class="map-tag">COMING SOON</div>` : ""}
      <div class="map-name">${m.name}</div>
    </button>`
  ).join("");

  bindHoverSounds(root);

  function show(name) {
    screen = name;
    root.querySelectorAll(".screen").forEach((el) => {
      el.classList.toggle("is-on", el.dataset.screen === name);
      el.classList.toggle("is-over-game", name === "options" && optionsReturn === "pause" && el.dataset.screen === "options");
    });
    const world = document.getElementById("world");
    const live = name === "none" || name === "pause" || (name === "options" && optionsReturn === "pause");
    world.classList.toggle("is-paused", name === "pause");
    world.classList.toggle("is-options-over-game", name === "options" && optionsReturn === "pause");
    world.classList.toggle("is-playing", name === "none");
    world.classList.toggle("is-live", live);
    engine.setWorldLive(live);
    if (name === "loading") {
      const bar = root.querySelector(".loading-bar span");
      bar.style.animation = "none";
      void bar.offsetWidth;
      bar.style.animation = "loadfill 1.15s ease forwards";
    }
  }

  function pauseGame() {
    if (screen !== "game") return;
    ignoreEsc = true;
    closeChat();
    engine.setPaused(true);
    root.querySelector("#hud").hidden = true;
    show("pause");
    window.setTimeout(() => {
      ignoreEsc = false;
    }, 80);
  }

  function isConsoleKey(e) {
    return e.code === "Backquote" || e.key === "`" || e.key === "~";
  }

  function openConsole() {
    const box = root.querySelector("#dev-console");
    box.hidden = false;
    box.classList.add("is-on");
    const log = root.querySelector("#dev-console-log");
    if (!log.dataset.ready) {
      log.dataset.ready = "1";
      appendConsole("Console ready. Type fps_max 1 or fps_max 0");
    }
    const input = root.querySelector("#dev-console-input");
    input.value = "";
    input.focus();
    engine.setControlLock(true);
  }

  function closeConsole() {
    const box = root.querySelector("#dev-console");
    box.classList.remove("is-on");
    box.hidden = true;
    root.querySelector("#dev-console-input").blur();
    engine.setControlLock(false);
  }

  function consoleOpen() {
    return root.querySelector("#dev-console").classList.contains("is-on");
  }

  function appendConsole(text) {
    const log = root.querySelector("#dev-console-log");
    const line = document.createElement("div");
    line.textContent = text;
    log.appendChild(line);
    log.scrollTop = log.scrollHeight;
  }

  function runConsole(raw) {
    const text = raw.trim();
    if (!text) return;
    appendConsole(`] ${text}`);
    const [cmd, arg] = text.split(/\s+/);
    const name = cmd.toLowerCase();
    if (name === "fps_max") {
      if (arg === undefined) {
        appendConsole(`"fps_max" = "${engine.getFpsMax()}" (cap ${engine.getFpsCap()})`);
        return;
      }
      if (arg === "1") {
        engine.setFpsMax(1);
        appendConsole(`"fps_max" = "1"`);
        appendConsole(`cap ${engine.getFpsCap()} (settings)`);
        return;
      }
      if (arg === "0") {
        engine.setFpsMax(0);
        appendConsole(`"fps_max" = "0"`);
        appendConsole("cap 9999");
        return;
      }
      appendConsole("usage: fps_max 1 | fps_max 0");
      return;
    }
    appendConsole(`unknown command: ${cmd}`);
  }

  let toastTimer = 0;

  function toast(text) {
    const el = root.querySelector("#toast");
    el.textContent = text;
    el.hidden = false;
    el.classList.remove("is-on");
    void el.offsetWidth;
    el.classList.add("is-on");
    clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      el.classList.remove("is-on");
      el.hidden = true;
    }, 1400);
  }

  function goLoading(next, hint) {
    root.querySelector("#load-hint").textContent = hint;
    if (next === "quit-menu") {
      root.querySelector("#hud").hidden = true;
      root.querySelector("#chat").classList.remove("is-on");
      root.querySelector("#inv").classList.remove("is-on");
      engine.setControlLock(false);
      closeConsole();
    }
    show("loading");
    clearTimeout(loadTimer);
    loadTimer = window.setTimeout(() => {
      if (next === "game") enterGame();
      else if (next === "quit-menu") {
        leaveGame();
        show("menu");
        onQuitToMenu?.();
      } else show(next);
    }, 1200);
  }

  function enterGame() {
    show("none");
    document.getElementById("world").classList.add("is-playing");
    root.querySelector("#hud").hidden = false;
    applyHud();
    engine.startPlay(selectedMinutes, { rain: selectedWeather === "rain" });
    screen = "game";
    hudHidden = false;
    root.querySelector("#hud").classList.remove("is-stealth");
  }

  function leaveGame() {
    engine.stopPlay();
    document.getElementById("world").classList.remove("is-playing", "is-paused", "is-options-over-game", "is-live");
    root.querySelector("#hud").hidden = true;
    root.querySelector("#chat").classList.remove("is-on");
    root.querySelector("#inv").classList.remove("is-on");
    engine.setControlLock(false);
    closeConsole();
    hudHidden = false;
    root.querySelector("#hud").classList.remove("is-stealth");
  }

  function openChat() {
    const box = root.querySelector("#chat");
    box.classList.add("is-on");
    const input = root.querySelector("#chat-input");
    input.value = "";
    input.focus();
    engine.setControlLock(true);
  }

  function closeChat() {
    root.querySelector("#chat").classList.remove("is-on");
    root.querySelector("#chat-input").blur();
    engine.setControlLock(false);
  }

  function applyHud() {
    const extra = settings.extra;
    document.documentElement.style.setProperty("--hud", extra.hudColor);
    const hud = root.querySelector("#hud");
    const scale = extra.hudScale / 100;
    hud.style.opacity = String(extra.hudOpacity / 100);
    hud.style.transform = "none";
    hud.style.setProperty("--hud-scale", String(scale));
    root.querySelectorAll(".crosshair").forEach((el) => applyCrosshair(el, extra));
    root.querySelector("#fps").style.display = extra.showFps ? "block" : "none";
  }

  function applyAll() {
    setAudioLevels(settings.audio);
    engine.applyGraphics();
    engine.applyScreen();
    engine.setDisplayMode(settings.screen.displayMode);
    applyHud();
    saveSettings(settings);
  }

  function openOptions(from) {
    optionsReturn = from;
    renderOptions("screen");
    show("options");
  }

  root.addEventListener("click", (e) => {
    try {
      unlockAudio();
    } catch {
      /* ignore */
    }
    const actBtn = e.target.closest("[data-act]");
    const act = actBtn?.dataset.act;
    const map = e.target.closest("[data-map]")?.dataset.map;
    const mpMapBtn = e.target.closest("[data-mp-map]");
    const tab = e.target.closest("[data-tab]")?.dataset.tab;
    const maxChip = e.target.closest("[data-mp-max]");
    if (act) handleAct(act, actBtn.dataset);
    if (map && !e.target.closest(".map-card")?.disabled) selectMap(map);
    if (mpMapBtn && !mpMapBtn.disabled) selectMpMap(mpMapBtn.dataset.mpMap);
    if (maxChip) {
      mpMax = Number(maxChip.dataset.mpMax);
      root.querySelectorAll("[data-mp-max]").forEach((c) => c.classList.toggle("is-on", c === maxChip));
      clickSound();
    }
    if (tab) renderOptions(tab);
  });

  root.querySelector("#mp-player-name").addEventListener("input", syncNameGo);
  root.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;
    if (e.target.id === "mp-player-name") {
      e.preventDefault();
      handleAct("mp-name-go");
    }
    if (e.target.id === "mp-lobby-name") {
      e.preventDefault();
      handleAct("mp-create-go");
    }
  });

  function selectMap(id) {
    const info = MAPS.find((m) => m.id === id);
    if (!info || info.locked) return;
    selectedMap = id;
    root.querySelectorAll(".map-card").forEach((c) => c.classList.toggle("is-selected", c.dataset.map === id));
    root.querySelector("#play-map").classList.remove("is-hidden");
    clickSound();
  }

  function eStopPlay() {
    root.querySelector("#play-map").classList.add("is-hidden");
  }

  function cleanName(value) {
    return value.replace(/[^a-zA-Z0-9 ]/g, "").trim().slice(0, 16).toUpperCase();
  }

  function syncNameGo() {
    const ready = cleanName(root.querySelector("#mp-player-name").value).length >= 2;
    const btn = root.querySelector("#mp-name-go");
    btn.classList.toggle("is-disabled", !ready);
  }

  function openMpName() {
    show("mp-name");
    const input = root.querySelector("#mp-player-name");
    input.value = playerName;
    syncNameGo();
    window.setTimeout(() => input.focus(), 40);
  }

  function selectMpMap(id) {
    const info = MAPS.find((m) => m.id === id);
    if (!info || info.locked) return;
    mpMap = id;
    root.querySelectorAll("#mp-maps .map-card").forEach((c) => c.classList.toggle("is-selected", c.dataset.mpMap === id));
    clickSound();
  }

  function paintMpJoin() {
    root.querySelector("#mp-join-list").innerHTML = mpLobbies
      .map(
        (l) => `
      <button class="mp-lobby-row" data-act="mp-join-go" data-id="${l.id}">
        <span>${l.name}</span>
        <span class="meta">${l.people.length}/${l.max}</span>
        <span class="meta">${l.map}</span>
      </button>`
      )
      .join("");
    bindHoverSounds(root);
  }

  function openLobby() {
    if (!mpLobby) return;
    root.querySelector("#mp-lobby-title").textContent = mpLobby.name;
    root.querySelector("#mp-lobby-meta").textContent = `${mpLobby.map}  ·  ${mpLobby.people.length} / ${mpLobby.max}`;
    const slots = [];
    for (let i = 0; i < mpLobby.max; i += 1) {
      const who = mpLobby.people[i];
      if (!who) slots.push(`<li class="is-empty">—</li>`);
      else slots.push(`<li class="${who === playerName ? "is-you" : ""}">${who}${who === playerName ? "  (YOU)" : ""}</li>`);
    }
    root.querySelector("#mp-players").innerHTML = slots.join("");
    show("mp-lobby");
  }

  function joinLobby(id) {
    const found = mpLobbies.find((l) => l.id === id);
    if (!found) return;
    if (!found.people.includes(playerName)) {
      if (found.people.length >= found.max) {
        toast("LOBBY FULL");
        return;
      }
      found.people.push(playerName);
    }
    mpLobby = found;
    confirmSound();
    openLobby();
  }

  function handleAct(act, data = {}) {
    if (act === "play") {
      confirmSound();
      goLoading("maps", "MAP LIST");
    } else if (act === "multi") {
      clickSound();
      openMpName();
    } else if (act === "mp-name-go") {
      const name = cleanName(root.querySelector("#mp-player-name").value);
      if (name.length < 2) return;
      playerName = name;
      root.querySelector("#mp-signed").textContent = playerName;
      confirmSound();
      show("mp-hub");
    } else if (act === "back-mp-name") {
      backSound();
      show("menu");
    } else if (act === "back-mp-hub") {
      backSound();
      openMpName();
    } else if (act === "mp-create") {
      clickSound();
      root.querySelector("#mp-lobby-name").value = "";
      mpMax = 4;
      mpMap = "sandbox";
      root.querySelectorAll("[data-mp-max]").forEach((c) => c.classList.toggle("is-on", c.dataset.mpMax === "4"));
      root.querySelectorAll("#mp-maps .map-card").forEach((c) => c.classList.toggle("is-selected", c.dataset.mpMap === "sandbox"));
      show("mp-create");
    } else if (act === "back-mp-create") {
      backSound();
      show("mp-hub");
    } else if (act === "mp-create-go") {
      const lobbyName = cleanName(root.querySelector("#mp-lobby-name").value);
      if (lobbyName.length < 2) {
        root.querySelector("#mp-lobby-name").focus();
        return;
      }
      const mapInfo = MAPS.find((m) => m.id === mpMap);
      if (!mapInfo || mapInfo.locked) return;
      mpLobby = {
        id: `L${Date.now()}`,
        name: lobbyName,
        map: mapInfo.name,
        max: mpMax,
        people: [playerName],
      };
      mpLobbies.push(mpLobby);
      confirmSound();
      openLobby();
    } else if (act === "mp-join") {
      clickSound();
      paintMpJoin();
      show("mp-join");
    } else if (act === "mp-join-go") {
      joinLobby(data.id);
    } else if (act === "back-mp-join") {
      backSound();
      show("mp-hub");
    } else if (act === "back-mp-lobby") {
      backSound();
      mpLobby = null;
      show("mp-hub");
    } else if (act === "mp-start") {
      clickSound();
      toast("COMING SOON");
    } else if (act === "mods") {
      clickSound();
      toast("COMING SOON");
    } else if (act === "options") {
      clickSound();
      openOptions("menu");
    } else if (act === "exit") {
      backSound();
      show("exit");
    } else if (act === "back-maps") {
      backSound();
      selectedMap = null;
      eStopPlay();
      show("menu");
    } else if (act === "start-map") {
      if (!selectedMap) return;
      confirmSound();
      paintTime();
      show("time");
    } else if (act === "back-time") {
      backSound();
      show("maps");
    } else if (act === "play-time") {
      confirmSound();
      goLoading("game", selectedMap.toUpperCase());
    } else if (act === "back-options") {
      backSound();
      applyAll();
      show(optionsReturn);
      if (optionsReturn === "pause") engine.setPaused(true);
    } else if (act === "resume") {
      clickSound();
      closeConsole();
      engine.setPaused(false);
      engine.setControlLock(false);
      show("none");
      root.querySelector("#hud").hidden = false;
      screen = "game";
    } else if (act === "options-pause") {
      clickSound();
      closeConsole();
      engine.setPaused(true);
      openOptions("pause");
    } else if (act === "quit") {
      backSound();
      closeConsole();
      goLoading("quit-menu", "QUIT");
    }
  }

  function renderOptions(tab) {
    root.querySelectorAll(".tab-btn").forEach((b) => b.classList.toggle("is-active", b.dataset.tab === tab));
    const body = root.querySelector("#options-body");
    if (tab === "screen") body.innerHTML = screenPanel();
    if (tab === "graphics") body.innerHTML = graphicsPanel();
    if (tab === "audio") body.innerHTML = audioPanel();
    if (tab === "extra") body.innerHTML = extraPanel();
    wireOptions(body, tab);
    bindHoverSounds(body);
    if (tab === "extra") applyHud();
  }

  function screenPanel() {
    return `
      ${rowDrop("resolution", "RESOLUTION", RESOLUTIONS, settings.screen.resolution)}
      ${rowDrop("aspect", "ASPECT RATIO", [["auto", "AUTO"], ["16:9", "16:9"], ["16:10", "16:10"], ["4:3", "4:3"], ["21:9", "21:9"]], settings.screen.aspect)}
      ${rowToggle("stretched", "STRETCHED", settings.screen.stretched)}
      ${rowDrop("displayMode", "DISPLAY MODE", [["windowed", "WINDOWED"], ["borderless", "BORDERLESS"], ["fullscreen", "FULL SCREEN"]], settings.screen.displayMode)}
      ${rowBrightness(settings.screen.brightness)}
      ${rowSlider("contrast", "CONTRAST", settings.screen.contrast, 0, 100)}
      ${rowSlider("fov", "FIELD OF VIEW", settings.screen.fov, 60, 120)}
      ${rowToggle("vsync", "VSYNC", settings.screen.vsync)}
      ${rowDrop("fpsLimit", "FRAME LIMIT", [["unlimited", "UNLIMITED"], ["30", "30"], ["60", "60"], ["120", "120"], ["144", "144"], ["240", "240"]], settings.screen.fpsLimit)}
    `;
  }

  function graphicsPanel() {
    const g = settings.graphics;
    const presets = ["lowest", "low", "medium", "high", "epic", "maximum"];
    const chips = presets
      .map((p) => `<button class="chip ${g.preset === p ? "is-on" : ""}" data-preset="${p}">${p}</button>`)
      .join("");
    return `
      <div class="opt-row stack">
        <div class="opt-label">PRESET</div>
        <div class="preset-row">${chips}${g.preset === "custom" ? `<button class="chip is-on">CUSTOM</button>` : ""}</div>
      </div>
      ${rowDrop("shadows", "SHADOWS", [["off", "OFF"], ["low", "LOW"], ["medium", "MEDIUM"], ["high", "HIGH"], ["ultra", "ULTRA"]], g.shadows)}
      ${rowDrop("shadowQuality", "SHADOW QUALITY", [["low", "LOW"], ["medium", "MEDIUM"], ["high", "HIGH"], ["ultra", "ULTRA"]], g.shadowQuality)}
      ${rowDrop("antiAliasing", "ANTI ALIASING", [["off", "OFF"], ["fxaa", "FXAA"], ["smaa", "SMAA"], ["taa", "TAA"], ["msaa2", "MSAA 2X"], ["msaa4", "MSAA 4X"], ["msaa8", "MSAA 8X"]], g.antiAliasing)}
      ${rowDrop("textures", "TEXTURES", [["lowest", "LOWEST"], ["low", "LOW"], ["medium", "MEDIUM"], ["high", "HIGH"], ["epic", "EPIC"], ["max", "MAXIMUM"]], g.textures)}
      ${rowDrop("effects", "EFFECTS", [["lowest", "LOWEST"], ["low", "LOW"], ["medium", "MEDIUM"], ["high", "HIGH"], ["epic", "EPIC"], ["max", "MAXIMUM"]], g.effects)}
      ${rowSlider("viewDistance", "VIEW DISTANCE", g.viewDistance, 10, 100)}
      ${rowToggle("ao", "AMBIENT OCCLUSION", g.ao)}
      ${rowToggle("bloom", "BLOOM", g.bloom)}
      ${rowToggle("motionBlur", "MOTION BLUR", g.motionBlur)}
      ${rowDrop("reflections", "REFLECTIONS", [["off", "OFF"], ["low", "LOW"], ["medium", "MEDIUM"], ["high", "HIGH"], ["ultra", "ULTRA"]], g.reflections)}
      ${rowDrop("particles", "PARTICLES", [["lowest", "LOWEST"], ["low", "LOW"], ["medium", "MEDIUM"], ["high", "HIGH"], ["epic", "EPIC"], ["max", "MAXIMUM"]], g.particles)}
      ${rowDrop("anisotropic", "ANISOTROPIC", [["1", "1X"], ["2", "2X"], ["4", "4X"], ["8", "8X"], ["16", "16X"]], String(g.anisotropic))}
      ${rowToggle("postProcessing", "POST PROCESSING", g.postProcessing)}
      ${rowToggle("rayTracing", "RAY TRACING", g.rayTracing)}
    `;
  }

  function audioPanel() {
    const a = settings.audio;
    return `
      ${rowSlider("master", "MASTER", a.master, 0, 100)}
      ${rowSlider("music", "MUSIC", a.music, 0, 100)}
      ${rowSlider("ambient", "AMBIENT", a.ambient, 0, 100)}
      ${rowSlider("sfx", "SFX", a.sfx, 0, 100)}
      ${rowSlider("ui", "UI", a.ui, 0, 100)}
      ${rowSlider("voice", "VOICE", a.voice, 0, 100)}
      ${rowToggle("muteUnfocused", "MUTE UNFOCUSED", a.muteUnfocused)}
    `;
  }

  function extraPanel() {
    const x = settings.extra;
    return `
      ${rowColor("hudColor", "HUD COLOR", x.hudColor)}
      ${rowColor("crosshairColor", "CROSSHAIR COLOR", x.crosshairColor)}
      ${rowDrop("crosshairStyle", "CROSSHAIR STYLE", [["cross", "CROSS"], ["cross-dot", "CROSS DOT"], ["dot", "DOT"], ["t", "T"], ["circle", "CIRCLE"]], x.crosshairStyle)}
      ${rowSlider("crosshairLength", "CROSSHAIR LENGTH", x.crosshairLength, 2, 20)}
      ${rowSlider("crosshairThickness", "CROSSHAIR THICKNESS", x.crosshairThickness, 1, 8)}
      ${rowSlider("crosshairGap", "CROSSHAIR GAP", x.crosshairGap, 0, 18)}
      ${rowToggle("crosshairDot", "CENTER DOT", x.crosshairDot)}
      ${rowToggle("crosshairOutline", "CROSSHAIR OUTLINE", x.crosshairOutline)}
      <div class="opt-row stack">
        <div class="opt-label">PREVIEW</div>
        <div class="xh-preview">
          <div class="crosshair" id="xh-preview">
            <span class="n"></span><span class="s"></span><span class="w"></span><span class="e"></span>
            <span class="dot"></span><span class="ring"></span>
          </div>
        </div>
      </div>
      ${rowColor("damageColor", "DAMAGE COLOR", x.damageColor)}
      ${rowSlider("hudOpacity", "HUD OPACITY", x.hudOpacity, 20, 100)}
      ${rowSlider("hudScale", "HUD SCALE", x.hudScale, 70, 140)}
      ${rowSlider("radarOpacity", "RADAR OPACITY", x.radarOpacity, 0, 100)}
      ${rowToggle("showFps", "SHOW FPS", x.showFps)}
      ${rowToggle("showPing", "SHOW PING", x.showPing)}
      ${rowToggle("hitMarkers", "HIT MARKERS", x.hitMarkers)}
    `;
  }

  function wireOptions(body, tab) {
    body.querySelectorAll("[data-preset]").forEach((btn) => {
      btn.addEventListener("click", () => {
        clickSound();
        applyPreset(settings, btn.dataset.preset);
        applyAll();
        renderOptions("graphics");
      });
    });
    body.querySelectorAll(".drop").forEach((drop) => {
      const key = drop.dataset.key;
      drop.querySelector(".drop-btn").addEventListener("click", () => {
        body.querySelectorAll(".drop").forEach((d) => d.classList.toggle("is-open", d === drop && !drop.classList.contains("is-open")));
      });
      drop.querySelectorAll("[data-val]").forEach((opt) => {
        opt.addEventListener("click", () => {
          clickSound();
          const val = opt.dataset.val;
          if (tab === "screen") settings.screen[key] = val;
          if (tab === "graphics") {
            const parsed = key === "anisotropic" ? Number(val) : val;
            markCustomIfNeeded(settings, key, parsed);
          }
          if (tab === "extra") settings.extra[key] = val;
          applyAll();
          renderOptions(tab);
        });
      });
    });
    body.querySelectorAll(".slider").forEach((sl) => {
      sl.addEventListener("input", () => {
        const key = sl.dataset.key;
        const val = Number(sl.value);
        sl.parentElement.querySelector(".slider-val").textContent = String(val);
        if (key === "brightness") {
          const preview = body.querySelector("[data-bright-scene]");
          if (preview) preview.style.filter = `brightness(${0.35 + (val / 100) * 1.25})`;
        }
        if (tab === "screen") settings.screen[key] = val;
        if (tab === "graphics") markCustomIfNeeded(settings, key, val);
        if (tab === "audio") settings.audio[key] = val;
        if (tab === "extra") settings.extra[key] = val;
        applyAll();
      });
    });
    body.querySelectorAll(".toggle").forEach((tg) => {
      tg.addEventListener("click", () => {
        clickSound();
        const key = tg.dataset.key;
        const next = !(tab === "screen" ? settings.screen[key] : tab === "graphics" ? settings.graphics[key] : tab === "audio" ? settings.audio[key] : settings.extra[key]);
        if (tab === "screen") settings.screen[key] = next;
        if (tab === "graphics") markCustomIfNeeded(settings, key, next);
        if (tab === "audio") settings.audio[key] = next;
        if (tab === "extra") settings.extra[key] = next;
        applyAll();
        renderOptions(tab);
      });
    });
    body.querySelectorAll(".color-field").forEach((cf) => {
      cf.addEventListener("input", () => {
        settings.extra[cf.dataset.key] = cf.value;
        applyAll();
      });
    });
  }

  function paintTime() {
    selectedMinutes = clampMinutes(selectedMinutes);
    const sky = skyState(selectedMinutes);
    const clock = root.querySelector("#time-clock");
    const period = root.querySelector("#time-period");
    const slider = root.querySelector("#time-slider");
    const preview = root.querySelector("#time-sky");
    clock.textContent = formatClock(selectedMinutes);
    period.textContent = periodName(selectedMinutes);
    slider.value = String(selectedMinutes);
    preview.style.background = `linear-gradient(180deg, ${sky.cssTop} 0%, ${sky.cssHorizon} 72%, #000 100%)`;
    preview.classList.toggle("is-rain", selectedWeather === "rain");
    root.querySelectorAll("[data-minutes]").forEach((btn) => {
      btn.classList.toggle("is-on", Number(btn.dataset.minutes) === selectedMinutes);
    });
    root.querySelectorAll("[data-weather]").forEach((btn) => {
      btn.classList.toggle("is-on", btn.dataset.weather === selectedWeather);
    });
  }

  root.querySelector("#time-slider").addEventListener("input", (e) => {
    selectedMinutes = Number(e.target.value);
    paintTime();
  });
  root.querySelectorAll("[data-minutes]").forEach((btn) => {
    btn.addEventListener("click", () => {
      clickSound();
      selectedMinutes = Number(btn.dataset.minutes);
      paintTime();
    });
  });
  root.querySelectorAll("[data-weather]").forEach((btn) => {
    btn.addEventListener("click", () => {
      clickSound();
      selectedWeather = btn.dataset.weather;
      paintTime();
    });
  });
  paintTime();

  engine.onPauseRequest = pauseGame;

  window.addEventListener("keydown", (e) => {
    if (isConsoleKey(e)) {
      if (screen !== "pause") return;
      e.preventDefault();
      if (consoleOpen()) closeConsole();
      else openConsole();
      return;
    }
    if (consoleOpen()) {
      if (e.code === "Tab") {
        e.preventDefault();
        return;
      }
      if (e.code === "Escape") {
        e.preventDefault();
        closeConsole();
        return;
      }
      if (e.code === "Enter") {
        e.preventDefault();
        const input = root.querySelector("#dev-console-input");
        runConsole(input.value);
        input.value = "";
        return;
      }
      return;
    }
    if (e.code === "Tab") {
      e.preventDefault();
      if (ignoreEsc) return;
      if (screen === "game") pauseGame();
      else if (screen === "pause") handleAct("resume");
      return;
    }
    if (e.code === "Escape") {
      if (ignoreEsc) return;
      if (screen === "pause") {
        handleAct("resume");
      } else if (screen === "options") {
        handleAct("back-options");
      } else if (screen === "maps") {
        handleAct("back-maps");
      } else if (screen === "time") {
        handleAct("back-time");
      } else if (screen === "mp-name") {
        handleAct("back-mp-name");
      } else if (screen === "mp-hub") {
        handleAct("back-mp-hub");
      } else if (screen === "mp-create") {
        handleAct("back-mp-create");
      } else if (screen === "mp-join") {
        handleAct("back-mp-join");
      } else if (screen === "mp-lobby") {
        handleAct("back-mp-lobby");
      } else if (screen === "game") {
        e.preventDefault();
        pauseGame();
      }
      return;
    }
    if (screen !== "game") return;
    const chatBox = root.querySelector("#chat");
    const chatOn = chatBox.classList.contains("is-on");
    if (chatOn) {
      if (e.code === "Enter" || e.code === "Escape") {
        e.preventDefault();
        closeChat();
      }
      return;
    }
    if (e.code === "KeyU") {
      e.preventDefault();
      hudHidden = !hudHidden;
      root.querySelector("#hud").classList.toggle("is-stealth", hudHidden);
      return;
    }
    if (e.code === "KeyT") {
      e.preventDefault();
      openChat();
      return;
    }
    if (e.code === "AltLeft" || e.code === "AltRight") {
      e.preventDefault();
      root.querySelector("#inv").classList.toggle("is-on");
    }
  });

  window.addEventListener("blur", () => {
    if (settings.audio.muteUnfocused) setAudioLevels({ master: 0, ui: 0 });
  });
  window.addEventListener("focus", () => setAudioLevels(settings.audio));

  function tickHud() {
    requestAnimationFrame(tickHud);
    if (settings.extra.showFps && screen === "game") {
      const cap = engine.getFpsCap?.() || 9999;
      const n = Math.min(engine.getFps(), cap);
      root.querySelector("#fps").textContent = `${n} FPS`;
    }
  }
  tickHud();
  applyAll();

  return { show, getScreen: () => screen };
}

function bindHoverSounds(scope) {
  scope.querySelectorAll(".menu-btn, .corner-btn, .tab-btn, .map-card:not(.is-locked), .chip, .drop-btn, .toggle, .mp-lobby-row").forEach((el) => {
    if (el.dataset.hoverBound) return;
    el.dataset.hoverBound = "1";
    el.addEventListener("mouseenter", () => {
      try {
        hoverSound();
      } catch {
        /* ignore */
      }
    });
  });
}

function applyCrosshair(el, extra) {
  const style = extra.crosshairStyle || "cross";
  el.dataset.style = style;
  el.classList.toggle("has-outline", !!extra.crosshairOutline);
  el.classList.toggle("has-dot", !!extra.crosshairDot || style === "cross-dot" || style === "dot");
  el.style.setProperty("--ch-len", `${extra.crosshairLength}px`);
  el.style.setProperty("--ch-th", `${extra.crosshairThickness}px`);
  el.style.setProperty("--ch-gap", `${extra.crosshairGap}px`);
  el.style.setProperty("--ch-color", extra.crosshairColor);
}

function rowDrop(key, label, options, value) {
  const current = options.find((o) => o[0] === value)?.[1] ?? value;
  return `<div class="opt-row">
    <div class="opt-label">${label}</div>
    <div class="opt-control">
      <div class="drop" data-key="${key}">
        <button type="button" class="drop-btn">${current}</button>
        <div class="drop-list">${options.map(([v, t]) => `<button type="button" data-val="${v}">${t}</button>`).join("")}</div>
      </div>
    </div>
  </div>`;
}

function rowSlider(key, label, value, min, max) {
  return `<div class="opt-row">
    <div class="opt-label">${label}</div>
    <div class="opt-control">
      <input class="slider" type="range" min="${min}" max="${max}" value="${value}" data-key="${key}" />
      <span class="slider-val">${value}</span>
    </div>
  </div>`;
}

function rowBrightness(value) {
  const preview = 0.35 + (value / 100) * 1.25;
  return `<div class="opt-row stack">
    <div class="opt-label">BRIGHTNESS</div>
    <div class="opt-control">
      <input class="slider" type="range" min="0" max="100" value="${value}" data-key="brightness" />
      <span class="slider-val">${value}</span>
    </div>
    <div class="bright-preview">
      <div class="bright-scene" data-bright-scene style="filter: brightness(${preview})"></div>
      <div class="bright-scale"><span>DARK</span><span>BRIGHT</span></div>
    </div>
  </div>`;
}

function rowToggle(key, label, on) {
  return `<div class="opt-row">
    <div class="opt-label">${label}</div>
    <div class="opt-control">
      <button type="button" class="toggle ${on ? "is-on" : ""}" data-key="${key}">${on ? "ON" : "OFF"}</button>
    </div>
  </div>`;
}

function rowColor(key, label, value) {
  return `<div class="opt-row">
    <div class="opt-label">${label}</div>
    <div class="opt-control">
      <input class="color-field" type="color" value="${value}" data-key="${key}" />
    </div>
  </div>`;
}
