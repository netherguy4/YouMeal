import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import { FontaineTransform } from 'fontaine'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

const options = {
  fallbacks: ['BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Arial', 'Noto Sans'],
  // resolve absolute URL -> file
  resolvePath: (id) => new URL(`.${id}`, import.meta.url),
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [FontaineTransform.vite(options), vue(), vueJsx(), vueDevTools()],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `
					@use "@/assets/sass" as *
				`,
      },
      scss: {
        additionalData: `
					@use "@/assets/sass" as *;
				`,
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  base: '',
})
