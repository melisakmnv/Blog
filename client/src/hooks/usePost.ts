// src/hooks/useCreatePost.ts
import { useMutation, useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { createPost, editPost, getPostDetails } from "@/api/requests/post";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { PostFormSchema } from "@/schema/post.schema";
import { IPost } from "@/interfaces/post.interface";

export const useCreatePost = () => {
    const navigate = useNavigate();

    const mutation = useMutation({
        mutationFn: createPost,
        onSuccess: (data) => {
            navigate(`/posts/${data.slug}`);
        },
        onError: (error: any) => {
            console.log(error.response?.data);
            toast.error(error?.response?.data?.message || "Error creating new post");
        },
    });

    return {
        createPost: mutation.mutate,
        isLoading: mutation.isPending,
    };
};


export const useGetPostBySlug = (slug: string) => {
    return useSuspenseQuery<IPost>({
        queryKey: ["posts", slug],
        queryFn: () => getPostDetails(slug),
    });
};


export const useEditPost = () => {

    const navigate = useNavigate();
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: ({ postId, values }: { postId: string; values: PostFormSchema }) => editPost(postId, values),
        onSuccess: (data) => {
            toast.success("Your changes have been saved.")
            queryClient.invalidateQueries({ queryKey: ["posts", data.slug] })
            navigate(`/posts/${data.slug}`);
        },
        onError: (error: any) => {
            console.log(error.response?.data);
            toast.error(error?.response?.data?.message || "Something went wrong");
        },
    })

    return {
        editPost: mutation.mutate,
        isLoading: mutation.isPending
    }

}