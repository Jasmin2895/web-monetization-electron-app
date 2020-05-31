// Modules to control application life and create native browser window
const { app, BrowserWindow, session, ipcMain } = require("electron");
const os = require("os");
const { default: installExtension } = require("electron-devtools-installer");
const path = require("path");
// const {
//   enableWebMonetization,
//   disableWebMonetization,
// } = require("./electron-web-monetization");
const COIL_EXTENSION_ID = "locbifcbeldmnphbgkdigjmkbfkhbnca";
async function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js"),
      slashes: true,
      // sandbox: true,
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
  mainWindow.setTitle("Coil Integration testing!");

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.whenReady().then(async () => {
  createWindow();
  const options = {
    enableMonetization: true,
    disableMonetization: false,
  };

  // check if coil is installed dispatch event from main to renderer process to initialize web monetization.
  // ipcMain.sendSync("on-coil-extension-installed", true);

  ipcMain.on("asynchronous-message", (event, arg) => {
    console.log(arg); // prints "ping"
    event.reply("asynchronous-reply", "pong");
  });

  ipcMain.on("synchronous-message", (event, arg) => {
    console.log(arg); // prints "ping"
    event.returnValue = "pong";
  });

  BrowserWindow.getDevToolsExtensions(); // this line was added, note no delay
  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
  app.on("web-contents-created", (event, contents) => {
    console.log(contents.history);
  });
});

// Quit when all windows are closed.
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
