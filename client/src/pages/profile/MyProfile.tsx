import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BioTab } from "./components/BioTab";

import { MyProfileSidebar } from "./components/MyProfileSidebar";

import { Suspense } from "react";
import { PostSkeletons } from "../posts/Posts";

import { ProfileAsideSkeleton } from "@/components/skeleton/Skeletons";
import { UserPosts, UserSavedPosts } from "@/components/posts/UserPosts";
import useUserStore from "@/store/useUserStore";

export const MyProfile = () => {

    const { user } = useUserStore();
 
    return (
        <main>
            <section className="flex">
                <div className="flex-2 px-20">
                    <h1 className="text-5xl capitalize font-semiBold font-Poppins text-neutral-800 my-10">{user?.firstname} {user?.lastname}</h1>
                    <Tabs defaultValue="home">
                        <TabsList className="grid w-full grid-cols-3 mb-10">
                            <TabsTrigger value="home">Home</TabsTrigger>
                            <TabsTrigger value="savedposts">Save List</TabsTrigger>
                            <TabsTrigger value="bio">Bio</TabsTrigger>
                        </TabsList>
                        <TabsContent value="home">
                            <Suspense fallback={<PostSkeletons />}>
                                <UserPosts userId={user?._id!} />
                            </Suspense>
                        </TabsContent>
                        <TabsContent value="savedposts">
                            <Suspense fallback={<PostSkeletons />}>
                                <UserSavedPosts />
                            </Suspense>
                        </TabsContent>

                        <TabsContent value="bio">
                            <BioTab user={user!} />
                        </TabsContent>
                    </Tabs>
                </div>
                <div className="flex-1 hidden lg:block">
                    <Suspense fallback={<ProfileAsideSkeleton />}>
                        <MyProfileSidebar user={user!} />
                    </Suspense>
                </div>
            </section>
        </main>
    );
}




