// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
// window.addEventListener("DOMContentLoaded", () => {
//   const replaceText = (selector, text) => {
//     console.log("selector and text", selector, text);
//     const element = document.getElementById(selector);
//     console.log("element", element);
//     if (element) element.innerText = text;
//   };

//   for (const type of ["chrome", "node", "electron"]) {
//     console.log("type-version", type, process.versions[type]);
//     replaceText(`${type}-version`, process.versions[type]);
//   }
// });

const { remote } = require("electron");

let currWindow = remote.BrowserWindow.getFocusedWindow();

window.closeCurrentWindow = function () {
  currWindow.close();
};
