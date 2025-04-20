import { Suspense } from "react"
import { useParams } from "react-router-dom"

import { PostHeader } from "./components/post/PostHeader"
import { PostContent } from "./components/post/PostContent"

import { Comment } from "./components/comment/Comment"
import { useGetPostBySlug } from "@/hooks/usePost"

export const Post = () => {

    // GET POST SLUG //
    const { slug } = useParams<{ slug: string }>()
    const { data: post, isLoading } = useGetPostBySlug(slug!);

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
                    <PostContent post={post} />
                    <footer className="w-full max-w-3xl mx-auto pt-10 border-t lg:mt-14">
                        <Comment postId={post._id} />
                    </footer>
                </div>
            </main>
        </Suspense>
    )
}
