
import { savePost, unsavePost } from "@/api/requests/user";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";


export const useSavePost = () => {
    const saveMutation = useMutation({
        mutationFn: (postId: string) => savePost(postId),
        onSuccess: (data) => {
            toast.success(data.message);
        },
        onError: (error: any) => {
            console.log(error.response?.data);
            toast.error(error?.response?.data?.message || "Something went wrong");
        },
    });

    const unsaveMutation = useMutation({
        mutationFn: (postId: string) => unsavePost(postId),
        onSuccess: (data) => {
            toast.success(data.message);
        },
        onError: (error: any) => {
            console.log(error.response?.data);
            toast.error(error?.response?.data?.message || "Something went wrong");
        },
    });

    const handleSave = (postId: string, setSaved: (val: boolean) => void) => {
        saveMutation.mutate(postId);
        setSaved(true);
    };

    const handleUnsave = (postId: string, setSaved: (val: boolean) => void) => {
        unsaveMutation.mutate(postId);
        setSaved(false);
    };

    return {
        handleSave,
        handleUnsave,
        isSaving: saveMutation.isPending,
        isUnsaving: unsaveMutation.isPending,
    };
};
