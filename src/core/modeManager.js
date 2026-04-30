export const MODES = {
  STANDARD: "STANDARD",
  PRIVATE: "PRIVATE" // Tor later
};

let currentMode = MODES.STANDARD;

export function getMode() {
  return currentMode;
}

export function setMode(mode) {
  currentMode = mode;
}
