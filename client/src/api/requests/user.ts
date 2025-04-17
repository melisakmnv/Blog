import { IUserPayload } from "@/interfaces/user.interface";
import { axiosInstance } from "../instance";


export const getProfile = async (username: string): Promise<IUserPayload> => {
    try {

        const { data } = await axiosInstance.get(`/users/${username}`, {
            withCredentials: true, // Sends the HTTP-only cookie with the request
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
            withCredentials: true, // Sends the HTTP-only cookie with the request
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
            {}, // no body
            {
                withCredentials: true, // place in config object
            }
        );

        return data;
    } catch (error) {
        console.error("❌ Error during fetching:", error);
        throw error;
    }
};