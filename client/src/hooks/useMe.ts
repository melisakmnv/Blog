import { getMyPosts, getMyProfile, getMySavedPosts } from "@/api/requests/me"
import { MY_PROFILE_KEY, MY_SAVED_POSTS_KEY } from "@/constants/queryKey/user.query.key";
import { IPost } from "@/interfaces/post.interface"
import { IUserPayload } from "@/interfaces/user.interface"
import useUserStore from "@/store/useUserStore";
import { useSuspenseQuery } from "@tanstack/react-query"


export const useFetchMyProfile = () => {
    const setUser = useUserStore((state) => state.setUser);

    return useSuspenseQuery<IUserPayload>({
        queryKey: [MY_PROFILE_KEY],
        queryFn: async () => {
            const data = await getMyProfile();
            setUser(data);
            return data;
        },
        staleTime: 10000,
    });
};


export const useFetchMySavedLists = () => {
    return useSuspenseQuery<IPost[]>({
        queryKey: [MY_SAVED_POSTS_KEY],
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


