import { IPost } from "@/new/api/request/user";
import { CoverImage } from "@/components/CoverImage";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { formattedDate } from "@/old/lib/utils";
import { Badge } from "@/components/ui/badge";
import { LikeButton } from "@/components/button/LikeButton";
import { CommentButton } from "@/components/button/CommentButton";
import { SaveButton } from "@/components/button/SaveButton";
import useUserStore from "@/old/store/useUserStore";
import { useMemo } from "react";
import { OptionsMenu } from "@/components/card/BlogMenuBar";
import { Link, useNavigate } from "react-router-dom";



interface PostsTabProps {
    posts: IPost[]
}
export const PostsTab = ({ posts }: PostsTabProps) => {


    if (!posts.length) return (
        <p>This user hasn't written anything yet</p>
    )

    return (
        <div className="space-y-8">
            {posts.map((post) => (
                <PostItem post={post} key={post._id} />
            ))}
        </div>
    )
}


interface PostItem {
    post: IPost;
}
const PostItem = ({ post }: PostItem) => {

    const navigate = useNavigate()

    const { user: currentUser } = useUserStore()


    const isAuthor = useMemo(() => currentUser?._id === post.author._id, [currentUser?._id, post.author._id])
    const isSaved = useMemo(() => post.savedBy.includes(currentUser?._id!), [currentUser?._id])

    return (
        <Card className=" border rounded-sm flex">
            <Link to={`/posts/${post.slug}`}>
                <CardHeader className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <Avatar className="size-10">
                            <AvatarImage className='object-cover' src={post.author.avatar} alt="Publisher Avatar" />
                            <AvatarFallback>Publisher Avatar</AvatarFallback>
                        </Avatar>
                        <p className="text-sm text-neutral-800 font-Poppins capitalize truncate">{post.author.firstname} {post.author.lastname}</p>
                    </div>
                    <p className="text-sm text-neutral-500 font-Poppins">{formattedDate(post.createdAt)}</p>
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
                    <SaveButton onClick={() => { }} initialSaved={isSaved} />
                    {
                        isAuthor ? (
                            <OptionsMenu
                                actions={[
                                    { label: "Edit post", onClick: () => { navigate(`/edit-story/${post.slug}`) } },
                                    { label: "Delete post", onClick: () => { }, danger: true }
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
        </Card>
    )
}