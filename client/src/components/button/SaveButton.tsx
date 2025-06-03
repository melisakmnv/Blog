import { useState } from "react"

import { BsBookmark, BsBookmarkFill } from "react-icons/bs"

import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

interface SaveButtonProps {
    initialSaved: boolean;
    onClick : () => void;
}
export const SaveButton = ({ initialSaved,onClick }: SaveButtonProps) => {

    const [saved, setSaved] = useState(initialSaved)


    const handleClick = () => {
        setSaved((prev) => !prev);
        onClick()
    }

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button variant={"ghost"} onClick={handleClick}>
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
