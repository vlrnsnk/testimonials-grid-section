import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/testimonials-grid-section/' : '/',

  server: {
    open: true,
    port: 5173,
    strictPort: true,
  },

  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
}));
