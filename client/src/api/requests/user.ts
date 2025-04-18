import { IUserPayload } from "@/interfaces/user.interface";
import { axiosInstance } from "../instance";


export const getProfile = async (username: string): Promise<IUserPayload> => {
    try {

        const { data } = await axiosInstance.get(`/users/${username}`, {
            withCredentials: true, 
        });

        return data

    } catch (error) {
        console.error("❌ Error during fetching:", error);
        throw error;
    }
}

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



export const followUser = async (username: string) => {
    try {
        const { data } = await axiosInstance.post(
            `/users/follow/${username}`,
            {},
            {
                withCredentials: true,
            }
        );

        return data;
    } catch (error) {
        console.error("❌ Error during following:", error);
        throw error;
    }
};


export const unFollowUser = async (username: string) => {
    try {
        const { data } = await axiosInstance
            .post(`/users/unfollow/${username}`, {}, { withCredentials: true }
            );
        return data;
    } catch (error) {
        console.error("❌ Error during unfollowing:", error);
        throw error;
    }
};


export const savePost = async (postId: string) => {
    try {
        const { data } = await axiosInstance.post(
            "/users/save",
            { postId },
            { withCredentials: true }
        );
        return data;
    } catch (error) {
        console.error("❌ Error during saving:", error);
        throw error;
    }
};


export const unsavePost = async (postId: string) => {
    try {
        const { data } = await axiosInstance.post(
            "/users/unsave",
            { postId },
            { withCredentials: true }
        );
        return data;
    } catch (error) {
        console.error("❌ Error during unsaving:", error);
        throw error;
    }
};