import "./style.css";
import { loadSettings } from "./settings.js";
import { unlockAudio, setAudioLevels } from "./audio.js";
import { createEngine } from "./engine.js";
import { createUI } from "./ui.js";

const settings = loadSettings();
setAudioLevels(settings.audio);

const canvas = document.querySelector("#game-canvas");
const engine = createEngine(canvas, () => settings);

createUI(document.querySelector("#ui-root"), {
  settings,
  engine,
  onQuitToMenu() {
    engine.resize();
  },
});

window.addEventListener("resize", () => engine.resize());
window.addEventListener("pointerdown", () => unlockAudio(), { once: true });

document.addEventListener("visibilitychange", () => {
  if (document.hidden && settings.audio.muteUnfocused) {
    setAudioLevels({ master: 0, ui: 0 });
  } else {
    setAudioLevels(settings.audio);
  }
});
