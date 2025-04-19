
import { axiosInstance } from "../instance";
import { CommentFormSchema } from "@/schema/comment.schema";
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
export const createComment = async (postId: string, content: CommentFormSchema): Promise<IComment> => {
    try {
        const { data } = await axiosInstance.post(`/comments/${postId}`, content, {
            withCredentials: true,
        });
        return data;
    } catch (error) {
        console.error("❌ Error during creating comment:", error);
        throw error;
    }
}


// DELETE COMMENT
export const deleteComment = async (id: string) => {

    try {
        const { data } = await axiosInstance.delete(`/comments/${id}`, {
            withCredentials: true,
        })
        return data

    } catch (error) {
        console.error("❌ Error during deleting comment:", error);
        throw error;
    }

}

// EDIT COMMENT

export const editComment = async (id: string, content: CommentFormSchema): Promise<IComment> => {

    try {
        const { data } = await axiosInstance.patch(`/comments/${id}`, content, {
            withCredentials: true,
        })
        return data

    } catch (error) {
        console.error("❌ Error during editing comment:", error);
        throw error;
    }

}

// LIKE OR DISLIKE COMMENT 

export const likeComment = async (id: string) => {
    try {

        const { data } = await axiosInstance.patch(`comments/${id}/like`, {
            withCredentials: true,
        })
        return data

    } catch (error) {
        console.error("❌ Error during liking/disliking comment:", error);
        throw error;
    }
}