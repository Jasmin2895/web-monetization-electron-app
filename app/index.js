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
      preload: path.join(__dirname, "preload.js"),
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
    .then(({ id, name }) => {
      console.log("chrome extension id", id, name);
    });
  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
  mainWindow.setTitle("Coil Integration testing!");
  // open devTools on demand
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(async () => {
  createWindow();
  const options = {
    enableMonetization: true,
    disableMonetization: false,
  };

  ipcMain.on("on-coil-extension-installed", (event, arg) => {
    // Displays the object sent from the renderer process:
    //{
    //    message: "Hi",
    //    someData: "Let's go"
    //}
    console.log(arg);
  });

  ipcRenderer.sendSync("on-coil-extension-installed", "ping");

  // bw.loadURL("https://reactjs.org");
  BrowserWindow.getDevToolsExtensions(); // this line was added, note no delay
  // BrowserWindow.addDevToolsExtension(
  //   os.homedir(),
  //   "/Library/Application Support/Google/Chrome/Default/Extensions/locbifcbeldmnphbgkdigjmkbfkhbnca/0.0.48_0"
  // );
  // installExtension(COIL_EXTENSION_ID)
  //   .then((name) => console.log(`Added Extension:  ${name}`))
  //   .catch((err) => console.log("An error occurred: ", err));
  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
  app.on("web-contents-created", (event, contents) => {
    console.log(contents.history);
  });
});

// Quit when all windows are closed.
app.on("window-all-closed", function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
