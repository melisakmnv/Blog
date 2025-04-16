import { IPost, IPostForm } from "@/interfaces/post.interface";
import { axiosInstance } from "../instance";


export const getPosts = async (): Promise<IPost[]> => {
    try {

        const { data } = await axiosInstance.get("/posts")
        return data

    } catch (error) {
        console.error("❌ Error during fetching:", error);
        throw error;
    }
}

export const getPostDetails = async (slug: string): Promise<IPost> => {

    try {

        const { data } = await axiosInstance.get(`/posts/${slug}`)
        return data

    } catch (error) {
        console.error("❌ Error during fetching:", error);
        throw error;
    }
}

export const createPost = async (formData: IPostForm): Promise<IPost> => {
    try {

        const { data } = await axiosInstance.post(`/posts/`, formData)
        return data

    } catch (error) {
        console.error("❌ Error during creating post:", error);
        throw error;
    }
}