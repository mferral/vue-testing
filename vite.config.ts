/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import { fileURLToPath, URL } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template: { transformAssetUrls }
  }),
  quasar({
    sassVariables: 'src/quasar-variables.sass'
  })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  test: {
    globals: true, // It declare true to avoid import any lib in our tests files
    environment: 'jsdom',
    // include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}'],
    // setupFiles: './src/test/setup.ts',
  }
})




