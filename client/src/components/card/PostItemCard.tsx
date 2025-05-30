import { IPost } from "@/interfaces/post.interface"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { CoverImage } from "../CoverImage";
import { Badge } from "../ui/badge";
import { LikeButton } from "../button/LikeButton";
import { CommentButton } from "../button/CommentButton";
import { SaveButton } from "../button/SaveButton";
import { OptionsMenu } from "./BlogMenuBar";
import { formattedDate } from "@/lib/utils";
import useUserStore from "@/store/useUserStore";
import { useDeletePost, useSavePost } from "@/hooks/usePost";

interface PostItemCardProps {
    post: IPost;
}


export const PostItemCard = ({ post }: PostItemCardProps) => {
    const navigate = useNavigate()

    const { user } = useUserStore()
    const { savePost } = useSavePost()
    const { deletePost } = useDeletePost()

    const hasSavedByUser = post.savedBy.includes(user?._id!)
    const isAuthor = user?._id === post.author._id

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
                    <SaveButton onClick={() => savePost(post._id)} initialSaved={hasSavedByUser} />
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
