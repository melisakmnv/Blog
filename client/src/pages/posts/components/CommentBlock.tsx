import { LikeButton } from "@/components/button/LikeButton";
import { Button } from "@/components/ui/button";
import { IComment } from "@/interfaces/comment.interface"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { FaRegComment } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
import { formattedDate } from "@/lib/utils";


interface CommentBlockProps {
    comment: IComment;
}

export const CommentBlock = ({ comment }: CommentBlockProps) => {

    console.log(comment)
    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-between">
                <div className="flex items-start gap-4">
                    <Avatar className="size-14">
                        <AvatarImage className="object-cover" src={comment.author.avatar} alt={`${comment.author.firstname} ${comment.author.lastname} 's avatar`} />
                        <AvatarFallback>{comment.author.firstname.toUpperCase()}</AvatarFallback>
                    </Avatar>

                    <div >
                        <div className=" flex flex-col items-center gap-1">
                            <p className="text-md text-[#bba07f] font-medium capitalize cursor-pointer">{comment.author.firstname} {comment.author.lastname}</p>
                            <p className="font-light text-neutral-600 text-xs">{formattedDate(comment.createdAt)}</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <LikeButton variant="button" />
                    <Button variant={"ghost"} className="text-neutral-500 font-light">
                        <FaRegComment />
                    </Button>
                </div>
            </div>
            <div className="flex">
                <div className="w-[80px]"></div>
                <p className="text-neutral-800 font-Karla font-light">{comment.content}</p>
            </div>
            <Separator className="border-dotted border-t-2 border-neutral-300" />
        </div>
    )
}
