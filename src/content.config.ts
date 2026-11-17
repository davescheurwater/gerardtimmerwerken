import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) => z.object({
		title: z.string(),
		excerpt: z.string(),
		category: z.string(),
		region: z.string(),
		year: z.number(),
		cover: image(),
		gallery: z.array(image()).default([]),
		featured: z.boolean().default(false),
		serviceSlug: z.string().nullish(),
	}),
});

export const collections = {
	projects,
};