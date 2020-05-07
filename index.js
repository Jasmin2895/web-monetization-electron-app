const electron = require("electron");

const app = electron.app;
app.on("ready", ()=> {
    console.log("Hello from Electron!")
})