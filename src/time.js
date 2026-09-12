export function clampMinutes(value) {
  const n = Number(value);
  if (!Number.isFinite(n)) return 720;
  return ((Math.round(n) % 1440) + 1440) % 1440;
}

export function formatClock(minutes) {
  const m = clampMinutes(minutes);
  const h = Math.floor(m / 60);
  const min = m % 60;
  return `${String(h).padStart(2, "0")}:${String(min).padStart(2, "0")}`;
}

export function periodName(minutes) {
  const h = clampMinutes(minutes) / 60;
  if (h >= 5 && h < 7) return "DAWN";
  if (h >= 7 && h < 11) return "MORNING";
  if (h >= 11 && h < 14) return "NOON";
  if (h >= 14 && h < 17) return "AFTERNOON";
  if (h >= 17 && h < 19.5) return "SUNSET";
  if (h >= 19.5 && h < 21.5) return "DUSK";
  return "NIGHT";
}

const STOPS = [
  { t: 0, top: [7, 9, 20], horizon: [10, 12, 24], fog: [6, 8, 16], sun: [0.18, 0.22, 0.35], sunI: 0.04, hemi: 0.1, ground: [6, 7, 12] },
  { t: 5.4, top: [18, 22, 48], horizon: [255, 120, 64], fog: [48, 28, 40], sun: [1, 0.48, 0.22], sunI: 0.55, hemi: 0.32, ground: [28, 18, 16] },
  { t: 7, top: [92, 148, 214], horizon: [255, 196, 138], fog: [150, 170, 190], sun: [1, 0.86, 0.62], sunI: 1.35, hemi: 0.72, ground: [42, 40, 36] },
  { t: 12, top: [118, 176, 236], horizon: [186, 214, 238], fog: [168, 188, 210], sun: [1, 0.98, 0.92], sunI: 2.15, hemi: 1.12, ground: [48, 46, 42] },
  { t: 16.2, top: [86, 142, 210], horizon: [255, 168, 96], fog: [160, 150, 140], sun: [1, 0.78, 0.48], sunI: 1.55, hemi: 0.78, ground: [44, 36, 30] },
  { t: 18.4, top: [28, 36, 78], horizon: [255, 86, 42], fog: [70, 40, 38], sun: [1, 0.38, 0.16], sunI: 0.62, hemi: 0.28, ground: [24, 16, 14] },
  { t: 20.6, top: [8, 10, 24], horizon: [18, 20, 38], fog: [8, 10, 18], sun: [0.2, 0.24, 0.4], sunI: 0.06, hemi: 0.12, ground: [8, 8, 14] },
  { t: 24, top: [7, 9, 20], horizon: [10, 12, 24], fog: [6, 8, 16], sun: [0.18, 0.22, 0.35], sunI: 0.04, hemi: 0.1, ground: [6, 7, 12] },
];

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function mixStop(a, b, t) {
  return {
    top: a.top.map((v, i) => lerp(v, b.top[i], t)),
    horizon: a.horizon.map((v, i) => lerp(v, b.horizon[i], t)),
    fog: a.fog.map((v, i) => lerp(v, b.fog[i], t)),
    sun: a.sun.map((v, i) => lerp(v, b.sun[i], t)),
    ground: a.ground.map((v, i) => lerp(v, b.ground[i], t)),
    sunI: lerp(a.sunI, b.sunI, t),
    hemi: lerp(a.hemi, b.hemi, t),
  };
}

export function skyState(minutes) {
  const hour = clampMinutes(minutes) / 60;
  let i = 0;
  while (i < STOPS.length - 1 && hour > STOPS[i + 1].t) i += 1;
  const a = STOPS[i];
  const b = STOPS[i + 1];
  const t = (hour - a.t) / Math.max(0.0001, b.t - a.t);
  const s = mixStop(a, b, t);
  const elev = Math.sin(((hour - 6) / 12) * Math.PI);
  const azim = ((hour - 6) / 12) * Math.PI;
  return {
    ...s,
    hour,
    elev,
    azim,
    night: hour < 5.2 || hour > 20.2 ? 1 : hour < 6.4 || hour > 19 ? 0.55 : 0,
    cssTop: `rgb(${s.top.map((v) => Math.round(v)).join(",")})`,
    cssHorizon: `rgb(${s.horizon.map((v) => Math.round(v)).join(",")})`,
  };
}

export const TIME_PRESETS = [
  { id: "dawn", label: "DAWN", minutes: 375 },
  { id: "morning", label: "MORNING", minutes: 540 },
  { id: "noon", label: "NOON", minutes: 720 },
  { id: "sunset", label: "SUNSET", minutes: 1110 },
  { id: "night", label: "NIGHT", minutes: 1320 },
];
