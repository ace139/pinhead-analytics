import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    category: z.string(),
    readTime: z.string(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
  }),
});

export const collections = { blog };