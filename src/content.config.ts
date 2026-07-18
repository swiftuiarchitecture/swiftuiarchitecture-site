import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const resources = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/resources" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    resourceType: z.enum(["article", "video", "book", "open-source", "wwdc"]),
    topics: z.array(z.string()).min(1),
    difficulty: z.enum(["beginner", "intermediate", "advanced"]),
    url: z.string().url(),
    publishedDate: z.coerce.date(),
    featured: z.boolean().default(false),
    summary: z.string(),
    editorNote: z.string().optional(),
    duration: z.string().optional()
  })
});

export const collections = { resources };
