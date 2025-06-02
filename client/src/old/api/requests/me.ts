import { IUserPayload } from "@/old/interfaces/user.interface";
import { axiosInstance } from "../instance";
import { IPost } from "@/old/interfaces/post.interface";


// GET MY PROFILE //
export const getMyProfile = async (): Promise<IUserPayload> => {

    try {

        const { data } = await axiosInstance.get(`/users/me`, {
            withCredentials: true,
        });

        return data

    } catch (error) {
        console.error("❌ Error during fetching:", error);
        throw error;
    }
}

// GET MY POSTS LIST //
export const getMyPosts = async (id: string): Promise<IPost[]> => {

    try {

        const { data } = await axiosInstance.get(`/posts/user/${id}`)
        return data

    } catch (error) {
        console.error("❌ Error during fetching user' post:", error);
        throw error;
    }
}

// GET MY SAVED LIST //
export const getMySavedPosts = async (): Promise<IPost[]> => {

    try {

        const { data } = await axiosInstance.get(`/users/me/saved-posts`, {
            withCredentials: true,
        });

        return data

    } catch (error) {
        console.error("❌ Error during fetching user's saved posts:", error);
        throw error;
    }
}

