import { useQuery } from "@tanstack/react-query"
import { useMemo } from "react"

import { IPost, IUserProfile } from "@/new/api/request/user"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { FollowingList } from "./components/FollowingList"
import { UserInfo } from "./components/UserInfo"
import { BioTab } from "./components/BioTab"
import { PostsTab } from "./components/PostsTab"
import { getMyFollowings, getMyPosts, getMyProfile, getMySavedPosts } from "@/new/api/request/me"

const MyProfile = () => {

    const {
        data: user,
        isLoading: userLoading,
        error: userError
    } = useQuery<IUserProfile>({
        queryKey: ["userProfile"],
        queryFn: () => getMyProfile(),
    })

    const {
        data: posts,
        isLoading: postsLoading,
        error: postsError
    } = useQuery<IPost[]>({
        queryKey: ["userPosts"],
        queryFn: () => getMyPosts(),
    })

    const {
        data: savedPosts,
        isLoading: savedPostsLoading,
        error: savedPostsError
    } = useQuery<IPost[]>({
        queryKey: ["userSavedPosts"],
        queryFn: () => getMySavedPosts()
    })

    const {
        data: followings,
        isLoading: followingsLoading,
        error: followingsError
    } = useQuery<IUserProfile[]>({
        queryKey: ["userFollowings"],
        queryFn: () => getMyFollowings(),
    })

    const isLoading = useMemo(() => userLoading || postsLoading || followingsLoading || savedPostsLoading, [userLoading, postsLoading, followingsLoading, savedPostsLoading])
    const hasError = useMemo(() => userError || postsError || followingsError || savedPostsError, [userError, postsError, followingsError, savedPostsError])


    if (isLoading) return <p>Loading full profile...</p>;
    if (hasError) return <p>Something went wrong loading the profile.</p>;


    return (
        <section className="flex">
            <div className="flex-2 px-20">
                <h1 className="text-5xl capitalize font-semiBold font-Poppins text-neutral-800 my-10">{user?.firstname} {user?.lastname}</h1>
                <Tabs defaultValue="home">
                    <TabsList className="grid w-full grid-cols-3 mb-10">
                        <TabsTrigger value="home">Home</TabsTrigger>
                        <TabsTrigger value="saved">Saved Posts</TabsTrigger>
                        <TabsTrigger value="bio">Bio</TabsTrigger>
                    </TabsList>
                    <TabsContent value="home">
                        <PostsTab posts={posts!} />
                    </TabsContent>
                    <TabsContent value="saved">
                        <PostsTab posts={savedPosts!} />
                    </TabsContent>
                    <TabsContent value="bio">
                        <BioTab user={user!} />
                    </TabsContent>
                </Tabs>
            </div>
            <aside className="sticky top-4 h-[calc(100vh-10rem)] w-1/3">
                <div className="h-full flex flex-col bg-white rounded-2xl shadow-sm p-4">
                    <div className="flex-1 flex flex-col gap-4 overflow-auto">
                        <UserInfo user={user!} />
                        <FollowingList followings={followings!} />
                    </div>
                    <div className="text-xs text-gray-300 font-Karla mt-6 text-center">
                        <p>Crafted with curiosity and caffeine.</p>
                        <p>© {new Date().getFullYear()} Melisakmnv. All rights reserved.</p>
                    </div>
                </div>
            </aside>
        </section>
    )
}

export default MyProfile

