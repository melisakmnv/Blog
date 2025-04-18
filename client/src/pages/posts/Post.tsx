import { Suspense } from "react"
import { useParams } from "react-router-dom"
import { useSuspenseQuery } from "@tanstack/react-query"

import { IPost } from "@/interfaces/post.interface"
import { getPostDetails } from "@/api/requests/post"

import { PostHeader } from "./components/PostHeader"
import { PostContent } from "./components/PostContent"
import { CommentBlock } from "./components/CommentBlock"

import { CommentSidebar } from "./components/CommentSidebar"

import { Button } from "@/components/ui/button"
import { Drawer, DrawerTrigger } from "@/components/ui/drawer"
import { IComment } from "@/interfaces/comment.interface"
import { getComments } from "@/api/requests/comment"
import { z } from "zod"


const formSchema = z.object({
    content: z.string()
})

export type CreateCommentSchema = z.infer<typeof formSchema>


export const Post = () => {

    const maxComment = 3;
    // GET POST SLUG //
    const { slug } = useParams<{ slug: string }>()


    // if (!slug) {
    //     return <div>Error: Slug is missing.</div>;
    // }

    const { data: post, isLoading } = useSuspenseQuery<IPost>({
        queryFn: () => getPostDetails(slug!),
        queryKey: ["posts", slug]
    })

    const { data: comments } = useSuspenseQuery<IComment[]>({
        queryFn: () => getComments(post._id),
        queryKey: ["comments", post._id]
    })


    // const form = useForm<CreateCommentSchema>({
    //     resolver: zodResolver(formSchema),
    //     defaultValues: {
    //         content: ""
    //     }
    // })

    // const createCommentMutation = useMutation({

    //     mutationFn: ({ postId, content }: { postId: string; content: CreateCommentSchema }) => createComment(postId, content),
    //     onSuccess: () => {
    //         toast.success("You just added a comment")
    //         queryClient.invalidateQueries({ queryKey: ["comments"] })
    //     },
    //     onError: (error: any) => {
    //         console.log(error.response?.data);
    //         toast.error(error?.response?.data?.message || "Something went wrong");
    //     },
    // })

    // const onSubmit = (values: CreateCommentSchema) => {
    //     createCommentMutation.mutate({ postId: post._id, content: values });
    //     form.reset()
    // };

    // HANDLE POST LOADING //
    if (isLoading) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    if (!post) return <div>No post found.</div>;


    return (
        <Suspense>

            <main className="mt-10">
                <div className="w-[90%] md:w-[70%] mx-auto flex flex-col gap-10 md:gap-14 items-center">
                    <PostHeader post={post} />

                    {/* CONTENT */}
                    <PostContent post={post} />

                    {/* COMMENT */}
                    <footer className="w-full max-w-3xl mx-auto pt-10 border-t lg:mt-14">
                        <h3 className="text-2xl font-semibold text-neutral-800 mb-6">{comments.length} Comments</h3>

                        {/* Comment Input */}

                        {/* <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)}>
                                <FormField
                                    control={form.control}
                                    name="content"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Your comment :</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="What do you think about the blog?" {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit">Respond</Button>
                            </form>
                        </Form> */}


                        {/* COMMENTS */}
                        <div className="space-y-8">
                            {comments.slice(0, maxComment).map((comment) => (
                                <CommentBlock key={comment._id} comment={comment} />

                            ))}
                        </div>

                        {
                            comments.length > maxComment && (<div className="hidden md:block">
                                <Drawer direction="right">
                                    <DrawerTrigger asChild>
                                        <div className="mt-10">
                                            <Button variant={"outline"}>Show all comments</Button>
                                        </div>
                                    </DrawerTrigger>
                                    <CommentSidebar comments={comments} />
                                </Drawer>
                            </div>)
                        }


                        {/* <div className="block md:hidden">
                            <Drawer direction="bottom">
                                <DrawerTrigger asChild>
                                    <div className="mt-10">
                                        <Button variant={"outline"}>Show all comments</Button>
                                    </div>
                                </DrawerTrigger>
                                <CommentSidebar comments={comments} value={commentText}
                                    onChange={handleChange}
                                    onSubmit={handleAddComment} />
                            </Drawer>
                        </div> */}

                    </footer>
                </div>
            </main>
        </Suspense>
    )
}
