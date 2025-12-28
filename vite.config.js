import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
        login: './login.html',
        clue1: './clue1.html',
        clue2: './clue2.html',
        clue3: './clue3.html',
        deadEnd1: './deadEnd1.html',
        final: './final.html'
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
});
