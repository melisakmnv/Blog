
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { useEditUser } from "@/hooks/useUser"
import { updateProfileSchema, UpdateProfileSchema } from "@/schema/user.schema"
import useUserStore from "@/store/useUserStore"

import {Form} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { InputField } from "@/components/InputField"


export const ProfileForm = () => {

    const { user } = useUserStore();
    const { editUser } = useEditUser()

    const form = useForm<z.infer<typeof updateProfileSchema>>({
        resolver: zodResolver(updateProfileSchema),
        defaultValues: {
            firstname: user?.firstname || "",
            lastname: user?.lastname || "",
            bio: user?.bio || "",
        },
    })

    const onSubmit = (values: UpdateProfileSchema) => {
        editUser(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full p-6 bg-white rounded-2xl border shadow-sm space-y-8 h-[calc(100vh-10rem)]">

                <header className="space-y-1">
                    <h2 className="text-2xl font-semibold">Edit Profile</h2>
                    <p className="text-sm text-muted-foreground">
                        Update your image and personal information.
                    </p>
                </header>

                <Separator className="bg-accent" />

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

                <Separator className="bg-accent" />

                {/* Fields */}

                <div className="space-y-6">
                    <InputField
                        label="Firstname"
                        name="firstname"
                        placeholder="John"
                        control={form.control}
                    />
                    <Separator className="bg-accent" />
                    <InputField
                        label="Lastname"
                        name="lastname"
                        placeholder="Doe"
                        control={form.control}
                    />
                    <Separator className="bg-accent" />
                    <InputField
                        label="Biography"
                        name="bio"
                        placeholder="Tell us about yourself..."
                        textarea
                        control={form.control}
                    />
                </div>

                <div className="flex justify-end pt-4">
                    <Button type="submit">Save Changes</Button>
                </div>
            </form>
        </Form>
    )
}

