import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

const proxy = process.env.NODE_ENV === 'development'
  ? {
    '/api': {
      target: 'http://localhost:5000',
      changeOrigin: true,
      secure: false,
    },
  }
  : undefined;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy
  },
});
