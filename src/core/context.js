import { MODES } from './modeManager.js';

export function createContext(mode) {
  return {
    mode,
    storage: mode === MODES.PRIVATE ? "memory" : "disk",
    aiEnabled: true,
    aiMemory: mode === MODES.PRIVATE ? false : true
  };
}
