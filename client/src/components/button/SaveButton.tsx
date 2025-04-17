import { useState } from "react"
import { BsBookmark, BsBookmarkFill } from "react-icons/bs"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { useMutation } from "@tanstack/react-query"
import { savePost, unsavePost } from "@/api/requests/user"
import { toast } from "react-toastify"


interface SaveButtonProps {
    postId: string;
    isSaved: boolean;
}
export const SaveButton = ({ postId, isSaved }: SaveButtonProps) => {
    const [saved, setSaved] = useState(isSaved)

    const saveMutation = useMutation({
        mutationFn: (postId: string) => savePost(postId),
        onSuccess: (data) => {
            toast.success(data.message);
        },
        onError: (error: any) => {
            console.log(error.response?.data)
            toast.error(error?.response?.data?.message || "Something went wrong");
        },
    })

    const unsaveMutation = useMutation({
        mutationFn: (postId: string) => unsavePost(postId),
        onSuccess: (data) => {
            toast.success(data.message);
        },
        onError: (error: any) => {
            console.log(error.response?.data)
            toast.error(error?.response?.data?.message || "Something went wrong");
        },
    })

    const handleSave = (postId: string) => {
        saveMutation.mutate(postId)
        setSaved(true)
    }

    const handleUnsave = (postId: string) => {
        unsaveMutation.mutate(postId)
        setSaved(false)
    }


    return (
        <Tooltip>
            <TooltipTrigger asChild>
                {
                    saved ? (
                        <Button variant={"ghost"} onClick={() => handleUnsave(postId)}>
                            <BsBookmarkFill className="text-[#bba07f]" />
                        </Button>
                    ) : (
                        <Button variant={"ghost"} onClick={() => handleSave(postId)}>
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
