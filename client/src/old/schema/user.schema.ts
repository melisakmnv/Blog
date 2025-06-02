import { z } from "zod"

export const updateProfileSchema = z.object({
    firstname: z.string().min(1, "Firstname is required").trim(),
    lastname: z.string().min(1, "Lastname is required").trim(),
    tagline: z.string(),
    pseudonym: z.string(),
    bio: z.string().max(3000, "Bio must be under 3000 characters").trim(),
})

export type UpdateProfileSchema = z.infer<typeof updateProfileSchema>