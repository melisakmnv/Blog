
// import { z } from "zod"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"

// import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import { Separator } from "@/components/ui/separator"



// const formSchema = z.object({
//     email: z.string().email({
//         message: "Please provide a correct email address",
//     }),
//     currentPassword: z.string(),
//     newPassword: z.string().min(6, {
//         message: "password must be at least 6 characters.",
//     }),
// })

// export const AccountForm = () => {

//     const form = useForm<z.infer<typeof formSchema>>({
//         resolver: zodResolver(formSchema),
//         defaultValues: {
//             email: "",
//             currentPassword: "",
//             newPassword: ""
//         },
//     })


//     return (
//         <Form {...form}>
//             <form className="space-y-10 max-w-xl w-full p-6 bg-white rounded-2xl shadow-sm border">
//                 {/* Email Section */}
//                 <section className="space-y-4">
//                     <div>
//                         <h2 className="text-xl font-semibold">Edit account</h2>
//                         <p className="text-sm text-muted-foreground">
//                             Change your email address associated with your account.
//                         </p>
//                     </div>

//                     <FormField
//                         control={form.control}
//                         name="email"
//                         render={({ field }) => (
//                             <FormItem>
//                                 <FormLabel>New Email</FormLabel>
//                                 <FormControl>
//                                     <Input
//                                         placeholder="johndoe@email.com"
//                                         type="email"
//                                         {...field}
//                                     />
//                                 </FormControl>
//                                 <FormMessage />
//                             </FormItem>
//                         )}
//                     />
//                     <Button type="submit" className="w-fit">
//                         Update Email
//                     </Button>
//                 </section>

//                 <Separator className="bg-muted" />

//                 {/* Password Section */}
//                 <section className="space-y-4">
//                     <div>
//                         <h2 className="text-xl font-semibold">Update Password</h2>
//                         <p className="text-sm text-muted-foreground">
//                             Enter your current password and a new one to update it.
//                         </p>
//                     </div>

//                     <FormField
//                         control={form.control}
//                         name="currentPassword"
//                         render={({ field }) => (
//                             <FormItem>
//                                 <FormLabel>Current Password</FormLabel>
//                                 <FormControl>
//                                     <Input type="password" placeholder="••••••••" {...field} />
//                                 </FormControl>
//                                 <FormMessage />
//                             </FormItem>
//                         )}
//                     />

//                     <FormField
//                         control={form.control}
//                         name="newPassword"
//                         render={({ field }) => (
//                             <FormItem>
//                                 <FormLabel>New Password</FormLabel>
//                                 <FormControl>
//                                     <Input type="password" placeholder="••••••••" {...field} />
//                                 </FormControl>
//                                 <FormMessage />
//                             </FormItem>
//                         )}
//                     />
//                     <Button type="submit" className="w-fit">
//                         Update Password
//                     </Button>
//                 </section>

//                 <Separator className="bg-muted" />

//                 {/* Delete Account */}
//                 <section className="space-y-4">
//                     <div>
//                         <h2 className="text-xl font-semibold text-red-600">Danger Zone</h2>
//                         <p className="text-sm text-muted-foreground">
//                             Deleting your account is permanent and cannot be undone.
//                         </p>
//                     </div>
//                     <Button variant="destructive" type="button">
//                         Delete Account
//                     </Button>
//                 </section>
//             </form>
//         </Form>
//     );

// }



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
import { Separator } from "@/components/ui/separator"

const formSchema = z.object({
    email: z.string().email({ message: "Please provide a correct email address" }),
    currentPassword: z.string(),
    newPassword: z.string().min(6, { message: "Password must be at least 6 characters." }),
})

export const AccountForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            currentPassword: "",
            newPassword: "",
        },
    })

    return (
        <Form {...form}>
            <form className="w-full p-6 bg-white rounded-2xl border shadow-sm space-y-7 h-[calc(100vh-10rem)]">

                <header className="space-y-1">
                    <h2 className="text-2xl font-semibold">Edit Account</h2>
                    <p className="text-sm text-muted-foreground">
                        Update your image and personal information.
                    </p>
                </header>
                <Separator className="bg-accent" />
                <div>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <div className="flex items-center gap-8">
                                    <div className="w-[200px]">
                                        <FormLabel>Email</FormLabel>
                                    </div>
                                    <FormControl>
                                        <Input placeholder="you@example.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="flex justify-end">
                    <Button type="submit">Update Email</Button>
                </div>


                <Separator className="bg-accent" />

                <div>
                    <FormField
                        control={form.control}
                        name="currentPassword"
                        render={({ field }) => (
                            <FormItem>
                                <div className="flex items-center gap-8">
                                    <div className="w-[200px]">
                                        <FormLabel>Current Password</FormLabel>
                                    </div>
                                    <FormControl>
                                        <Input type="password" placeholder="••••••••" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div>
                    <FormField
                        control={form.control}
                        name="newPassword"
                        render={({ field }) => (
                            <FormItem>
                                <div className="flex items-center gap-8">
                                    <div className="w-[200px]">
                                        <FormLabel>New Password</FormLabel>
                                    </div>
                                    <FormControl>
                                        <Input type="password" placeholder="••••••••" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="flex justify-end">
                    <Button type="submit">Update Password</Button>
                </div>
                <Separator className="bg-accent" />

                {/* Section: Delete Account */}
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-red-600">Danger Zone</h2>
                    <p className="text-sm text-muted-foreground">
                        Deleting your account is permanent and cannot be undone.
                    </p>
                    <div className="flex justify-end">
                        <Button variant="destructive" type="button">
                            Delete Account
                        </Button>
                    </div>
                </div>
            </form>
        </Form>
    )
}
