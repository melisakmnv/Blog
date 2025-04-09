import { useState } from "react"
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"

import { IPost } from "@/interfaces/post.interface"
import { getPostDetails } from "@/api/requests/post"

import { mockComments } from "@/data/comments"

import { PostHeader } from "./components/PostHeader"
import { PostContent } from "./components/PostContent"
import { CommentBlock } from "./components/CommentBlock"
import { CommentInput } from "./components/CommentInput"
import { CommentSidebar } from "./components/CommentSidebar"

import { Button } from "@/components/ui/button"
import { Drawer, DrawerTrigger } from "@/components/ui/drawer"


export const Post = () => {

    const maxComment = 3;

    const { slug } = useParams<{ slug: string }>()

    if (!slug) {
        return <div>Error: Slug is missing.</div>;
    }

    const { data: post, isLoading } = useQuery<IPost>({
        queryFn: () => getPostDetails(slug),
        queryKey: ["posts", slug]

    })

    const [comments, setComments] = useState(mockComments);
    const [commentText, setCommentText] = useState("");


    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCommentText(event.target.value)

    }

    const handleAddComment = () => {
        if (!commentText.trim()) return;

        const newComment = {
            _id: Date.now().toString(),
            username: "current_user",
            avatar: "", // Add avatar URL if you have one
            content: commentText,
            createdAt: "Apr 8, 2025",
        };

        setComments([newComment, ...comments]);
        setCommentText("");
    };


    if (isLoading) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    if (!post) return <div>No post found.</div>;


    return (
        <main className="mt-10">
            <div className="w-[90%] md:w-[70%] mx-auto flex flex-col gap-10 md:gap-14 items-center">
                <PostHeader post={post} />

                {/* CONTENT */}
                <PostContent post={post} />

                {/* COMMENT */}
                <footer className="w-full max-w-3xl mx-auto pt-10 border-t lg:mt-14">
                    <h3 className="text-2xl font-semibold text-neutral-800 mb-6">{comments.length} Comments</h3>

                    {/* Comment Input */}
                    <CommentInput
                        value={commentText}
                        onChange={handleChange}
                        onSubmit={handleAddComment}
                    />
                    {/* COMMENTS */}
                    <div className="space-y-8">
                        {comments.slice(0, maxComment).map((comment) => (
                            <CommentBlock key={comment._id} comment={comment} />

                        ))}
                    </div>
                    <div className="hidden md:block">
                        <Drawer direction="right">
                            <DrawerTrigger asChild>
                                <div className="mt-10">
                                    <Button variant={"outline"}>Show all comments</Button>
                                </div>
                            </DrawerTrigger>
                            <CommentSidebar comments={comments} value={commentText}
                                onChange={handleChange}
                                onSubmit={handleAddComment} />
                        </Drawer>

                    </div>
                    <div className="block md:hidden">
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
                    </div>

                </footer>
            </div>
        </main>
    )
}
