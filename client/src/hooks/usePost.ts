// src/hooks/useCreatePost.ts
import { useMutation, useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import { createPost, editPost, getPostDetails, getPosts, likePost, savePost } from "@/api/requests/post";
import { PostFormSchema } from "@/schema/post.schema";
import { IPost } from "@/interfaces/post.interface";


export const useFetchPosts = () => {
    return useSuspenseQuery<IPost[]>({
        queryKey: ["posts"],
        queryFn: getPosts
    })
}


export const useGetPostBySlug = (slug: string) => {
    return useSuspenseQuery<IPost>({
        queryKey: ["posts", slug],
        queryFn: () => getPostDetails(slug),
    });
};


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


// LIKE OR UNLIKE //
export const useLikePost = () => {

    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: (postId: string) => likePost(postId),
        onSuccess: (data) => {
            toast.success(data.message)
            queryClient.invalidateQueries({ queryKey: ["posts"] })
        },
        onError: (error: any) => {
            console.log(error.response?.data);
            toast.error(error?.response?.data?.message || "Something went wrong");
        },
    })

    return {
        likePost: mutation.mutate,
        isLoading: mutation.isPending
    }
}

// SAVE OR UNSAVE POST //
export const useSavePost = () => {
    // const { user, setUser } = useUserStore();

    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: (postId: string) => savePost(postId),
        onSuccess: (data) => {
            toast.success(data.message);
            queryClient.invalidateQueries({ queryKey: ["posts"] });
        },
        onError: (error: any) => {
            console.log(error.response?.data);
            toast.error(error?.response?.data?.message || "Something went wrong");
        },
    })

    return {
        savePost: mutation.mutate,
        isLoading: mutation.isPending
    }
}