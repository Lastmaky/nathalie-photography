import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    site: 'https://lastmaky.github.io', 

  base: '/nathalie-portfolio',
  integrations: [tailwind()],
});
