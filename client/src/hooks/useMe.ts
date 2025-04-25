import { getMyPosts, getMyProfile, getMySavedPosts } from "@/api/requests/me"
import { IPost } from "@/interfaces/post.interface"
import { IUserPayload } from "@/interfaces/user.interface"
import { useSuspenseQuery } from "@tanstack/react-query"


export const useFetchMyProfile = () => {
    return useSuspenseQuery<IUserPayload>({
        queryKey: ["me"],
        queryFn: getMyProfile,
        staleTime: 0, 
    })
}


export const useFetchMySavedLists = () => {
    return useSuspenseQuery<IPost[]>({
        queryKey: ["my-savedposts"],
        queryFn: getMySavedPosts,
        staleTime: 10000
    })
}


export const useFetchMyPosts = (userId: string) => {

    return useSuspenseQuery<IPost[]>({
        queryKey: ["user-posts", userId],
        queryFn: () => getMyPosts(userId),
        staleTime: 10000,
    })
}


