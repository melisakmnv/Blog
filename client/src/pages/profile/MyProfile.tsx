

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BlogTab } from "./components/BlogTab";
import { ListTab } from "./components/ListTab";
import { BioTab } from "./components/BioTab";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getUserPosts } from "@/api/requests/post";
import { getMyProfile } from "@/api/requests/user";
import { MyProfileSidebar } from "./components/MyProfileSidebar";


export const MyProfile = () => {

    const { data: currentUser, isLoading, isError, } = useSuspenseQuery({
        queryKey: ["myProfile"],
        queryFn: getMyProfile,
    });

    const { data: posts } = useSuspenseQuery({
        queryKey: ["posts", currentUser?._id],
        queryFn: () => getUserPosts(currentUser._id),
    });

    if (isLoading || !currentUser) return <div>Loading...</div>;
    if (isError || !currentUser) return <p>User not found</p>;


    return (
        <main>
            <section className="flex">
                <div className="flex-2 px-20">
                    <h1 className="text-5xl capitalize font-semiBold font-Poppins text-neutral-800 my-10">{currentUser?.firstname} {currentUser?.lastname}</h1>
                    <Tabs defaultValue="home">
                        <TabsList className="grid w-full grid-cols-3 mb-10">
                            <TabsTrigger value="home">Home</TabsTrigger>
                            <TabsTrigger value="list">List</TabsTrigger>
                            <TabsTrigger value="bio">Bio</TabsTrigger>
                        </TabsList>
                        <TabsContent value="home">
                            <BlogTab posts={posts} />
                        </TabsContent>
                        <TabsContent value="list">
                            <ListTab />
                        </TabsContent>

                        <TabsContent value="bio">
                            <BioTab />
                        </TabsContent>
                    </Tabs>
                </div>
                <div className="flex-1 hidden lg:block">
                    <MyProfileSidebar user={currentUser} />
                </div>
            </section>
        </main>
    );
}
