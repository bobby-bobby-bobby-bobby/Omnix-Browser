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
      webviewTag: true,
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  mainWindow.loadFile('src/ui/index.html');
}

app.whenReady().then(createWindow);
