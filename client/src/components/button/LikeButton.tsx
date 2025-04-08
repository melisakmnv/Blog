
import { useState } from "react"
import { FaRegHeart, FaHeart } from "react-icons/fa"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

interface LikeButtonProps {
    initialLiked?: boolean
    initialCount?: number
}

export const LikeButton = ({ initialLiked = false, initialCount = 0 }: LikeButtonProps) => {
    const [liked, setLiked] = useState(initialLiked)
    const [count, setCount] = useState(initialCount)

    const toggleLike = () => {
        setLiked(!liked)
        setCount((prev) => (liked ? prev - 1 : prev + 1))
    }

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button onClick={toggleLike} variant="ghost" size="icon">
                    {liked ? (
                        <FaHeart className="text-[#bba07f]" />
                    ) : (
                        <FaRegHeart className="text-neutral-500" />
                    )}
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                <p>{count} like{count !== 1 && "s"}</p>
            </TooltipContent>
        </Tooltip>
    )
}
