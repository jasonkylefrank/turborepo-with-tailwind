const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    // app content
    `./src/**/*.{js,ts,jsx,tsx}`,
    // NEXT.JS's original comment (they had the next line commented-out):  "include packages if not transpiling"

    // JASON NOTES: 
    //   (1) The above comment says to only use this next line "if not transpiling", but
    //             I wonder if it actually IS needed if you ARE transpiling (in the consuming projects).
    //   (2) This next line DOES make Tailwind apply its classes for components in the UI package
    //        IF both: (a) the consuming package does NOT specify a "content" property in its tailwind.config.js, and
    //                 (b) the component in the UI package do not use the "ui-" prefix (even though the tailwind.config file says that that is the prefix to apply)
    //   (3) Upon changing this file, I initially get a build warning: "The utility `w-[calc(100%-theme('spacing[some_key][1.5]'))]` contains an invalid theme value and was not generated"
    

    // This next line works but it is causing really slow hot-reloading builds because I 
    //  think it tries to parse ALL files in those packages, including those in things like node_modules
    // "../../packages/**/*.{js,ts,jsx,tsx}",

    // This approach greatly speeds-up the hot-reloading build times compared to the above version that does not include "src" in the path
    "../../packages/**/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandblue: colors.blue[500],
        brandred: colors.red[500],
      },
    },
  },
  plugins: [],
};
