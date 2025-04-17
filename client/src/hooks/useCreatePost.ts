// src/hooks/useCreatePost.ts
import { useMutation } from "@tanstack/react-query";
import { createPost } from "@/api/requests/post";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
