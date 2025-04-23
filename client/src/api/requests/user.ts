import { IUserPayload } from "@/interfaces/user.interface";
import { axiosInstance } from "../instance";
import { IPostsResponse } from "@/interfaces/post.interface";
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


// TO BE REMOVED
export const getUserSavedPosts = async (): Promise<IPostsResponse> => {

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

export const editUser = async (formData:UpdateProfileSchema): Promise<IUserPayload> => {
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

export interface UsersResponse {
    users: IUserPayload[];
    total: number;
    page: number;
    limit: number;
}

export const getUsers = async (
    page: number = 1, 
    limit: number = 10
): Promise<UsersResponse> => {
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