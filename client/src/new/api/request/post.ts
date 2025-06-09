import { axiosInstance } from "../instance";
import { IPost } from "./user";

export const getPostBySlug = async (slug: string): Promise<IPost> => {

    try {
        const { data } = await axiosInstance.get(`/posts/${slug}`)
        return data

    } catch (error) {
        console.error("❌ Error during fetching:", error);
        throw error;
    }

}