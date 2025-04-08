import { useState } from "react"
import { Button } from "../ui/button"


interface FollowButtonProps {
    initialfollowed?: boolean
    variant: "outline" | "link";
    className?: string;
}

export const FollowButton = ({ initialfollowed, variant, className }: FollowButtonProps) => {


    const [follow, setFollow] = useState(initialfollowed)

    const toggleLike = () => {
        setFollow(!follow)
    }
    return (
        <Button variant={variant} onClick={toggleLike} className={className}>
            {follow ? "Unfollow" : "Follow"}
        </Button>
    )
}
