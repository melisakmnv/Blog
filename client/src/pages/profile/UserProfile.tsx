import { ProfileSidebar } from "./components/ProfileSidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BlogTab } from "./components/BlogTab";
import { BioTab } from "./components/BioTab";
import { useParams } from "react-router-dom";

import { Suspense } from "react";
import { useFetchUserProfile } from "@/hooks/useUser";
import { useFetchUserPosts } from "@/hooks/usePost";

export const UserProfile = () => {

    const { username } = useParams<{ username: string }>();
    const { data: user } = useFetchUserProfile(username!)
    const { data: posts } = useFetchUserPosts(user._id)

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <main>
                <section className="flex">
                    <div className="flex-2 px-20">
                        <h1 className="text-5xl capitalize font-semiBold font-Poppins text-neutral-800 my-10">{user.firstname} {user.lastname}</h1>
                        <Tabs defaultValue="home">
                            <TabsList className="grid w-full grid-cols-2 mb-10">
                                <TabsTrigger value="home">Home</TabsTrigger>
                                <TabsTrigger value="bio">Bio</TabsTrigger>
                            </TabsList>
                            <TabsContent value="home">
                                {/* USER'S POSTS */}
                                <BlogTab posts={posts} />
                            </TabsContent>
                            <TabsContent value="bio">
                                {/* USER'S BIO */}
                                <BioTab />
                            </TabsContent>
                        </Tabs>
                    </div>
                    <div className="flex-1 hidden lg:block">
                        <ProfileSidebar user={user} />
                    </div>
                </section>
            </main>
        </Suspense>
    );
}
