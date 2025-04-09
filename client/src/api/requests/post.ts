import { IPost } from "@/interfaces/post.interface";
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