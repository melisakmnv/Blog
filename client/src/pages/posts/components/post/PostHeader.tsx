import { IPost } from "@/interfaces/post.interface";
import { formattedDate } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useUserStore from "@/store/useUserStore";

import { Separator } from "@/components/ui/separator";
import { PostActionBar, UserPostActionBar } from "./PostActionBar";
import { useFetchComment } from "@/hooks/useComment";

interface PostHeaderProps {
    post: IPost;
}

export const PostHeader = ({ post }: PostHeaderProps) => {

    const { user: currentUser } = useUserStore()
    const { data: comments } = useFetchComment(post._id)
    const isAuthor = currentUser?._id === post.author._id


    return (
        <header className="flex flex-col gap-4 md:gap-6 w-full">
            <h1 className="text-2xl md:text-4xl text-neutral-800 lg:text-center font-Montserrat font-bold">{post.title}</h1>
            <h2 className="text-neutral-500 text-base md:text-xl font-Karla font-light">{post.description}</h2>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Avatar className="size-14">
                        <AvatarImage className="object-cover" src={post.author.avatar} alt="Publisher Avatar" />
                        <AvatarFallback className="text-center">{post.author.firstname} {post.author.lastname}</AvatarFallback>
                    </Avatar>
                    <div>
                        <div className="flex items-center gap-2">
                            <p className="capitalize text-lg text-neutral-600 font-Poppins font-semibold">{post.author.firstname} {post.author.lastname}</p>
                            {!isAuthor && (
                                <>
                                    <p>•</p>
                                    <p className="underline text-neutral-800 font-light">Follow+</p>
                                </>
                            )}
                        </div>
                        <div className="flex items-center gap-2 text-neutral-500 text-sm font-Poppins font-light">
                            <p className="">{formattedDate(post.createdAt)}</p>
                            <p>•</p>
                            <p className="">{post.readingTime}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Separator className="bg-secondary" />
                {
                    isAuthor ? (
                        <UserPostActionBar post={post} comments={comments} />
                    ) : (
                        <PostActionBar post={post} comments={comments} />
                    )
                }

                <Separator className="bg-secondary" />
            </div>
        </header>
    )
}
