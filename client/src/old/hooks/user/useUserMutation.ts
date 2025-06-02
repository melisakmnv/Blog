import { editUser, followUser, getUsers } from "@/old/api/requests/user";
import { IUserPayload } from "@/old/interfaces/user.interface";
import { UpdateProfileSchema } from "@/old/schema/user.schema";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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

export interface UseFetchUsersOptions {
    page?: number;
    limit?: number;
    enabled?: boolean;
}

export const useFetchUsers = (options: UseFetchUsersOptions = {}) => {
    const { 
        page = 1, 
        limit = 10, 
        enabled = true 
    } = options;

    return useQuery<IUserPayload[]>({
        queryKey: ["users", { page, limit }],
        queryFn: () => getUsers(page, limit),
        enabled,
        staleTime: 60000, // 1 minute
    });
}
