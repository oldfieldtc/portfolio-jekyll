// Import utilities from `astro:content`
import {z, defineCollection, reference} from "astro:content";

const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
        author: z.string(),
        image: z.object({
            filename: z.string(),
            alt: z.string()
        }),
        external: z.object({
            isExternal: z.boolean(),
            url: z.string().url().optional()
        }),
        categories: z.array(z.string()),
        tags: z.array(z.string())
    })
});

const workCollection = defineCollection({
   type: 'content',
   schema: z.object({
       title: z.string(),
       description: z.string(),
       image: z.object({
           filename: z.string(),
           alt: z.string()
       }),
       tags: z.array(z.string())
   })
});

export const collections = {
    posts: postsCollection,
    work: workCollection
}
