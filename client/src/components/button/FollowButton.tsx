import { useState } from "react"
import { Button } from "../ui/button"


interface FollowButtonProps {
    initialfollowed: boolean;
    variant: "outline" | "link";
    className?: string;
    onClick: () => void;
}

export const FollowButton = ({ initialfollowed, variant, className, onClick }: FollowButtonProps) => {

    const [follow, setFollow] = useState<boolean>(initialfollowed)


    const handleClick = () => {
        setFollow(!follow)
        onClick()
    }

    return (
        <Button variant={variant} onClick={handleClick} className={className}>
            {follow ? "Unfollow" : "Follow"}
        </Button>
    )
}
