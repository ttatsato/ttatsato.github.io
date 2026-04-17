import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// GitHub Pages settings.
// - User/Org page (username.github.io): site: 'https://<user>.github.io', base: '/'
// - Project page (username.github.io/<repo>): site: 'https://<user>.github.io', base: '/<repo>/'
export default defineConfig({
  site: 'https://ttatsato.github.io',
  base: '/',
  integrations: [mdx()],
});
