const { ipcRenderer } = require("electron");
ipcRenderer.send("on-coil-extension-installed");

ipcRenderer.on("extension loaded", (event, arg) => {
  // Update the second interface or whatever you need to do
  // for example show an alert ...
  // arg contains the data sent from the first view

  if (arg) {
    if (!document.monetization) {
      const monetizationTag = document.createElement("meta");
      monetizationTag.name = "monetization";
      monetizationTag.content = "payment_pointer";
      document.head.appendChild(monetizationTag);
    }
  }
});

ipcRenderer.on("disable-web-monetization", () => {
  const removeMonetizationTag = document.querySelector(
    'meta[name="monetization"]'
  );
  removeMonetizationTag.remove();
});

//add event listeners
document.monetization &&
  document.monetization.addEventListener(
    "monetizationstart",
    startEventHandler
  );

function startEventHandler(event) {
  //   console.log("event", event);
}
