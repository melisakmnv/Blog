
import { getUserFollowings, getUserProfile, getUsers } from "@/api/requests/user"
import { USER_FOLLOWINGS_KEY, USER_PROFILE_KEY } from "@/constants/queryKey/user.query.key"
import { IUserPayload, IUserSummary } from "@/interfaces/user.interface"
import { useQuery, useSuspenseQuery } from "@tanstack/react-query"
import { UseFetchUsersOptions } from "./useUserMutation"


// FETCH PUBLIC USER
export const useFetchUserProfile = (username: string) => {
    return useSuspenseQuery<IUserPayload>({

        queryKey: [USER_PROFILE_KEY, username],
        queryFn: () => getUserProfile(username),
        staleTime: 0,
        refetchOnMount: true,
        refetchOnReconnect: true,
        gcTime: 0,           // ← optional: garbage collect immediately

    })
}

export const useFetchUserFollowings = (userId: string) => {
    return useSuspenseQuery<IUserSummary[]>({
        queryKey: [USER_FOLLOWINGS_KEY, userId],
        queryFn: () => getUserFollowings(userId),
        refetchOnWindowFocus: true,
        refetchOnMount: true,
        // staleTime: 0,
    })
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
