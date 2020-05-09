const {app, BrowserWindow} = require("electron");

let mainWindow = null;

app.on("ready", ()=> {
    mainWindow = new BrowserWindow({
        width:300,
        height:600,
        show: false
    });
    mainWindow.once("ready-to-show", ()=> {
        mainWindow.show();
    });

    mainWindow.on("closed", ()=> {
        mainWindow= null;
    });

    mainWindow.loadURL("https://coil.com/");
});