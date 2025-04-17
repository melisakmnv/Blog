import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';

import useUserStore from '@/store/useUserStore';
import { useCreatePost } from '@/hooks/useCreatePost';

import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
    title: z.string(),
    description: z.string(),
    content: z.string(),
    tag: z.string(),
    author: z.string(),
})

export type CreatePostSchema = z.infer<typeof formSchema>

export const Write = () => {

    const { user } = useUserStore();
    const userId = user?._id;

    const { createPost, isLoading } = useCreatePost();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
            content: "",
            tag: "",
            author: userId,
        },
    })

    const onSubmit = (values: CreatePostSchema) => {
        createPost(values)
    };

    return (
        <div className="max-w-3xl mx-auto py-10 px-4 space-y-8">
            <h1 className="text-3xl font-bold text-center">Create Your Story</h1>

            <Form {...form}>
                <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                    {/* Title */}

                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your blog title..." {...field} type="text" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Description */}
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Short Description</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Brief summary of your blog post..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Category / Tags */}
                    <FormField
                        control={form.control}
                        name="tag"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Category</FormLabel>
                                <FormControl>
                                    {/* <Textarea placeholder="Brief summary of your blog post..." {...field} /> */}
                                    <Select {...field} onValueChange={field.onChange} defaultValue={field.value}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Choose a category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Categories</SelectLabel>
                                                <SelectItem value="tech">Tech</SelectItem>
                                                <SelectItem value="travel">Travel</SelectItem>
                                                <SelectItem value="lifestyle">Lifestyle</SelectItem>
                                                <SelectItem value="health">Health</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="content"
                        render={({ field }) => (
                            <FormItem className='h-[500px]'>
                                <FormLabel>Category</FormLabel>
                                <FormControl>
                                    <ReactQuill
                                        {...field}
                                        theme="snow"
                                        value={field.value}
                                        onChange={field.onChange}
                                        style={{ height: '450px' }}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex justify-end gap-4 pt-4">
                        <Button variant="outline">Save as Draft</Button>
                        <Button disabled={isLoading} type="submit">Publish</Button>
                    </div>
                </form>
            </Form >
        </div>
    );
}