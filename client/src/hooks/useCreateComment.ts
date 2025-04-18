import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createComment } from "@/api/requests/comment";
import { CreateCommentSchema } from "@/schema/comment.schema";


export const useCreateComment = () => {

    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: ({ postId, content }: { postId: string; content: CreateCommentSchema }) => createComment(postId, content),
        onSuccess: () => {
            toast.success("You just added a comment")
            queryClient.invalidateQueries({ queryKey: ["comments"] })
        },
        onError: (error: any) => {
            console.log(error.response?.data);
            toast.error(error?.response?.data?.message || "Something went wrong");
        },
    })

    return {
        createComment: mutation.mutate,
        isLoading: mutation.isPending
    }
}