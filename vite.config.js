// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  },
  plugins: [
    react(),
  ],
  css: {
    postcss: './postcss.config.js',
  },
});
