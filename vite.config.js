import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import ghPages from 'vite-plugin-gh-pages';

export default defineConfig({
  plugins: [react()],
  base: '/ex-three', // Update with your repository name
});