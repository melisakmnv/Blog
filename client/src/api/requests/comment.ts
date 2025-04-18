import { axiosInstance } from "../instance";
import { IComment } from "@/interfaces/comment.interface";


// ALL COMMENTS
export const getComments = async (postId: string): Promise<IComment[]> => {
    try {

        const { data } = await axiosInstance.get(`/comments/${postId}`)
        return data

    } catch (error) {
        console.error("❌ Error during fetching:", error);
        throw error;
    }
}

// CREATE COMMENT
export const createComment = async (postId: string, content: string): Promise<IComment> => {
    try {
        const { data } = await axiosInstance.post(`/comments/${postId}`, { content });
        return data;
    } catch (error) {
        console.error("❌ Error during creating comment:", error);
        throw error;
    }
}


// GET USER POSTS
export const deleteComment = async (id: string) => {

    try {
        const { data } = await axiosInstance.delete(`/comments/${id}`)
        return data

    } catch (error) {
        console.error("❌ Error during deleting comment:", error);
        throw error;
    }

}