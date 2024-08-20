// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
   plugins: [react()],
   build: {
      rollupOptions: {
         external: [
            'react-icons/fa' // Mark react-icons/fa as an external dependency
         ]
      }
   }
});
