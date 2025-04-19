import useUserStore from "@/store/useUserStore";

import { IComment } from "@/interfaces/comment.interface"
import { formattedDate } from "@/lib/utils";

import { FaRegComment } from "react-icons/fa";

import { LikeButton } from "@/components/button/LikeButton";
import { OptionsMenu } from "@/components/card/BlogMenuBar";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useDeleteComment, useLikeComment } from "@/hooks/useComment";
import { useState } from "react";
import { CommentEditForm } from "./CommentForm";


interface CommentPreviewProps {
    comment: IComment;
}

export const CommentPreview = ({ comment }: CommentPreviewProps) => {

    const { user } = useUserStore()
    const { deleteComment } = useDeleteComment()
    const { likeComment } = useLikeComment()
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const likes = comment.likes.length
    const isAuthor = user?._id === comment.author._id
    const hasLiked = comment.likes.includes(user?._id!)


    const handleEditToggle = (prev: boolean) => {
        setIsEditing(prev)
    }

    console.log(hasLiked)

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
                {
                    isAuthor ? (
                        <div className="flex items-center gap-2">
                            <LikeButton variant="display" onClick={() => { }} initialCount={likes} />
                            <OptionsMenu
                                actions={[
                                    { label: "Edit response", onClick: () => handleEditToggle(true) },
                                    { label: "Delete response", onClick: () => deleteComment(comment._id), danger: true }
                                ]}
                            />

                        </div>
                    ) : (
                        <div className="flex items-center gap-4">
                            <LikeButton variant="button" onClick={() => likeComment(comment._id)} initialCount={likes} initialLiked={hasLiked} />
                            <Button variant={"ghost"} className="text-neutral-500 font-light">
                                <FaRegComment />
                            </Button>
                        </div>
                    )
                }
            </div>
            <div className="flex">
                <div className="w-[80px]"></div>
                {
                    isEditing ? (
                        <CommentEditForm comment={comment} handleToggle={handleEditToggle} />
                    ) : (
                        <p className="text-neutral-800 font-Karla font-light">{comment.content}</p>
                    )
                }
            </div>
            <Separator className="border-dashed border-t border-neutral-300" />
        </div>
    )
}
