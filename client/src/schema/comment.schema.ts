import { z } from "zod"

export const commentSchema = z.object({
    content: z.string()
})

export type CommentFormSchema = z.infer<typeof commentSchema>