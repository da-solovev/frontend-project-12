import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    minify: false,
    sourcemap: true,
    rollupOptions: {
      preserveEntrySignatures: 'strict',
    },
  },
  plugins: [react()],
  server: {
    port: 5003,
    proxy: {
      // Проксируем запросы к API
      '/api': {
        target: 'http://localhost:5001',
      },
      // Проксируем WebSocket соединения
      '/socket.io': {
        target: 'ws://localhost:5001',
        ws: true,
        rewriteWsOrigin: true,
      },
    },
  },
});
