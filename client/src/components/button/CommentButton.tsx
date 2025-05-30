import { IPost } from "@/interfaces/post.interface";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"
import { Button } from "../ui/button";
import { Drawer, DrawerTrigger } from "../ui/drawer";

import { FaRegComment, FaComment } from "react-icons/fa";

import { CommentSidebar } from "@/pages/posts/components/comment/CommentSidebar";
import { IComment } from "@/interfaces/comment.interface";


interface CommentButtonProps {
    post: IPost;
    comments?: IComment[];
    variant: "display" | "button";
}

export const CommentButton = ({ post, variant, comments }: CommentButtonProps) => {

    return (
        <>
            {
                variant === "display" ? (
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div className="flex items-center gap-2">
                                <FaComment className="text-neutral-400" />
                                {
                                    post.comments.length > 0 && (<p className="text-neutral-400">
                                        {post.comments.length}
                                    </p>)
                                }
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{post.comments.length} comment{post.comments.length > 1 && "s"}</p>
                        </TooltipContent>
                    </Tooltip>
                ) : (
                    <Drawer direction="right">
                        <Tooltip>
                            <DrawerTrigger asChild>
                                <TooltipTrigger asChild>
                                    <Button variant="ghost">
                                        <FaRegComment className="text-neutral-500" />
                                        {
                                            post.comments.length > 0 && (<p className="text-neutral-500">
                                                {post.comments.length}
                                            </p>)
                                        }
                                    </Button>
                                </TooltipTrigger>
                            </DrawerTrigger>
                            <TooltipContent>
                                <p>
                                    {post.comments.length} comment{post.comments.length > 1 && "s"}
                                </p>
                            </TooltipContent>
                        </Tooltip>
                        <CommentSidebar postId={post._id} comments={comments!} />
                    </Drawer>
                )
            }
        </>
    )
}
