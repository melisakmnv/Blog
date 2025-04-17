import { useState } from "react"

import { useSavePost } from "@/hooks/useSavePost"

import { BsBookmark, BsBookmarkFill } from "react-icons/bs"

import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"


interface SaveButtonProps {
    postId: string;
    isSaved: boolean;
}
export const SaveButton = ({ postId, isSaved }: SaveButtonProps) => {

    const [saved, setSaved] = useState(isSaved)
    const { handleSave, handleUnsave, isSaving, isUnsaving } = useSavePost();

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                {
                    saved ? (
                        <Button disabled={isUnsaving} variant={"ghost"} onClick={() => handleUnsave(postId, setSaved)}>
                            <BsBookmarkFill className="text-[#bba07f]" />
                        </Button>
                    ) : (
                        <Button disabled={isSaving} variant={"ghost"} onClick={() => handleSave(postId, setSaved)}>
                            <BsBookmark className="text-neutral-500" />
                        </Button>
                    )
                }
            </TooltipTrigger>
            <TooltipContent>
                <p>{saved ? "Saved" : "Save post"}</p>
            </TooltipContent>
        </Tooltip>
    )
}
