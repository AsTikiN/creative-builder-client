import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@modules': '/src/modules',
      '@components': '/src/components',
      '@store': '/src/store',
      '@theme': '/src/theme',
      '@typings': '/src/typings',
      '@config': '/src/config',
      '@utils': '/src/utils',
      '@': '/src',
    },
  },
});
