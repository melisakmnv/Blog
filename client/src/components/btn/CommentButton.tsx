import { Button } from "../ui/button"
import comment from "../../assets/comment.svg"


export const CommentButton = () => {

    return (
        <Button size="icon">
            <img
                src={comment}
                alt="comment"
                className="w-10 h-10 object-contain pointer-events-none"
            />
        </Button>
    )
}