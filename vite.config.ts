import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 5173,
    proxy: {
      '/api/user': {
        target: 'http://localhost:8124',
        changeOrigin: true,
        secure: false,
      },
      '/api/app': {
        target: 'http://localhost:8125',
        changeOrigin: true,
        secure: false,
      },
      '/api/chat': {
        target: 'http://localhost:8125',
        changeOrigin: true,
        secure: false,
      },
      '/api/static': {
        target: 'http://localhost:8125',
        changeOrigin: true,
        secure: false,
      },
      '/api/health': {
        target: 'http://localhost:8125',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
