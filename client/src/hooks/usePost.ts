// src/hooks/useCreatePost.ts
import { useMutation, useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import { createPost, editPost, getPostDetails, getPosts, getUserPosts, likePost, savePost } from "@/api/requests/post";
import { PostFormSchema } from "@/schema/post.schema";
import { IPost } from "@/interfaces/post.interface";
import { getUserSavedPosts } from "@/api/requests/user";
import { IUserPayload } from "@/interfaces/user.interface";


export const useFetchPosts = () => {
    return useSuspenseQuery<IPost[]>({
        queryKey: ["posts"],
        queryFn: getPosts,
        staleTime: 10000,
    })
}


export const useGetPostBySlug = (slug: string) => {
    return useSuspenseQuery<IPost>({
        queryKey: ["posts", slug],
        queryFn: () => getPostDetails(slug),
    });
};


export const useFetchUserPosts = (userId: string) => {

    return useSuspenseQuery<IPost[]>({
        queryKey: ["user-posts", userId],
        queryFn: () => getUserPosts(userId)
    })
}


export const useFetchUserSavedPosts = () => {


    return useSuspenseQuery<IPost[]>({
        queryKey: ["saved-posts"],
        queryFn: () => getUserSavedPosts()
    })
}


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

    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: (postId: string) => savePost(postId),
        onSuccess: (data, postId) => {
            if (data.message === "You have unsaved the post") {
                queryClient.setQueryData<IUserPayload>(["me"], (old) => {
                    if (!old) return old;
                    return {
                        ...old,
                        savedPosts: old.savedPosts.filter(post => post._id !== postId),
                    };
                });
            }

            toast.success(data.message);
            queryClient.invalidateQueries({ queryKey: ["me"] });
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