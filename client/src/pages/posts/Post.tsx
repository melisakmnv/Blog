import { useState } from "react"

import { posts } from "@/data/posts"
import { IPost } from "@/interfaces/post.interface"

import { PostHeader } from "./components/PostHeader"
import { PostContent } from "./components/PostContent"
import { mockComments } from "@/data/comments"
import { CommentBlock } from "./components/CommentBlock"
import { CommentInput } from "./components/CommentInput"
import { Button } from "@/components/ui/button"
import { Drawer, DrawerTrigger } from "@/components/ui/drawer"
import { CommentSidebar } from "./components/CommentSidebar"
import { UserAvatar } from "@/components/UserAvatar"

export const Post = () => {

    const maxComment = 3;

    // const user = true;
    const [post] = useState<IPost>(posts[0])
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

    return (
        <main className="mt-10">
            <div className="w-[70%] mx-auto flex flex-col gap-14 justify-center items-center">
                <PostHeader post={post} />

                {/* CONTENT */}
                <PostContent post={post} />

                {/* COMMENT */}
                <footer className="w-full max-w-3xl mx-auto pt-10 border-t mt-14">
                    <h3 className="text-2xl font-semibold text-neutral-800 mb-4">{comments.length} Comments</h3>

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

                </footer>
            </div>
        </main>
    )
}
