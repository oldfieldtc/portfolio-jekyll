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

const eventsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        relatedPosts: z.array(reference('events')).optional(),
        author: reference('author')
    })
});

const authorCollection = defineCollection({
    type: 'data',
    schema: ({image}) => z.object({
        name: z.string(),
        bio: z.string(),
        email: z.string(),
        role: z.enum(["Software", "Design", "Marketing"]),
        headshot: image().optional()
    })
});

export const collections = {
    posts: postsCollection,
    events: eventsCollection,
    author: authorCollection
}
