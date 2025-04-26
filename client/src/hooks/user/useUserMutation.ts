import { editUser, followUser } from "@/api/requests/user";
import { MY_PROFILE_KEY, USER_FOLLOWINGS_KEY } from "@/constants/queryKey/user.query.key";
import { IUserPayload, IUserSummary } from "@/interfaces/user.interface";

import { UpdateProfileSchema } from "@/schema/user.schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


// FOLLOW OR UNFOLLOW USERS //
export const useFollowUser = () => {

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async (userId: string) => {
            return await followUser(userId);
        },
        onSuccess: (data, userId) => {

            if (data.action === "unfollow") {

                queryClient.setQueryData<IUserPayload>([USER_FOLLOWINGS_KEY], (old) => {
                    if (!old) return old;
                    return {
                        ...old,
                        followings: old.followings.filter(following => following._id !== userId),
                    };
                });
                
            }
            queryClient.invalidateQueries({ queryKey: [USER_FOLLOWINGS_KEY] });
            queryClient.invalidateQueries({ queryKey: [MY_PROFILE_KEY] });
            toast.success(data.message)
        },
        onError: (error: any) => {
            console.log(error.response?.data);
            toast.error(error?.response?.data?.message || "Something went wrong");
        },
    })

    return {
        mutationFollowUser: mutation.mutate,
        isLoading: mutation.isPending
    }
}


// EDIT USER PROFILE //
export const useEditUser = () => {

    const queryClient = useQueryClient()
    const navigate = useNavigate()

    const mutation = useMutation({
        mutationFn: (values: UpdateProfileSchema) => editUser(values),
        onSuccess: () => {
            toast.success("Your profile has been updated")
            queryClient.invalidateQueries({ queryKey: [MY_PROFILE_KEY] })
            navigate(-1)
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


export const useFollowings = (currentFollowings: IUserSummary[]) => {
    const queryClient = useQueryClient();
  
    const isFollowing = (id: string) => currentFollowings.some(user => user._id === id);

    const mutation = useMutation({
      mutationFn: followUser,
      onSuccess: (_data) => {
        queryClient.invalidateQueries({ queryKey: ['user', 'followings'] });
        queryClient.invalidateQueries({ queryKey: ['me'] }); // optional, if you want to also refresh your profile
      },
      onError: (error) => {
        console.error('Follow/unfollow failed:', error);
      },
    });
  
    const toggleFollow = (id: string) => {
      mutation.mutate(id);
    };
  
    return {
      toggleFollow,
      isFollowing,
      isPending: mutation.isPending,
      targetId: mutation.variables ?? null,
    };
  };
  