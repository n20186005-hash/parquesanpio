import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// ÚNICO punto para configurar el dominio canónico.
// Con el dominio ya conectado, se fijan canonical, og:url y el sitemap.
const site = 'https://parquesanpio.com';

export default defineConfig({
  site: site || undefined,
  integrations: site ? [sitemap({filter: (page) => !/\/404(?:\.html|\/)?$/.test(new URL(page).pathname)})] : [],
  vite: {
    plugins: [tailwindcss()]
  }
});
