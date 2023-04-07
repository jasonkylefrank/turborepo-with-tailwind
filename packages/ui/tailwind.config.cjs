
// NOTE: The next few lines ARE applicable if I'm building the Tailwind classes IN this project
//       (rather than transpiling/building them in the consuming projects, which is what I'm doing at the moment).
//       Since I'm building stuff in the consuming projects, this Tailwind config file is just ignored, unless
//       I explicitly import it into the Tailwind config of those consuming projects and use it there.
//       But doing it that way means that things like the `prefix` property apply to ALL Tailwind classes
//       (whether they are in the UI package or the consuming package).
//       Since this file is ignored in this approach, I'm commenting-out the contents for clarity.

// const sharedConfig = require("tailwind-config/tailwind.config.js");

// module.exports = {
//   // prefix ui lib classes to avoid conflicting with the app
//   prefix: "ui-",
//   ...sharedConfig,
// };






// ------------------------------------- a different approach I was trying -----------
// JF: 4/7/23: Trying an approach where I import this config file into the web project
//     or the shared tailwind config file.
// module.exports = {
//   // prefix ui lib classes to avoid conflicting with the app
//   prefix: "ui-",
// };