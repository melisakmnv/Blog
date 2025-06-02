import { Button } from "../ui/button"


interface FollowButtonProps {
    initialfollowed: boolean;
    variant: "outline" | "link";
    className?: string;
    onClick: () => void;
}

export const FollowButton = ({ initialfollowed, variant, className, onClick }: FollowButtonProps) => {

    return (
        <Button variant={variant} onClick={onClick} className={className}>
            {initialfollowed ? "Unfollow" : "Follow"}
        </Button>
    )
}
