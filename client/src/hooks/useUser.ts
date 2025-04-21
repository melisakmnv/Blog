import { editUser, followUser, getMyProfile, getUserProfile } from "@/api/requests/user"
import { IUserPayload } from "@/interfaces/user.interface"
import { UpdateProfileSchema } from "@/schema/user.schema"
import { useMutation, useQueryClient, useSuspenseQuery } from "@tanstack/react-query"
import { toast } from "react-toastify"



// FETCH PUBLIC USER
export const useFetchUserProfile = (username: string) => {

    return useSuspenseQuery<IUserPayload>({
        queryKey: ["userProfile", username],
        queryFn: () => getUserProfile(username)
    })

}

export const useFetchMyProfile = () => {
    return useSuspenseQuery<IUserPayload>({
        queryKey: ["me"],
        queryFn: getMyProfile,
        staleTime: 10000
    })
}


export const useFollowUser = () => {

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async (userId: string) => {
            return await followUser(userId);
        },
        onSuccess: (data, userId) => {

            if (data.action === "unfollow") {
                // Remove the user from followings if they have unfollowed
                queryClient.setQueryData<IUserPayload>(["me"], (old) => {
                    if (!old) return old;
                    return {
                        ...old,
                        followings: old.followings.filter(following => following._id !== userId),
                    };
                });
            } 
            queryClient.invalidateQueries({ queryKey: ["me"] })
            toast.success(data.message)
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


export const useEditUser = () => {

    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: (values: UpdateProfileSchema ) => editUser(values),
        onSuccess: () => {
            toast.success("Your profile has been updated")
            queryClient.invalidateQueries({ queryKey: ["me"] })
        },
        onError: (error: any) => {
            console.log(error.response?.data);
            toast.error(error?.response?.data?.message || "Something went wrong");
        },
    })

    return {
        editUser: mutation.mutate,
        isLoading: mutation.isPending
    }
}
