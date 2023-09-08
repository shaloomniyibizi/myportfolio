import { defineConfig, optimizeDeps } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/cyonfig/
export default defineConfig(
  {
    plugins: [react()],
    server: {
      host: true
    },
  } 
);