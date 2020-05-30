const { app, BrowserWindow } = require("electron");

let mainWindow = null;

function createAppWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
  });

  mainWindow.on("closed", () => {
    mainWindow = null;
  });

  mainWindow.loadFile("index.html");

  mainWindow.webContents.openDevTools();
  mainWindow.addTabbedWindow();
}

app.whenReady().then(createAppWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createAppWindow();
  }
});
