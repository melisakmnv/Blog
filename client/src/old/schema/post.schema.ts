import { z } from "zod"

export const postSchema = z.object({
    title: z.string(),
    description: z.string(),
    content: z.string(),
    tag: z.string(),
    author: z.string(),
})

export type PostFormSchema = z.infer<typeof postSchema>