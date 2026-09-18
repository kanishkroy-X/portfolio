import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://kanishkroy.com',
  output: 'static',
  devToolbar: {
    enabled: false
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
