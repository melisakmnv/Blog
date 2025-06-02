import { useParams } from "react-router-dom"

import { PostHeader } from "./components/post/PostHeader"
import { PostContent } from "./components/post/PostContent"

import { Comment } from "./components/comment/Comment"
import { useGetPostBySlug } from "@/hooks/usePost"
import { PostPageSkeleton } from "@/components/skeleton/Skeletons"

export const Post = () => {


    const { slug } = useParams<{ slug: string }>();
    if (!slug) return <div>No slug provided.</div>;

    const { data: post, isLoading, isError } = useGetPostBySlug(slug);

    if (isLoading) {
        return (
            <PostPageSkeleton />
        );
    }

    if (isError) {
        return (
            <div className="text-center text-red-500">
                Something went wrong.
            </div>
        );
    }

    if (!post) return <div>No post found.</div>;

    return (
        // <Suspense>
        <main className="mt-10">
            <div className="w-[90%] md:w-[70%] mx-auto flex flex-col gap-10 md:gap-14 items-center">
                <PostHeader post={post} />
                <PostContent post={post} />
                <footer className="w-full max-w-3xl mx-auto pt-10 border-t lg:mt-14">
                    <Comment postId={post._id} />
                </footer>
            </div>
        </main>
        // </Suspense>
    )
}
