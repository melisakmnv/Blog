import { Link, useNavigate } from "react-router-dom"

import { useDeletePost, useFetchPosts } from "@/hooks/usePost"

import { FaArrowUp } from "react-icons/fa";

import { Header } from "@/components/home/Header"
import { NewestPost } from "@/components/home/NewestPost"

import { Button } from "@/components/ui/button"
import { IPost } from "@/interfaces/post.interface";
import { memo, Suspense } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CoverImage } from "@/components/CoverImage";
import { Badge } from "@/components/ui/badge";
import { LikeButton } from "@/components/button/LikeButton";
import { CommentButton } from "@/components/button/CommentButton";
import { SaveButton } from "@/components/button/SaveButton";
import { OptionsMenu } from "@/components/card/BlogMenuBar";
import useUserStore from "@/store/useUserStore";
import { PostSkeletons } from "./posts/Posts";


export const Home = () => {

    // const { data: posts } = useFetchPosts()


    return (
        <main className="flex flex-col gap-6 md:gap-20">
            <Header />
            <section className="flex flex-col gap-4">
                <h2 className="font-Montserrat font-bold text-xl">Newest post</h2>
                <NewestPost />
            </section>
            <section className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <h2 className="font-Montserrat font-bold text-xl">Featured Posts</h2>
                    <Link to="/posts" className="">
                        <Button className="hidden md:block">See all posts</Button>
                        <div className="border px-3 py-2 rounded-md md:hidden">
                            <FaArrowUp className=" transform rotate-45" />
                        </div>
                    </Link>
                </div>

                <div className="bg-blue-200">
                    <Suspense fallback={<PostSkeletons />}>
                        <FeaturedPosts />
                    </Suspense>
                </div>
            </section>
        </main>
    )
}



const FeaturedPosts = () => {

    const { data: posts } = useFetchPosts()

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.length > 0 ? (
                <PostsList posts={posts} />
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

const PostsList = memo(({ posts, variant }: { posts: IPost[], variant?: string }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post) => (
                <PostCard post={post} key={post._id} />
            ))}
        </div>
    );
});


const PostCard = ({ post }: { post: IPost }) => {


    const navigate = useNavigate()
    const { user: currentUser } = useUserStore()
    const { deletePost } = useDeletePost()


    const isAuthor = currentUser?._id === post.author._id


    return (
        <Card className=" border rounded-sm flex">
            <Link to={`/posts/${post.slug}`}>
                <CardHeader className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <Avatar>
                            <AvatarImage className='object-cover' src={post.author.avatar} alt="Publisher Avatar" />
                            <AvatarFallback>Publisher Avatar</AvatarFallback>
                        </Avatar>
                        <p className="text-sm text-neutral-800 font-Poppins capitalize truncate">{post.author.firstname} {post.author.lastname}</p>
                    </div>
                    {/* <p className="text-sm text-neutral-500 font-Poppins">{formattedDate(post.createdAt)}</p> */}
                </CardHeader>
                <CardContent className="flex flex-col-reverse lg:flex-row justify-between gap-10">
                    <div className='flex-2 flex flex-col gap-4'>
                        <CardTitle className="text-lg md:text-2xl font-Montserrat font-bold leading-tight text-neutral-800">{post.title}</CardTitle>
                        <CardDescription className="line-clamp-3 text-neutral-600 text-sm md:text-md">{post.description}</CardDescription>
                    </div>
                    <div className='flex-1'>
                        <CoverImage src={post.cover} />
                    </div>
                </CardContent>
            </Link>
            <CardFooter className="flex justify-between items-center">
                <div className='flex items-center gap-2'>
                    <Badge variant="outline" className="cursor-pointer rounded-full">{post.tag}</Badge>
                    <p className='text-sm text-neutral-500 hidden md:block'> • {post.readingTime}</p>
                    <div className="flex items-center gap-6 ml-4">
                        <LikeButton onClick={() => { }} variant={"display"} initialCount={post.likes.length} />
                        <CommentButton post={post} variant={"display"} />
                    </div>
                </div>
                <div className="flex items-center gap-2 md:gap-4">
                    <SaveButton onClick={() => { }} initialSaved={true} />
                    {
                        isAuthor ? (
                            <OptionsMenu
                                actions={[
                                    { label: "Edit post", onClick: () => { navigate(`/edit-story/${post.slug}`) } },
                                    { label: "Delete post", onClick: () => { deletePost(post._id) }, danger: true }
                                ]}
                            />
                        ) : (
                            <OptionsMenu
                                actions={[
                                    { label: "Follow author", onClick: () => { } },
                                    { label: " Mute author", onClick: () => { } },
                                    { label: "Report story", onClick: () => { }, danger: true }
                                ]}
                            />
                        )
                    }

                </div>
            </CardFooter>
        </Card >

    )
}