import { SigninSchema } from "@/old/pages/connexion/Login";
import { RegisterSchema } from "@/old/pages/connexion/Register"; 
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
};

export const signup = async (formData: RegisterSchema) => {
    try {
        const { data } = await axiosInstance.post("/auth/signup", formData);
        return data; 
    } catch (error) {
        console.error("❌ Error during signup:", error);
        throw error; 
    }
};


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
