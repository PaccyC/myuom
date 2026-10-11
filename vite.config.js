import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.md'],
  server: {
    port: 3000,
    open: true,
    host: true
  }
});

