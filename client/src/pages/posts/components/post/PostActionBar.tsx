import { CommentButton } from "@/components/button/CommentButton"
import { LikeButton } from "@/components/button/LikeButton"
import { SaveButton } from "@/components/button/SaveButton";
import { OptionsMenu } from "@/components/card/BlogMenuBar";
import { Button } from "@/components/ui/button";
import { IComment } from "@/interfaces/comment.interface";
import { IPost } from "@/interfaces/post.interface"
import { Link } from "react-router-dom";


interface ActionBarProps {
    post: IPost;
    hasLiked?: boolean;
    comments: IComment[];
}
export const PostActionBar = ({ post, hasLiked, comments }: ActionBarProps) => {
    return (
        <div className="flex justify-between py-2">
            <div className="flex items-center gap-1">
                <LikeButton variant="button" onClick={() => { }} initialCount={post.likes.length} initialLiked={hasLiked} />

                <CommentButton variant="button" post={post} comments={comments} />
            </div>
            <div className="flex items-center gap-1">
                <SaveButton initialSaved={true} onClick={() => { }} />
                <OptionsMenu
                    actions={[
                        { label: "Edit response", onClick: () => { } },
                        { label: "Delete response", onClick: () => { }, danger: true }
                    ]}
                />
            </div>
        </div>
    )
}


export const UserPostActionBar = ({ post }: ActionBarProps) => {
    return (
        <div className="flex items-center justify-end gap-4 py-2">
            <Link to={`/edit-story/${post.slug}`}>
                <Button variant={"outline"}>Edit</Button>
            </Link>
            <Button variant={"destructive"}>Delete</Button>
        </div>
    )
}