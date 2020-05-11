// const os = require("os");
// const fs = require("fs");

// const files = fs.readdirSync(os.homedir());

// console.log(files);

// files.forEach((name) => {
//   const file = document.createElement("li");
//   file.textContent = name;
//   window.document.body.appendChild(file);
// });

const newLinkUrl = document.querySelector("#new-link-url");
const newLinkSubmit = document.querySelector(".new-link-form--submit");

newLinkUrl.addEventListener("keyup", () => {
  newLinkUrl.disabled = !newLinkUrl.validity.valid;
});

newLinkUrl.addEventListener("submit", () => {
  newLinkSubmit.disabled = !newLinkUrl.validity.valid;
});
