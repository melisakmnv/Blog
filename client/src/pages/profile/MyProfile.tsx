

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BlogTab } from "./components/BlogTab";
import { ListTab } from "./components/ListTab";
import { BioTab } from "./components/BioTab";

import { MyProfileSidebar } from "./components/MyProfileSidebar";
import { useFetchMyProfile } from "@/hooks/useUser";

export const MyProfile = () => {

    const { data: user } = useFetchMyProfile()

    return (
        <main>
            <section className="flex">
                <div className="flex-2 px-20">
                    <h1 className="text-5xl capitalize font-semiBold font-Poppins text-neutral-800 my-10">{user?.firstname} {user?.lastname}</h1>
                    <Tabs defaultValue="home">
                        <TabsList className="grid w-full grid-cols-3 mb-10">
                            <TabsTrigger value="home">Home</TabsTrigger>
                            <TabsTrigger value="list">List</TabsTrigger>
                            <TabsTrigger value="bio">Bio</TabsTrigger>
                        </TabsList>
                        <TabsContent value="home">
                            <BlogTab posts={user.savedPosts} />
                        </TabsContent>
                        <TabsContent value="list">
                            <ListTab posts={user.savedPosts} />
                        </TabsContent>

                        <TabsContent value="bio">
                            <BioTab />
                        </TabsContent>
                    </Tabs>
                </div>
                <div className="flex-1 hidden lg:block">
                    <MyProfileSidebar user={user} />
                </div>
            </section>
        </main>
    );
}
