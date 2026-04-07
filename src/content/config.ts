import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date(),
		coverImage: image().optional(),
		coverAlt: z.string().optional(),
		image: image().optional(),
		tags: z.array(z.string()),
	}),
});

export const collections = { blog };
