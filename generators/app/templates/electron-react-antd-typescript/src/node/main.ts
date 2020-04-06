import { app, BrowserWindow, Menu, Tray, globalShortcut, ipcMain, MenuItem, MenuItemConstructorOptions } from 'electron';
import path from 'path';

const rootPath = path.join(__dirname, '..', '..');

let mainWindow: BrowserWindow = null;
let tray = null;
let appVisible = false;

app.on('browser-window-blur', () => {
  appVisible = false;
});

app.on('browser-window-focus', () => {
  appVisible = true;
});

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      preload: path.join(rootPath, 'out/preload/preload.js')
    },
  })

  if (process.platform === 'darwin') {
    app.dock.show();
  }
  mainWindow.loadFile(path.join(rootPath, 'index.html'));
  mainWindow.on('close', (e) => {
    e.preventDefault();
    mainWindow.hide();
  });
}

app.on('ready', () => {
  createWindow();
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
});

app.on('activate', function () {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
});

app.setAboutPanelOptions({
  applicationName: 'uAid Clipboard',
  applicationVersion: '1.0.0',
  copyright: '',
  authors: ['cowboykx'],
  iconPath: ''
})