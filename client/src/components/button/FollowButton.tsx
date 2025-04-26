import { Button } from "../ui/button"


interface FollowButtonProps {
    initialfollowed: boolean;
    variant: "outline" | "link";
    className?: string;
    onClick: () => void;
    isLoading?: boolean;
}

export const FollowButton = ({ variant, className, onClick, isLoading,initialfollowed }: FollowButtonProps) => {

    // const [followed, setFollowed] = useState(initialfollowed);
    // const [count, setCount] = useState(initialCount)

    // useEffect(() => {
    //     setFollowed(initialfollowed);
    // }, [initialfollowed]);

    // const handleFollowClick = () => {
    //     setFollowed(!followed);
    //     setCount((prev) => (followed ? prev - 1 : prev + 1))
    //     onClick(); 
    // };

    return (
        <Button variant={variant} onClick={onClick} className={className} disabled={isLoading}>
            {isLoading ? (
                <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#ee9a5a]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Loading...
                </div>
            ) : (
                initialfollowed ? "Unfollow" : "Follow"
            )}
        </Button>
    )
}
