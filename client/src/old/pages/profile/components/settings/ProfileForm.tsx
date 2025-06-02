
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"


import { updateProfileSchema, UpdateProfileSchema } from "@/old/schema/user.schema"
import { useFetchMyProfile } from "@/hooks/useMe"

import { Form } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { InputField } from "@/components/InputField"
import { useEditUser } from "@/hooks/user/useUserMutation"
import { useNavigate } from "react-router-dom"



export const ProfileForm = () => {

    const navigate = useNavigate();
    const { data: user } = useFetchMyProfile()
    const { editUser } = useEditUser()

    const form = useForm<z.infer<typeof updateProfileSchema>>({
        resolver: zodResolver(updateProfileSchema),
        defaultValues: {
            firstname: user.firstname || "",
            lastname: user.lastname || "",
            pseudonym: user.pseudonym || "",
            tagline: user.tagline || "",
            bio: user.bio || "",
        },
    })

    const onSubmit = (values: UpdateProfileSchema) => {
        editUser(values);
    }

    const handleCancel = () => {
        form.reset()
        navigate(-1)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full p-6 bg-white rounded-2xl border shadow-sm space-y-5 h-[calc(100vh-10rem)]">

                <header className="space-y-1">
                    <h2 className="text-2xl font-semibold">Edit Profile</h2>
                    <p className="text-sm text-muted-foreground">
                        Update your image and personal information.
                    </p>
                </header>

                <Separator className="bg-secondary" />

                {/* Avatar Section */}
                <div className="flex flex-col items-center gap-3">
                    <Avatar className="size-28">
                        <AvatarImage className="object-cover" src={user?.avatar} alt="Publisher Avatar" />
                        <AvatarFallback>Publisher Avatar</AvatarFallback>
                    </Avatar>

                    <div className="flex gap-3">
                        <Button type="button" variant="outline">Edit</Button>
                        <Button type="button" variant="destructive">Delete</Button>
                    </div>
                </div>

                <Separator className="bg-secondary" />

                {/* Fields */}

                <div className="space-y-6">
                    <div className="flex gap-8">
                        <div className="flex-1">
                            <InputField
                                direction="col"
                                label="Firstname"
                                name="firstname"
                                placeholder="John"
                                control={form.control}
                            />
                        </div>
                        <div className="flex-1">
                            <InputField
                                direction="col"
                                label="Lastname"
                                name="lastname"
                                placeholder="Doe"
                                control={form.control}
                            />
                        </div>
                    </div>
                    <Separator className="bg-secondary" />
                    <div className="flex gap-8">
                        <div className="flex-1">
                            <InputField
                                direction="col"
                                label="Pseudonym"
                                name="pseudonym"
                                placeholder="The Dragon Slayer III"
                                control={form.control}
                            />
                        </div>
                        <div className="flex-1">
                            <InputField
                                direction="col"
                                label="Tagline"
                                name="tagline"
                                placeholder="Cat Slave | Dragon Slayer"
                                control={form.control}
                            />
                        </div>
                    </div>

                    <Separator className="bg-secondary" />

                    <InputField
                        label="Biography"
                        name="bio"
                        placeholder="Tell us about yourself..."
                        textarea
                        control={form.control}
                    />
                </div>

                <div className="flex justify-end gap-4 pt-4">
                    <Button type="button" variant={"outline"} onClick={handleCancel}>Cancel</Button>
                    <Button type="submit">Save Changes</Button>
                </div>
            </form>
        </Form>
    )
}

