import { signin } from "@/old/api/requests/auth";
import useUserStore from "@/old/store/useUserStore";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useSignin = () => {
    const navigate = useNavigate();
    const setUser = useUserStore((state) => state.setUser);

    const mutation = useMutation({
        mutationFn: signin,
        onSuccess: (data) => {
            navigate("/profile/me");
            toast.success(data.message);
            setUser(data.user);
        },
        onError: (error: any) => {
            console.log(error.response?.data);
            toast.error(error?.response?.data?.message || "Error signing in");
        },
    });

    return {
        signin: mutation.mutate,
        isLoading: mutation.isPending,
    };
};