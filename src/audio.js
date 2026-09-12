let ctx;
let muted = false;
let uiGain = 0.7;
let masterGain = 0.8;

function ac() {
  try {
    if (!ctx) ctx = new AudioContext();
    if (ctx.state === "suspended") void ctx.resume();
    return ctx;
  } catch {
    return null;
  }
}

export function setAudioLevels({ master = 80, ui = 70 } = {}) {
  masterGain = master / 100;
  uiGain = ui / 100;
}

export function setMuted(value) {
  muted = value;
}

function tone({ freq, dur, type = "square", vol = 0.04, slide = 0 }) {
  if (muted) return;
  const audio = ac();
  if (!audio) return;
  try {
    const osc = audio.createOscillator();
    const gain = audio.createGain();
    const now = audio.currentTime;
    const level = Math.max(0.0001, vol * uiGain * masterGain);
    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);
    if (slide) osc.frequency.exponentialRampToValueAtTime(Math.max(40, freq + slide), now + dur);
    gain.gain.setValueAtTime(level, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);
    osc.connect(gain).connect(audio.destination);
    osc.start(now);
    osc.stop(now + dur + 0.02);
  } catch {
    /* ignore autoplay / headless limits */
  }
}

export function hoverSound() {
  tone({ freq: 1960, dur: 0.045, type: "square", vol: 0.028 });
}

export function clickSound() {
  tone({ freq: 420, dur: 0.07, type: "square", vol: 0.05, slide: -180 });
  tone({ freq: 1480, dur: 0.04, type: "triangle", vol: 0.02 });
}

export function backSound() {
  tone({ freq: 240, dur: 0.09, type: "square", vol: 0.045, slide: -80 });
}

export function confirmSound() {
  tone({ freq: 520, dur: 0.08, type: "square", vol: 0.04 });
  tone({ freq: 780, dur: 0.1, type: "triangle", vol: 0.03, slide: 120 });
}

export function unlockAudio() {
  ac();
}
