import { useFetchPosts } from "@/hooks/usePost"
import { IPost } from "@/interfaces/post.interface";
import { memo } from "react";
import { FeaturedPostCard } from "./FeaturedPostCard";

export const FeaturedPosts = () => {

    const { data: posts } = useFetchPosts()

    return (
        <div className=" w-full">
            {posts.length > 0 ? (
                <PostsList posts={posts} variant="feature" />
            ) : (
                <div className="font-Karla font-extralight text-lg leading-[40px] border-dashed border p-10 flex items-center justify-center">

                    <p>
                        There is not posts
                    </p>
                </div>
            )}
        </div>
    )
}



interface PostsListProps {
    posts: IPost[];
    variant?: "feature" | "default";
}
const PostsList = memo(({ posts, variant }: PostsListProps) => {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {
                variant === "feature" ? (
                    posts.map((post) => (
                        <FeaturedPostCard post={post} key={post._id} />
                    ))
                ) : (
                    posts.map((post) => (
                        // <PostCard post={post} key={post._id} />
                        <div key={post._id}>{post.title}</div> // Example placeholder
                    ))
                )
            }
        </div>
    );
});


