import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';


export default defineConfig({
  // The dts plugin is to produce types for TypeScript.  Solves the "Cannot find module 'ui' or its corresponding type declarations.ts (2307)", which is an error in the consuming projects without the dts plugin
  plugins: [react(), dts({ insertTypesEntry: true })],
  build: {
    // For info about Vite's "Library mode", see: https://vitejs.dev/guide/build.html#library-mode
    // For info about Vite's "build.lib" properties, see: https://vitejs.dev/config/build-options.html#build-lib
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'ui',
      // the proper extensions will be added
      //fileName: '...', // The docs say: fileName is the name of the package file output, default fileName is the name option of package.json, it can also be defined as function taking the format and entryAlias as arguments.
      formats: ['es', 'cjs', 'umd', 'iife'] // Not sure which of these formats I actually need
    },
    rollupOptions: {
      // Make sure to externalize deps that shouldn't be bundled into your library.
      // For inspiration for my use-case see the original tsup.config file (which was the original build tool for this package),
      //  which also had an "external" property which was set to ["react"]
      external: ['react'],
      output: {
        // Provide global variables to use in the UMD build for externalized deps
        globals: {
          react: 'React', // NOTE: I'm not sure if this is correct... I was following the example which listed "Vue" but I'm not yet sure how this is used
          //vue: 'Vue',
        },
      },
    },
  },
})
