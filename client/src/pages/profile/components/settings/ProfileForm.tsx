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

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Separator } from "@/components/ui/separator"


const formSchema = z.object({
    email: z.string().email({
        message: "Please provide a correct email address",
    }),
    currentPassword: z.string(),
    newPassword: z.string().min(6, {
        message: "password must be at least 6 characters.",
    }),
})


export const ProfileForm = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            currentPassword: "",
            newPassword: ""
        },
    })
    return (
        <Form {...form}>
            <form className="w-full p-6 bg-white rounded-2xl border shadow-sm space-y-7 h-[calc(100vh-10rem)]">

                <header className="space-y-1">
                    <h2 className="text-2xl font-semibold">Edit Profile</h2>
                    <p className="text-sm text-muted-foreground">
                        Update your image and personal information.
                    </p>
                </header>

                <Separator className="bg-accent" />

                <div className="flex flex-col items-center gap-2">
                    <Avatar className="size-30">
                        <AvatarImage
                            src="https://i.pravatar.cc/150?img=5"
                            alt="User avatar"
                            className="object-cover"
                        />
                        <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <div className="flex items-center gap-4">
                        <Button variant={"outline"}>
                            Edit
                        </Button>
                        <Button variant={"destructive"}>
                            Delete
                        </Button>
                    </div>

                </div>
                <Separator className="bg-accent" />

                {/* Section: Name Fields */}
                <div>
                    <FormField
                        name="firstname"
                        render={({ field }) => (
                            <FormItem>
                                <div className="flex items-center gap-8">
                                    <div className="w-[200px]">
                                        <FormLabel>FirstName</FormLabel>
                                    </div>
                                    <FormControl>
                                        <Input placeholder="John" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </div>
                            </FormItem>
                        )}
                    />
                </div>

                <Separator className="bg-accent" />
                <div>
                    <FormField
                        name="lastname"
                        render={({ field }) => (
                            <FormItem>
                                <div className="flex items-center gap-8">
                                    <div className="w-[200px]">
                                        <FormLabel>Last Name</FormLabel>
                                    </div>
                                    <FormControl>
                                        <Input placeholder="Doe" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </div>
                            </FormItem>
                        )}
                    />
                </div>

                <Separator className="bg-accent" />
                <div>
                    <FormField
                        name="bio"
                        render={({ field }) => (
                            <FormItem>
                                <div className="flex items-center gap-8">
                                    <div className="w-[200px]">
                                        <FormLabel>Biography</FormLabel>
                                    </div>
                                    <FormControl>
                                        <Textarea placeholder="Tell us about yourself..." rows={4} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </div>
                            </FormItem>
                        )}
                    />
                </div>

                <div className="flex justify-end">
                    <Button type="submit">Save Changes</Button>
                </div>
            </form>
        </Form>
    )
}
