import { SigninSchema } from "@/pages/connexion/Login";
import { RegisterSchema } from "@/pages/connexion/Register"; 
import { axiosInstance } from "../instance";


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