import { z } from "zod"

export const updateProfileSchema = z.object({
    firstname: z.string().min(1, "Firstname is required").trim(),
    lastname: z.string().min(1, "Lastname is required").trim(),
    bio: z.string().max(300, "Bio must be under 300 characters").trim(),
})

export type UpdateProfileSchema = z.infer<typeof updateProfileSchema>