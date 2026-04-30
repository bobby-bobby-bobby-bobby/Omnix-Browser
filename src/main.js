import { app, BrowserWindow } from 'electron';
import { createContext } from './core/context.js';

let mainWindow;
let context;

function createWindow() {
  context = createContext("STANDARD");

  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  mainWindow.loadURL("https://example.com");
}

app.whenReady().then(createWindow);
