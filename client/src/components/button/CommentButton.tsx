import { IPost } from "@/interfaces/post.interface";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"

import { FaRegComment, FaComment } from "react-icons/fa";
import { Button } from "../ui/button";


interface CommentButtonProps {
    post: IPost;
    variant: "display" | "button";
}
export const CommentButton = ({ post, variant }: CommentButtonProps) => {


    return (
        <>
            {
                variant === "display" ? (
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost">
                                <FaComment className="text-neutral-500" />
                                <p className="text-neutral-500">{post.comments}</p>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{post.comments} comment{post.comments !== 1 && "s"}</p>
                        </TooltipContent>
                    </Tooltip>
                ) : (
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="ghost">
                                    <FaRegComment className="text-neutral-500" />
                                    <p className="text-neutral-500">{post.comments}</p>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{post.comments} comment{post.comments !== 1 && "s"}</p>
                            </TooltipContent>
                        </Tooltip>
                )
            }
        </>
    )
}
