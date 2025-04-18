import { ProfileSidebar } from "./components/ProfileSidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BlogTab } from "./components/BlogTab";
import { ListTab } from "./components/ListTab";
import { BioTab } from "./components/BioTab";
import { useParams } from "react-router-dom";
import { useSuspenseQuery } from "@tanstack/react-query";

import { getMyProfile, getProfile } from "@/api/requests/user";
import { getUserPosts } from "@/api/requests/post";
import { Suspense } from "react";

export const UserProfile = () => {

    const isOwnProfile = false
    const { username } = useParams<{ username: string }>();

    const { data: currentUser } = useSuspenseQuery({
        queryKey: ["myProfile"],
        queryFn: getMyProfile,
    });

    const { data: profileUser, isLoading, isError } = useSuspenseQuery({
        queryKey: ["userProfile", username],
        queryFn: () => getProfile(username!),
    })

    const { data: posts } = useSuspenseQuery({
        queryKey: ["posts", username],
        queryFn: () => getUserPosts(profileUser._id),
    })

    if (isLoading) return <p>Loading...</p>;
    if (isError || !profileUser) return <p>User not found</p>;

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <main>
                <section className="flex">
                    <div className="flex-2 px-20">
                        <h1 className="text-5xl capitalize font-semiBold font-Poppins text-neutral-800 my-10">{profileUser?.firstname} {profileUser?.lastname}</h1>
                        <Tabs defaultValue="home">
                            <TabsList className="grid w-full grid-cols-3 mb-10">
                                <TabsTrigger value="home">Home</TabsTrigger>
                                <TabsTrigger value="list">List</TabsTrigger>
                                <TabsTrigger value="bio">Bio</TabsTrigger>
                            </TabsList>
                            <TabsContent value="home">
                                {/* USER'S POSTS */}
                                <BlogTab posts={posts} currentUser={currentUser} />
                            </TabsContent>
                            <TabsContent value="list">
                                <ListTab />
                            </TabsContent>
                            <TabsContent value="bio">
                                {/* USER'S BIO */}
                                <BioTab />
                            </TabsContent>
                        </Tabs>
                    </div>
                    <div className="flex-1 hidden lg:block">
                        <ProfileSidebar user={profileUser} isOwnProfile={isOwnProfile} />
                    </div>
                </section>
            </main>
        </Suspense>
    );
}
