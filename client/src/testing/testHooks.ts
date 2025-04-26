import { getUserProfile, getUsers } from '@/api/requests/user';
import { UseFetchUsersOptions } from '@/hooks/user/useUserMutation';
import { IUserPayload } from '@/interfaces/user.interface';
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