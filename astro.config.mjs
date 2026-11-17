// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.willemsteintimmerwerken.nl',
	integrations: [sitemap({ filter: (page) => !page.endsWith('/bedankt/') })],
});
