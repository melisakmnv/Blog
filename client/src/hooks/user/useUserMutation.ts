import { editUser, followUser } from "@/api/requests/user";
import { IUserPayload } from "@/interfaces/user.interface";
import { UpdateProfileSchema } from "@/schema/user.schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";


// FOLLOW OR UNFOLLOW USERS //
export const useFollowUser = () => {

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async (userId: string) => {
            return await followUser(userId);
        },
        onSuccess: (data, userId) => {

            toast.success(data.message)
            if (data.action === "unfollow") {
                // Remove the user from followings if they have unfollowed
                queryClient.setQueryData<IUserPayload>(["user-followings"], (old) => {
                    if (!old) return old;
                    return {
                        ...old,
                        followings: old.followings.filter(following => following._id !== userId),
                    };
                });
            }
            queryClient.invalidateQueries({ queryKey: ["user-followings"] })
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


// EDIT USER PROFILE //
export const useEditUser = () => {

    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: (values: UpdateProfileSchema) => editUser(values),
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
