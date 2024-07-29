import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase"
    },
  },
  resolve: {
    alias: {
      '@': '/src', // Simplifies imports from the src directory
    },
  },
  build: {
    assetsInlineLimit: 4096, // Adjust this limit if needed
  },
  base: './', // Ensures the base path is correctly set for your deployment
  server: {
    open: true, // Automatically open the app in the browser on server start
  },
});