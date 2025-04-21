import { IPost, IPostForm } from "@/interfaces/post.interface";
import { axiosInstance } from "../instance";


// GET ALL POST
export const getPosts = async (): Promise<IPost[]> => {
    try {

        const { data } = await axiosInstance.get("/posts")
        return data

    } catch (error) {
        console.error("❌ Error during fetching:", error);
        throw error;
    }
}

// GET POST BY SLUG
export const getPostDetails = async (slug: string): Promise<IPost> => {

    try {

        const { data } = await axiosInstance.get(`/posts/${slug}`)
        return data

    } catch (error) {
        console.error("❌ Error during fetching:", error);
        throw error;
    }
}


// GET USER POSTS
export const getUserPosts = async (id: string): Promise<IPost[]> => {
    try {

        const { data } = await axiosInstance.get(`/posts/user/${id}`)
        return data

    } catch (error) {
        console.error("❌ Error during fetching user' post:", error);
        throw error;
    }
}


// CREATE POST
export const createPost = async (formData: IPostForm): Promise<IPost> => {
    try {

        const { data } = await axiosInstance.post(`/posts/`, formData)
        return data

    } catch (error) {
        console.error("❌ Error during creating post:", error);
        throw error;
    }
}


// EDIT POST
export const editPost = async (id: string, formData: IPostForm): Promise<IPost> => {

    try {
        const { data } = await axiosInstance.patch(`/posts/${id}`, formData)
        return data

    } catch (error) {
        console.error("❌ Error during creating post:", error);
        throw error;
    }
}


// LIKE OR DISLIKE POST 
export const likePost = async (id: string) => {
    try {

        const { data } = await axiosInstance.patch(`posts/${id}/like`, {
            withCredentials: true,
        })
        return data

    } catch (error) {
        console.error("❌ Error during liking/disliking comment:", error);
        throw error;
    }
}


// SAVE OR UNSAVE POST 
export const savePost = async (id: string) => {

    try {

        const { data } = await axiosInstance.patch(`posts/${id}/save`, {
            withCredentials: true,
        })
        return data

    } catch (error) {
        console.error("❌ Error during saving/unsaving post:", error);
        throw error;
    }
}




