import { SigninSchema } from "@/pages/connexion/Login";
import { axiosInstance } from "../instance";
import { toast } from "react-toastify";


export const signin = async (formData: SigninSchema) => {
    try {
        const { data } = await axiosInstance.post("/auth/signin", formData)
        return data
        
    } catch (error) {
        console.error("❌ Error during signin:", error);
        throw error;
    }
}


export const logoutUser = async () => {
    try {
        const { data } = await axiosInstance.post("/auth/logout")
        toast.success("Logout successfully")
        return data
        
    } catch (error) {
        console.error("❌ Error during logout:", error);
        throw error;
    }
}