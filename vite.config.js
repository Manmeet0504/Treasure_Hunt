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
        clue4: './clue4.html',
        clue5: './clue5.html',
        final: './final.html'
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
});
