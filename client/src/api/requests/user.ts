import { IUserPayload, IUserSummary } from "@/interfaces/user.interface";
import { axiosInstance } from "../instance";
import { UpdateProfileSchema } from "@/schema/user.schema";

export const getUserProfile = async (username: string): Promise<IUserPayload> => {
    try {

        const { data } = await axiosInstance.get(`/users/${username}`)
        return data

    } catch (error) {
        console.error("❌ Error during fetching:", error);
        throw error;
    }
}



// FOLLOW OR UNFOLLOW USER //
export const followUser = async (id: string) => {
    try {
        const { data } = await axiosInstance.post(
            `/users/me/follow/${id}`,
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

export const editUser = async (formData: UpdateProfileSchema): Promise<IUserPayload> => {
    try {

        const { data } = await axiosInstance.patch(
            `/users/me`, formData,
            {
                withCredentials: true,
            }
        );

        return data;

    } catch (error) {
        console.error("❌ Error during following:", error);
        throw error;
    }
}

export const getUsers = async (
    page: number = 1, 
    limit: number = 10
): Promise<IUserPayload[]> => {
    try {
        const { data } = await axiosInstance.get(`/users`, {
            params: { page, limit },
            withCredentials: true,
        });
        
        return data;
    } catch (error) {
        console.error("❌ Error during fetching users:", error);
        throw error;
    }
}



// GET MY FOLLOWINGS LIST //
export const getUserFollowings = async (id: string): Promise<IUserSummary[]> => {

    try {
        const { data } = await axiosInstance.get(`/users/${id}/followings`, {
            withCredentials: true,
        });

        return data

    } catch (error) {
        console.error("❌ Error during fetching following list:", error);
        throw error;
    }
}


