import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base = subpath where the built site is served. For GitHub Pages at
// https://pacharadon.github.io/SQLPandas/prep/  → base '/SQLPandas/prep/'
// For local dev (`npm run dev`) Vite ignores base for the server URL, so
// localhost:5173/ keeps working.
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
});
