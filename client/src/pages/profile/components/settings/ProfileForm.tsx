
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { useEditUser } from "@/hooks/useUser"
import { updateProfileSchema, UpdateProfileSchema } from "@/schema/user.schema"
import useUserStore from "@/store/useUserStore"


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

    console.log(user)

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
                        <AvatarImage src="https://i.pravatar.cc/150?img=5" alt="User avatar" />
                        <AvatarFallback>U</AvatarFallback>
                    </Avatar>

                    <div className="flex gap-3">
                        <Button type="button" variant="outline">Edit</Button>
                        <Button type="button" variant="destructive">Delete</Button>
                    </div>
                </div>

                <Separator className="bg-accent" />

                {/* Fields */}

                <div className="space-y-6">
                    <ProfileField
                        label="Firstname"
                        name="firstname"
                        placeholder="John"
                        control={form.control}
                    />
                    <Separator className="bg-accent" />
                    <ProfileField
                        label="Lastname"
                        name="lastname"
                        placeholder="Doe"
                        control={form.control}
                    />
                    <Separator className="bg-accent" />
                    <ProfileField
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



interface FieldProps {
    label: string
    name: "firstname" | "lastname" | "bio";
    placeholder: string
    textarea?: boolean
    control: any
}

const ProfileField = ({ label, name, placeholder, textarea = false, control }: FieldProps) => (
    <FormField
        name={name}
        control={control}
        render={({ field }) => (
            <FormItem>
                <div className="flex items-start gap-6">
                    <div className="w-40 pt-2">
                        <FormLabel>{label}</FormLabel>
                    </div>
                    <div className="flex-1 space-y-1">
                        <FormControl>
                            {textarea ? (
                                <Textarea rows={4} placeholder={placeholder} {...field} />
                            ) : (
                                <Input placeholder={placeholder} {...field} />
                            )}
                        </FormControl>
                        <FormMessage />
                    </div>
                </div>
            </FormItem>
        )}
    />
)
