import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createComment, deleteComment, editComment, likeComment } from "@/api/requests/comment";
import { CommentFormSchema } from "@/schema/comment.schema";


export const useCreateComment = () => {

    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: ({ postId, content }: { postId: string; content: CommentFormSchema }) => createComment(postId, content),
        onSuccess: () => {
            toast.success("You just added a response")
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


export const useDeleteComment = () => {

    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: (commentId: string) => deleteComment(commentId),
        onSuccess: (data) => {
            toast.success(data.message)
            queryClient.invalidateQueries({ queryKey: ["comments"] })
        },
        onError: (error: any) => {
            console.log(error.response?.data);
            toast.error(error?.response?.data?.message || "Something went wrong");
        },
    })

    return {
        deleteComment: mutation.mutate,
        isLoading: mutation.isPending
    }
}


export const useEditComment = () => {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: ({ commentId, content }: { commentId: string; content: CommentFormSchema }) => editComment(commentId, content),
        onSuccess: () => {
            toast.success("Your response has been edited")
            queryClient.invalidateQueries({ queryKey: ["comments"] })
        },
        onError: (error: any) => {
            console.log(error.response?.data);
            toast.error(error?.response?.data?.message || "Something went wrong");
        },
    })

    return {
        editComment: mutation.mutate,
        isLoading: mutation.isPending
    }
}

// LIKE OR UNLIKE //
export const useLikeComment = () => {

    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: (commentId: string) => likeComment(commentId),
        onSuccess: (data) => {
            toast.success(data.message)
            queryClient.invalidateQueries({ queryKey: ["comments"] })
        },
        onError: (error: any) => {
            console.log(error.response?.data);
            toast.error(error?.response?.data?.message || "Something went wrong");
        },
    })

    return {
        likeComment: mutation.mutate,
        isLoading: mutation.isPending
    }
}