import { IPost } from "@/interfaces/post.interface";
import { formattedDate } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface PostHeaderProps {
    post: IPost;
}

export const PostHeader = ({ post }: PostHeaderProps) => {
    return (
        <header className="flex flex-col gap-4 md:gap-6">
            <h1 className="text-2xl md:text-4xl text-neutral-800 lg:text-center font-Montserrat font-bold">{post.title}</h1>
            <h2 className="text-neutral-500 text-base md:text-xl font-Karla font-light">{post.description}</h2>
            
            <div className="flex items-center gap-4">
                <Avatar className="size-14">
                    <AvatarImage src={post.author.avatar} alt="Publisher Avatar" />
                    <AvatarFallback>Publisher Avatar</AvatarFallback>
                </Avatar>
                <div>
                    <div className="flex items-center gap-2 text-sm text-neutral-500 font-Poppins">
                        <p className="">{post.author.firstname} {post.author.lastname}</p>
                        <p>•</p>
                        <p className="underline text-neutral-800" >Follow+</p>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-500 text-sm  font-Poppins">
                        <p className="">{formattedDate(post.createdAt)}</p>
                        <p>•</p>
                        <p className="">{post.readingTime}</p>
                    </div>
                </div>
            </div>
        </header>
    )
}
