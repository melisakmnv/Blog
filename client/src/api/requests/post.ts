import { IPost, IPostForm } from "@/interfaces/post.interface";
import { axiosInstance } from "../instance";


// ALL POST
export const getPosts = async (): Promise<IPost[]> => {
    try {

        const { data } = await axiosInstance.get("/posts")
        return data

    } catch (error) {
        console.error("❌ Error during fetching:", error);
        throw error;
    }
}

// POST DETAILS
export const getPostDetails = async (slug: string): Promise<IPost> => {

    try {

        const { data } = await axiosInstance.get(`/posts/${slug}`)
        return data

    } catch (error) {
        console.error("❌ Error during fetching:", error);
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


export const editPost = async (id: string, formData: IPostForm): Promise<IPost> => {

    try {
        const { data } = await axiosInstance.patch(`/posts/${id}`, formData)
        return data

    } catch (error) {
        console.error("❌ Error during creating post:", error);
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