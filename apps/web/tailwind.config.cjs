// tailwind config is required for editor support

module.exports = require("tailwind-config/tailwind.config.js");



//const sharedConfig = require("tailwind-config/tailwind.config.js");
//const uiConfig = require("ui/tailwind.config");


// module.exports = {
//   // Presets are "base" tailwind config file(s) from which we can extend for this specific project.  See: https://tailwindcss.com/docs/presets
//   presets: [sharedConfig],
//   // presets: [uiConfig, sharedConfig],

//   // content: [
//   //   // UPDATE: Including this line enabled Tailwind to apply its classes on elements defined in the 
//   //   //         UI package IF they do not use the "ui-" prefix (which they are supposed to use).
//   //   //         So it appears that the UI package's tailwind.config file is not being used right now.
//   //   // '../../packages/ui/src/**/*.{js,ts,jsx,tsx}'
//   // ]
// }
