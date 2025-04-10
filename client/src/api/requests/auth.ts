import { SigninSchema } from "@/pages/connexion/Login";
import { axiosInstance } from "../instance";


export const signin = async (formData: SigninSchema) => {
    try {
        const { data } = await axiosInstance.post("/auth/signin", formData)
        return data
        
    } catch (error) {
        console.error("❌ Error during signin:", error);
        throw error;
    }
}