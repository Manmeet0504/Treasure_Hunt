import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'login.html'),
        clue1: resolve(__dirname, 'clue1.html'),
        clue2: resolve(__dirname, 'clue2.html'),
        clue3: resolve(__dirname, 'clue3.html'),
        clue4: resolve(__dirname, 'clue4.html'),
        clue5: resolve(__dirname, 'clue5.html'),
        final: resolve(__dirname, 'final.html')
      }
    },
    assetsInlineLimit: 0
  },
  server: {
    port: 3000,
    open: true
  }
});
