import { useParams } from "react-router-dom";

import { useFetchUserProfile } from "@/hooks/user/useUserQuery";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ProfileSidebar } from "./components/ProfileSidebar";
import { UserPosts } from "@/components/posts/UserPosts";
import { BioTab } from "./components/BioTab";
import { Suspense } from "react";
import { PostSkeletons } from "../posts/Posts";
import { ProfileAsideSkeleton } from "@/components/skeleton/Skeletons";

export const UserProfile = () => {

    const { username } = useParams<{ username: string }>();
    // const { data: user } = useFetchUserProfile(username!)

    return (
        <main>
            <section className="flex">
                <div className="flex-2 px-20">
                    {/* <h1 className="text-5xl capitalize font-semiBold font-Poppins text-neutral-800 my-10">{user.firstname} {user.lastname}</h1> */}
                    <Suspense fallback={<div>Loading User...</div>}>
                        <UserProfileContent username={username!} />
                    </Suspense>
                </div>
                <div className="flex-1 hidden lg:block">
                    <Suspense fallback={<ProfileAsideSkeleton />}>
                        <ProfileSidebarWrapper username={username!} />
                    </Suspense>
                </div>
            </section>
        </main>
    );
}


const UserProfileContent = ({ username }: { username: string }) => {
    const { data: user } = useFetchUserProfile(username);

    return (
        <>
            <h1 className="text-5xl capitalize font-semiBold font-Poppins text-neutral-800 my-10">
                {user.firstname} {user.lastname}
            </h1>
            <Tabs defaultValue="home">
                <TabsList className="grid w-full grid-cols-2 mb-10">
                    <TabsTrigger value="home">Home</TabsTrigger>
                    <TabsTrigger value="bio">Bio</TabsTrigger>
                </TabsList>
                <TabsContent value="home">
                    <Suspense fallback={<PostSkeletons />}>
                        <UserPosts userId={user._id} />
                    </Suspense>
                </TabsContent>
                <TabsContent value="bio">
                    <BioTab user={user} />
                </TabsContent>
            </Tabs>
        </>
    );
};


const ProfileSidebarWrapper = ({ username }: { username: string }) => {
    const { data: user } = useFetchUserProfile(username);

    return <ProfileSidebar user={user} />;
};