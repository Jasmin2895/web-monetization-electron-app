const newLinkUrl = document.querySelector("#new-link-url");
const newLinkSubmit = document.querySelector(".new-link-form--submit");

newLinkUrl.addEventListener("keyup", () => {
  newLinkUrl.disabled = !newLinkUrl.validity.valid;
});

newLinkUrl.addEventListener("submit", () => {
  newLinkSubmit.disabled = !newLinkUrl.validity.valid;
});
