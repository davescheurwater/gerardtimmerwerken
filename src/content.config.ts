import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		excerpt: z.string(),
		category: z.string(),
		region: z.string(),
		year: z.number(),
		cover: z.string(),
		gallery: z.array(z.string()).default([]),
		featured: z.boolean().default(false),
		serviceSlug: z.string().optional(),
	}),
});

export const collections = {
	projects,
};