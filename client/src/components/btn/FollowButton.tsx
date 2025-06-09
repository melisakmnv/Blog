import { Button } from "../ui/button";

interface FollowButtonProps {
    initialFollow: boolean;
    size?: "default" | "sm"
    variant?: "default" | "outline" | "secondary"
}
export const FollowButton = ({
    initialFollow,
    size = "default",
    variant = "default",
}: FollowButtonProps) => {
    return (
        <Button size={size} variant={variant}>
            <span className="relative z-10">
                {initialFollow ? "Unpawllow 🐾" : "🐾 Pawllow"}
            </span>
        </Button>
    );
};
