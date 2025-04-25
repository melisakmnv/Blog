
import { getUserFollowings, getUserProfile } from "@/api/requests/user"
import { IUserPayload, IUserSummary } from "@/interfaces/user.interface"
import { useSuspenseQuery } from "@tanstack/react-query"


// FETCH PUBLIC USER
export const useFetchUserProfile = (username: string) => {

    return useSuspenseQuery<IUserPayload>({
        queryKey: ["userProfile", username],
        queryFn: () => getUserProfile(username)
    })

}

export const useFetchUserFollowings = (userId: string) => {
    return useSuspenseQuery<IUserSummary[]>({
        queryKey: ["user-followings", userId],
        queryFn: () => getUserFollowings(userId),
        refetchOnWindowFocus: true,
        refetchOnMount: true,
        // staleTime: 0,
    })
}