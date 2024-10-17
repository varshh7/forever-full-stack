import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,  // Set server port to 5174
  },
  build: {
    sourcemap: true,  // Enable source maps for both development and production
    rollupOptions: {
      external: ['react-router-dom'], // Externalize only react-router-dom
    },
  },
});
