import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    kicker: z.string().optional(),
    readTime: z.number().optional(),
    tags: z.array(z.string()).optional(),
    scraps: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
  }),
});

const scrap = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/scrap' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { posts, scrap };
