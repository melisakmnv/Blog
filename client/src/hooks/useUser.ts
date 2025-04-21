import { followUser, getUserProfile } from "@/api/requests/user"
import { IUserPayload } from "@/interfaces/user.interface"
import { useMutation, useQueryClient, useSuspenseQuery } from "@tanstack/react-query"
import { toast } from "react-toastify"



// FETCH PUBLIC USER
export const useFetchUserProfile = (username: string) => {

    return useSuspenseQuery<IUserPayload>({
        queryKey: ["userProfile", username],
        queryFn: () => getUserProfile(username)
    })

}



export const useFollowUser = () => {

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async (userId: string) => {
            return await followUser(userId);
        },
        onSuccess: (data) => {
            toast.success(data.message)
            queryClient.invalidateQueries({ queryKey: ["userProfile"] })
        },
        onError: (error: any) => {
            console.log(error.response?.data);
            toast.error(error?.response?.data?.message || "Something went wrong");
        },
    })

    return {
        followUser: mutation.mutate,
        isLoading: mutation.isPending
    }
}