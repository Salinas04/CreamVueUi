import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      // Set the entry point (where the exportable components are)
      entry: resolve(__dirname, 'src/lib/index.js'),
      name: 'CreamVueUI',
      // Proper file names for different formats
      fileName: (format) => `cream-vue-ui.${format}.js`,
    },
    rollupOptions: {
      // Make sure to externalize deps that shouldn't be bundled
      external: ['vue'],
      output: {
        // Global variables to use in UMD build for externalized deps
        globals: {
          vue: 'Vue',
        },
        // Generate CSS file
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'style.css';
          return assetInfo.name;
        },
      },
    },
    // Generate sourcemaps for better debugging
    sourcemap: true,
    // Minify the output for smaller file sizes
    minify: 'terser',
  },
})
