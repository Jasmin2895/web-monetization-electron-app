// function isCoilExtensionInstalled(browserWindow) {
//   if (browserWindow.getExtensions().Coil) return true;
//   else return false;
// }

// function isWebMonetized() {
//   return !!document.monetization;
// }

// function enableWebMonetization(browserWindow) {
//   if (isCoilExtensionInstalled(browserWindow) && isWebMonetized()) {
//     const monetizationTag = document.createElement("meta");
//     monetizationTag.name = "monetization";
//     monetizationTag.content = "payment_pointer";
//     document.head.appendChild(monetizationTag);
//   }
// }

// function disableWebMonetization(browserWindow) {
//   const removeMonetizationTag = document.querySelector(
//     'meta[name="monetization"]'
//   );
//   removeMonetizationTag.remove();
// }

// // function onMonetizationStop() {
// //   this.dispatchEvent(new Event("monetizationstop"));
// // }

// // function onMonetizationPending() {
// //   this.dispatchEvent(new Event("monetizationpending"));
// // }

// // function onMonetizationStart() {
// //   this.dispatchEvent(new Event("monetizationstart"));
// // }

// // function onMonetizationProgress() {
// //   this.dispatchEvent(new Event("monetizationprogress"));
// // }

// // function addWebMonetizationEventListeners() {
// //   if (isWebMonetized()) {
// //     document.monetization.addEventListener(
// //       "monetizationstop",
// //       this.onMonetizationStop
// //     );
// //     document.monetization.addEventListener(
// //       "monetizationpending",
// //       this.onMonetizationPending
// //     );
// //     document.monetization.addEventListener(
// //       "monetizationstart",
// //       this.onMonetizationStart
// //     );
// //     document.monetization.addEventListener(
// //       "monetizationprogress",
// //       this.onMonetizationProgress
// //     );
// //   }
// // }

// // removeWebMonetizationEventListeners() {
// //     if (isWebMonetized()) { // change it to function tomorrow
// //         document.monetization.removeEventListener('monetizationstop', this.onMonetizationStop);
// //         document.monetization.removeEventListener('monetizationpending', this.onMonetizationPending);
// //         document.monetization.removeEventListener('monetizationstart', this.onMonetizationStart);
// //         document.monetization.removeEventListener('monetizationprogress', this.onMonetizationProgress);
// //     }
// // }

// // module.exports.webMonetization = (browserWindow, opts) => {
// //   const options = Object.assign(
// //     {},
// //     {
// //       enableWebMonetization: true,
// //     },
// //     opts
// //   );
// //   console.log("document", browserWindow.webContents, window.document);
// //   console.log(
// //     "is extension installed",
// //     isCoilExtensionInstalled(browserWindow)
// //   );
// // };

// module.exports = {
//   enableWebMonetization,
//   disableWebMonetization,
// };
