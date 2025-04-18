import { useSuspenseQuery } from "@tanstack/react-query";

import { IComment } from "@/interfaces/comment.interface"
import { getComments } from "@/api/requests/comment";

import { CommentSidebar } from "./CommentSidebar";
import { CommentCreateForm } from "./CommentForm";
import { CommentPreview } from "./CommentPreview";

import { Button } from "@/components/ui/button";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";


interface ICommentProps {
    postId: string;
}
export const Comment = ({ postId }: ICommentProps) => {

    const { data: comments } = useSuspenseQuery<IComment[]>({
        queryFn: () => getComments(postId),
        queryKey: ["comments", postId]
    })

    const maxComment = 3;
    const commentLenght = comments.length;

    return (
        <>
            <h3 className="text-2xl font-semibold text-neutral-800 mb-6">{comments.length} Comments</h3>
            <CommentCreateForm postId={postId} />

            <section className="space-y-8">
                {comments.slice(0, maxComment).map((comment) => (
                    <CommentPreview key={comment._id} comment={comment} />

                ))}
            </section>

            {
                commentLenght > maxComment && (
                    <section className="hidden md:block">
                        <Drawer direction="right">
                            <DrawerTrigger asChild>
                                <div className="mt-10">
                                    <Button variant={"outline"}>Show all comments</Button>
                                </div>
                            </DrawerTrigger>
                            <CommentSidebar postId={postId} comments={comments} />
                        </Drawer>
                    </section>
                )
            }
            <section className="block md:hidden">
                <Drawer direction="bottom">
                    <DrawerTrigger asChild>
                        <div className="mt-10">
                            <Button variant={"outline"}>Show all comments</Button>
                        </div>
                    </DrawerTrigger>
                    <CommentSidebar postId={postId} comments={comments} />
                </Drawer>
            </section>
        </>
    )
}
