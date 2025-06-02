import { CommentButton } from "@/components/button/CommentButton"
import { LikeButton } from "@/components/button/LikeButton"
import { SaveButton } from "@/components/button/SaveButton";
import { OptionsMenu } from "@/components/card/BlogMenuBar";
import { Button } from "@/components/ui/button";
import { useDeletePost, useLikePost, useSavePost } from "@/hooks/usePost";
import { IComment } from "@/old/interfaces/comment.interface";
import { IPost } from "@/old/interfaces/post.interface"
import useUserStore from "@/old/store/useUserStore";
import { Link } from "react-router-dom";


interface ActionBarProps {
    post: IPost;
    comments: IComment[];
}
export const PostActionBar = ({ post, comments }: ActionBarProps) => {

    const { user } = useUserStore()
    const { likePost } = useLikePost()
    const { savePost } = useSavePost()


    const hasLiked = post.likes.includes(user?._id!)
    const hasSavedByUser = post.savedBy.includes(user?._id!)


    return (
        <div className="flex justify-between py-2">
            <div className="flex items-center gap-1">
                <LikeButton variant="button" onClick={() => { likePost(post._id) }} initialCount={post.likes.length} initialLiked={hasLiked} />
                <CommentButton variant="button" post={post} comments={comments} />
            </div>
            <div className="flex items-center gap-1">
                <SaveButton initialSaved={hasSavedByUser} onClick={() => { savePost(post._id) }} />
                <OptionsMenu
                    actions={[
                        { label: "Follow author", onClick: () => { } },
                        { label: "Report story", onClick: () => { }, danger: true }
                    ]}
                />
            </div>
        </div>
    )
}


export const UserPostActionBar = ({ post }: ActionBarProps) => {

    const { deletePost } = useDeletePost()
    
    return (
        <div className="flex items-center justify-end gap-4 py-2">
            <Link to={`/edit-story/${post.slug}`}>
                <Button variant={"outline"}>Edit</Button>
            </Link>
            <Button onClick={() => deletePost(post._id)} variant={"destructive"}>Delete</Button>
        </div>
    )
}