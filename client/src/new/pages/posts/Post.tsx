import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { Link, useParams } from "react-router-dom"

import { CoverImage } from "@/components/CoverImage";
import { Badge } from "@/components/ui/badge";


import { getPostBySlug } from "@/new/api/request/post";
import { checkISFollowing, IPost } from "@/new/api/request/user";

import useUserStore from "@/old/store/useUserStore";
import { Comment } from "@/old/pages/posts/components/comment/Comment";

import cover from "../../../assets/cover.jpg"

import { FollowButton } from "@/components/btn/FollowButton";
import { LikeButton } from "@/components/btn/LikeButton";
import { CommentButton } from "@/components/btn/CommentButton";
import { MoreButton } from "@/components/btn/MoreButton";
import { UserAvatar } from "@/components/btn/UserAvatar";

import { PostActionBar } from "./components/PostActionBar";

const Post = () => {

    const { slug } = useParams<{ slug: string }>();
    if (!slug) return <div>No slug provided.</div>;


    const { data: post, isLoading: postLoading } = useQuery({
        queryKey: ["post"],
        queryFn: () => getPostBySlug(slug)
    })


    if (postLoading) return (
        <p>Loading..</p>
    )

    return (
        <main className="mt-10">
            <div className="w-[90%] md:w-[70%] mx-auto flex flex-col gap-10 md:gap-14 items-center">
                <PostHeader post={post!} />
                <PostContent post={post!} />
                <footer className="w-full max-w-3xl mx-auto pt-10 border-t lg:mt-14">
                    <Comment postId={post?._id!} />
                </footer>
            </div>
        </main>
    )
}

export default Post


interface PostProps {
    post: IPost;
}
const PostHeader = ({ post }: PostProps) => {

    const { user: currentUser } = useUserStore();

    const isAuthor = useMemo(() => currentUser?._id === post.author._id, [currentUser?._id, post.author._id])

    const {
        data,
        isLoading,
    } = useQuery({
        queryKey: ["isFollowing", currentUser?._id, post.author._id],
        queryFn: () => checkISFollowing(post.author._id),
        enabled: !!currentUser?._id && !!post.author._id,
    });

    if (isLoading) return (
        <p>Checking..</p>
    )
    const isFollowing = currentUser?._id ? data?.isFollowing ?? false : false;

    // Rework on current User actions 

    return (

        <>
            <header className="relative w-full bg-[#FFF7EF] rounded-3xl overflow-hidden shadow-lg p-5 md:p-8">
                <div className="absolute top-2 left-3 text-yellow-400 text-lg select-none pointer-events-none">˗ˏˋ ★ ˎˊ˗</div>
                <div className="relative z-10 space-y-1.5">
                    <h1 className="text-3xl md:text-4xl text-center font-DancingScript font-black text-[#FF8170] leading-snug tracking-tight">
                        {post.title}
                    </h1>
                    <h2 className="text-base md:text-lg font-Karla text-[#A0675C] italic max-w-3xl mx-auto">
                        {post.description}
                    </h2>
                </div>
                <div className="mt-10 flex justify-between items-center">
                    <div className="relative z-10 flex items-center gap-5 flex-wrap">
                        <UserAvatar user={post.author} publishedDate={post.createdAt} readingTime={post.readingTime} nameTag />
                    </div>
                    <div className="flex gap-4">
                        {currentUser
                            ? (
                                isAuthor
                                    ? <PostActionBar />
                                    : <FollowButton initialFollow={isFollowing} />
                            ) : (
                                <Link className="text-sm font-semibold text-[#FF8170] border-b" to={"/login"}>Login to Pawllowww 🐾❤️</Link>
                            )
                        }
                    </div>
                </div>
            </header>
        </>
    )

}


const PostContent = ({ post }: PostProps) => {

    return (
        <>
            <div className="relative flex flex-row-reverse gap-4 w-full">
                <aside className="hidden lg:flex flex-col gap-3 sticky top-1/3 h-fit z-10 mb-2">
                    <LikeButton />
                    <CommentButton />
                    <MoreButton />
                </aside>
                <section className="w-full px-6 md:px-10 py-10 rounded-3xl bg-[#FFF7EF] shadow-lg">
                    <article className="flex flex-col justify-center gap-8 md:gap-12 text-sm md:text-base lg:text-lg text-[#8c7661] font-Karla font-light italic leading-relaxed animate-fade-in">
                        <div className="overflow-hidden shadow-md border-6 border-[#A0BF87] max-w-full aspect-video">
                            <CoverImage
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                src={cover}
                            />
                        </div>

                        <div
                            className="prose max-w-none prose-p:text-[#8c7661] prose-headings:text-[#FF8170] prose-a:text-[#A0BF87] prose-a:underline prose-img:rounded-3xl"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </article>
                    <div className="flex mt-12">
                        <Badge
                            className="cursor-pointer px-3 rounded-full text-[#A0BF87] border border-[#A0BF87] hover:bg-[#A0BF87] hover:text-white transition duration-300"
                            variant="outline"
                        >
                            #{post.tag}
                        </Badge>
                    </div>
                </section>
            </div>
        </>
    )
}
