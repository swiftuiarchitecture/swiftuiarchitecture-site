import { defineCollection, z } from "astro:content";

const resources = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    resourceType: z.enum([
      "article",
      "video",
      "book",
      "open-source",
      "wwdc",
      "live-event"
    ]),
    topics: z.array(z.string()),
    difficulty: z.enum([
      "beginner",
      "intermediate",
      "advanced"
    ]),
    url: z.string().url(),
    publishedDate: z.coerce.date(),
    featured: z.boolean().default(false),
    summary: z.string(),
    editorNote: z.string(),
    duration: z.string(),

    eventDate: z.coerce.date().optional(),
    eventTime: z.string().optional(),
    timezone: z.string().optional(),
    eventStatus: z
      .enum(["upcoming", "past", "cancelled"])
      .optional(),
    recordingUrl: z.string().url().optional()
  })
});

export const collections = {
  resources
};