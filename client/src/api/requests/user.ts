import { IUserPayload } from "@/interfaces/user.interface";
import { axiosInstance } from "../instance";


export const getProfile = async (): Promise<IUserPayload[]> => {
    try {

        const { data } = await axiosInstance.get("/users/profile", {
            withCredentials: true, // Sends the HTTP-only cookie with the request
        });
        
        return data

    } catch (error) {
        console.error("❌ Error during fetching:", error);
        throw error;
    }
}
