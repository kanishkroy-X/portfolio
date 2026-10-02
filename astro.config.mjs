import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://kanishkroy.com',
  output: 'static',
  redirects: {
    '/work/ai-ad-production': '/work/adidas-samba'
  },
  devToolbar: {
    enabled: false
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
