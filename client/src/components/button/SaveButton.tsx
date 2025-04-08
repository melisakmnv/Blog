import { useState } from "react"
import { BsBookmark, BsBookmarkFill } from "react-icons/bs"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

export const SaveButton = () => {
    const [saved, setSaved] = useState(false)

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button onClick={() => setSaved(!saved)} variant="ghost" size="icon">
                    {saved ? (
                        <BsBookmarkFill className="text-[#bba07f]" />
                    ) : (
                        <BsBookmark className="text-neutral-500" />
                    )}
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                <p>{saved ? "Saved" : "Save post"}</p>
            </TooltipContent>
        </Tooltip>
    )
}
