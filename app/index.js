const { app, BrowserWindow, session, ipcMain } = require("electron");
const os = require("os");
const path = require("path");
async function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js"),
      slashes: true,
    },
  });

  await session.defaultSession
    .loadExtension(
      path.join(
        os.homedir(),
        "/Library/Application Support/Google/Chrome/Default/Extensions/locbifcbeldmnphbgkdigjmkbfkhbnca/0.0.48_0"
      )
    )
    .then(({ id }) => {
      let extensionId = id;
      ipcMain.on("on-coil-extension-installed", (event, arg) => {
        mainWindow.webContents.send("extension loaded", extensionId);
      });
    });
  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  mainWindow.webContents.openDevTools();
  mainWindow.setTitle("Web Monetization Integration");

  mainWindow.on("closed", (e) => {
    mainWindow = null;
    mainWindow.webContents.send("disable-web-monetization");
  });
}

app.whenReady().then(async () => {
  createWindow();

  BrowserWindow.getDevToolsExtensions(); // this line was added, note no delay
  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
  app.on("web-contents-created", (event, contents) => {
    // console.log(contents.history);
  });
});

// Quit when all windows are closed.
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
