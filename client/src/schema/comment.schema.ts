import { z } from "zod"

export const commentSchema = z.object({
    content: z.string()
})

export type CreateCommentSchema = z.infer<typeof commentSchema>