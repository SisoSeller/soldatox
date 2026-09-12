const KEY = "soldatox-settings-v3";

export const GRAPHICS_PRESETS = {
  lowest: {
    shadows: "off",
    shadowQuality: "low",
    antiAliasing: "off",
    textures: "lowest",
    effects: "lowest",
    viewDistance: 20,
    ao: false,
    bloom: false,
    motionBlur: false,
    reflections: "off",
    particles: "lowest",
    anisotropic: 1,
    postProcessing: false,
    rayTracing: false,
    pixelRatio: 0.6,
  },
  low: {
    shadows: "low",
    shadowQuality: "low",
    antiAliasing: "fxaa",
    textures: "low",
    effects: "low",
    viewDistance: 35,
    ao: false,
    bloom: false,
    motionBlur: false,
    reflections: "low",
    particles: "low",
    anisotropic: 2,
    postProcessing: false,
    rayTracing: false,
    pixelRatio: 0.75,
  },
  medium: {
    shadows: "medium",
    shadowQuality: "medium",
    antiAliasing: "smaa",
    textures: "medium",
    effects: "medium",
    viewDistance: 55,
    ao: true,
    bloom: false,
    motionBlur: false,
    reflections: "medium",
    particles: "medium",
    anisotropic: 4,
    postProcessing: true,
    rayTracing: false,
    pixelRatio: 1,
  },
  high: {
    shadows: "high",
    shadowQuality: "high",
    antiAliasing: "taa",
    textures: "high",
    effects: "high",
    viewDistance: 75,
    ao: true,
    bloom: true,
    motionBlur: false,
    reflections: "high",
    particles: "high",
    anisotropic: 8,
    postProcessing: true,
    rayTracing: true,
    pixelRatio: 1.25,
  },
  epic: {
    shadows: "ultra",
    shadowQuality: "ultra",
    antiAliasing: "msaa4",
    textures: "epic",
    effects: "epic",
    viewDistance: 90,
    ao: true,
    bloom: true,
    motionBlur: true,
    reflections: "ultra",
    particles: "epic",
    anisotropic: 16,
    postProcessing: true,
    rayTracing: true,
    pixelRatio: 1.5,
  },
  maximum: {
    shadows: "ultra",
    shadowQuality: "ultra",
    antiAliasing: "msaa8",
    textures: "max",
    effects: "max",
    viewDistance: 100,
    ao: true,
    bloom: true,
    motionBlur: true,
    reflections: "ultra",
    particles: "max",
    anisotropic: 16,
    postProcessing: true,
    rayTracing: true,
    pixelRatio: 2,
  },
};

export const DEFAULTS = {
  screen: {
    resolution: "native",
    aspect: "auto",
    displayMode: "windowed",
    stretched: false,
    brightness: 70,
    contrast: 50,
    fov: 90,
    vsync: true,
    fpsLimit: "unlimited",
  },
  graphics: {
    preset: "epic",
    ...GRAPHICS_PRESETS.epic,
  },
  audio: {
    master: 80,
    music: 60,
    ambient: 70,
    sfx: 80,
    ui: 70,
    voice: 80,
    muteUnfocused: true,
  },
  extra: {
    hudColor: "#ffffff",
    crosshairColor: "#ffffff",
    hudOpacity: 90,
    hudScale: 100,
    showFps: true,
    showPing: false,
    hitMarkers: true,
    damageColor: "#ff3b3b",
    radarOpacity: 80,
    crosshairStyle: "cross",
    crosshairLength: 6,
    crosshairThickness: 2,
    crosshairGap: 5,
    crosshairDot: false,
    crosshairOutline: true,
  },
};

export function loadSettings() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return structuredClone(DEFAULTS);
    const parsed = JSON.parse(raw);
    return {
      screen: { ...DEFAULTS.screen, ...parsed.screen },
      graphics: { ...DEFAULTS.graphics, ...parsed.graphics },
      audio: { ...DEFAULTS.audio, ...parsed.audio },
      extra: { ...DEFAULTS.extra, ...parsed.extra },
    };
  } catch {
    return structuredClone(DEFAULTS);
  }
}

export function saveSettings(settings) {
  localStorage.setItem(KEY, JSON.stringify(settings));
}

export function applyPreset(settings, name) {
  const preset = GRAPHICS_PRESETS[name];
  if (!preset) return settings;
  settings.graphics = { ...settings.graphics, preset: name, ...preset };
  return settings;
}

export function markCustomIfNeeded(settings, key, value) {
  const currentPreset = settings.graphics.preset;
  settings.graphics[key] = value;
  if (currentPreset === "custom") return;
  const expected = GRAPHICS_PRESETS[currentPreset];
  if (expected && expected[key] !== value) settings.graphics.preset = "custom";
}
