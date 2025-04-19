import useUserStore from "@/store/useUserStore"

import { useForm } from "react-hook-form"
import { useParams } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"

import { useCreatePost, useEditPost, useGetPostBySlug } from "@/hooks/usePost"
import { PostFormSchema, postSchema } from "@/schema/post.schema"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FormControl, FormField, FormItem, FormLabel, FormMessage, Form } from "@/components/ui/form"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

export const PostCreateForm = () => {

    const { user } = useUserStore();
    const userId = user?._id;


    const { createPost, isLoading: createLoading } = useCreatePost();

    const form = useForm<PostFormSchema>({
        resolver: zodResolver(postSchema),
        defaultValues: {
            title: "",
            description: "",
            content: "",
            tag: "",
            author: userId,
        },
    })

    const onSubmit = (values: PostFormSchema) => {
        createPost(values)
    };


    return (
        <>
            <Form {...form}>
                <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
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
                    <FormField
                        control={form.control}
                        name="tag"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Category</FormLabel>
                                <FormControl>
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
                        <Button disabled={createLoading} type="submit">Publish</Button>
                    </div>
                </form>
            </Form >
        </>
    )
}


export const PostEditForm = () => {

    const { slug } = useParams()
    const { data: post } = useGetPostBySlug(slug!);
    const { editPost, isLoading: editLoading } = useEditPost();

    const form = useForm<PostFormSchema>({
        resolver: zodResolver(postSchema),
        values: {
            title: post.title || "",
            description: post.description || "",
            content: post.content || "",
            tag: post.tag || "",
            author: post.author._id,
        },
    })

    const onSubmit = (values: PostFormSchema) => {
        editPost({postId : post._id, values})
    };

    return (
        <>
            <Form {...form}>
                <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
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
                    <FormField
                        control={form.control}
                        name="tag"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Category</FormLabel>
                                <FormControl>
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
                        <Button variant="outline">Cancel</Button>
                        <Button disabled={editLoading} type="submit">Submit</Button>
                    </div>
                </form>
            </Form>
        </>
    )
}