import { memo } from "react";
import { IPost } from "@/old/interfaces/post.interface";

import { PostItemCard } from "../card/PostItemCard";

export const PostsList = memo(({ posts }: { posts: IPost[] }) => {
    return (
        <div className="space-y-8">
            {posts.map((post) => (
                <PostItemCard post={post} key={post._id} />
            ))}
        </div>
    );
});