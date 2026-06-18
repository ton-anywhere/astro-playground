// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://ton-anywhere.github.io',
  base: '/astro-playground',
  integrations: [preact()],
});