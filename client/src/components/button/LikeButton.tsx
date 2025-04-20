
import { useState } from "react"
import { FaRegHeart, FaHeart } from "react-icons/fa"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

interface LikeButtonProps {
    initialLiked?: boolean;
    initialCount?: number;
    variant: "display" | "button"
    onClick: () => void;
}

export const LikeButton = ({ initialLiked = false, initialCount = 0, variant = "button", onClick }: LikeButtonProps) => {
    const [liked, setLiked] = useState(initialLiked)
    const [count, setCount] = useState(initialCount)

    const toggleLike = () => {
        setLiked(!liked)
        setCount((prev) => (liked ? prev - 1 : prev + 1))
    }

    const handleClick = () => {
        toggleLike()
        onClick()
    }

    return (
        <>
            {
                variant === "display" ? (
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div className="flex items-center gap-2">
                                {/* <Button variant="ghost"> */}
                                <FaHeart className="text-neutral-500" />
                                <p className="text-neutral-500">{initialCount}</p>
                                {/* </Button> */}
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{initialCount} like{initialCount > 1 && "s"} </p>
                        </TooltipContent>
                    </Tooltip>
                ) : (
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button onClick={handleClick} variant="ghost">
                                <p className="flex items-center gap-2 text-neutral-500">
                                    {liked ? (
                                        <FaHeart className="text-[#bba07f]" />
                                    ) : (
                                        <FaRegHeart className="text-neutral-500" />
                                    )}
                                    {
                                        <span className="text-[#bba07f]">{count > 0 && count}</span>
                                    }
                                </p>

                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{count} like{count > 1 && "s"}</p>
                        </TooltipContent>
                    </Tooltip>
                )
            }
        </>
    )
}
