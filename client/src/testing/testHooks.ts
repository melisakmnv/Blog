import { getUserFollowers, getUserFollowings, getUserProfile, getUsers, UserListResponse } from '@/api/requests/user';
import { USER_FOLLOWERS_KEY, USER_FOLLOWINGS_KEY } from '@/constants/queryKey/user.query.key';
import { UseFetchUsersOptions } from '@/hooks/user/useUserMutation';
import { IUserPayload, IUserSummary } from '@/interfaces/user.interface';
import { useQuery } from '@tanstack/react-query';

export const useFetchUserProfile = (username: string) => {
    const { data, error, isLoading } = useQuery<IUserPayload>({
        queryKey: ['userProfile', username],
        queryFn: () => getUserProfile(username),
        staleTime: 0, // Always consider it stale
        refetchOnMount: true, // Refetch on mount
        refetchOnReconnect: true, // Refetch on reconnect
        gcTime: 0, // Garbage collect immediately
    });

    return { data, isLoading, error };
}


export const useFetchUsers = (options: UseFetchUsersOptions = {}) => {
    const { page = 1, limit = 10, enabled = true } = options;

    const { data, error, isLoading } = useQuery<IUserPayload[]>({
        queryKey: ['users', { page, limit }],
        queryFn: () => getUsers(page, limit),
        enabled,
        staleTime: 0 // Cache for 1 minute
    });

    return { data, isLoading, error };
}



// TESTED //
export const useFetUserFollowers = (userId: string, options: UseFetchUsersOptions = {}) => {
    const { page = 1, limit = 10, enabled = true } = options;

    const { data, error, isLoading } = useQuery<UserListResponse, Error, IUserSummary[]>({
        queryKey: [USER_FOLLOWERS_KEY, userId, page, limit],
        queryFn: () => getUserFollowers(userId, page, limit),
        enabled,
        staleTime: 0, // Cache for 1 minute
        select: (data) => data.payload
    });

    return { data, isLoading, error };

}

// TESTED //
export const useFetchUserFollowings = (userId: string, options: UseFetchUsersOptions) => {
    const { page = 1, limit = 10, enabled = true } = options

    const { data, error, isLoading } = useQuery<UserListResponse, Error, IUserSummary[]>({
        queryKey: [USER_FOLLOWINGS_KEY, userId, page, limit],
        queryFn: () => getUserFollowings(userId, page, limit),
        enabled,
        staleTime: 0,
        select: (data) => data.payload
    })

    return { data, isLoading, error }

}