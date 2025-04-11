import { signin } from "@/api/requests/auth"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import useUserStore from "@/store/useUserStore"


import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { z } from "zod"


const formSchema = z.object({
    email: z.string().email({
        message: "Please provide a correct email address",
    }),
    password: z.string().min(6, {
        message: "password must be at least 6 characters.",
    }),
})

export type SigninSchema = z.infer<typeof formSchema>


export const Login = () => {

    const navigate = useNavigate()
    const setUser = useUserStore((state) => state.setUser);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })


    const mutation = useMutation({
        mutationFn: signin,
        onSuccess: (data) => {
            setUser(data.user);
            navigate("/profile")
        },
        onError: (error: any) => {
            console.log(error.response?.data)
            alert(error.response?.data || 'Error signing in');
        },
    });


    function onSubmit(values: SigninSchema) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
        mutation.mutate(values);
    }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="johndoe@email.com" {...field} type="email" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="123456" {...field} type="password" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
