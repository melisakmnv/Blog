import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { signup } from "../old/api/requests/auth";
import { RegisterSchema } from "@/new/pages/connexion/Register";
import { AxiosError } from "axios";
import useUserStore from "@/old/store/useUserStore";
interface ApiErrorResponse {
    message?: string;
}

export const useSignup = () => {
    const navigate = useNavigate();
    const setUser = useUserStore((state) => state.setUser);

    const mutation = useMutation({
        mutationFn: (formData: RegisterSchema) => signup(formData),
        onSuccess: (data) => {
            console.log("Signup successful:", data);
            toast.success(data.message || "Inscription réussie !");
            setUser(data.user);

            setTimeout(() => {
                navigate('/');
            }, 1500);
        },
        onError: (error: AxiosError<ApiErrorResponse>) => {
            console.error("❌ Signup error:", error);
            const errorMessage = error.response?.data?.message || error.message || "Une erreur est survenue lors de l'inscription.";
            toast.error(errorMessage);
        },
    });

    return {
        signupUser: mutation.mutate,
        isLoading: mutation.isPending,
        isSuccess: mutation.isSuccess,
        isError: mutation.isError,
        error: mutation.error,
        data: mutation.data,
    };
};
