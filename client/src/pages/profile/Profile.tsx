import useUserStore from "@/store/useUserStore";
import { ProfileSidebar } from "./components/ProfileSidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BlogTab } from "./components/BlogTab";
import { ListTab } from "./components/ListTab";
import { BioTab } from "./components/BioTab";



export const Profile = () => {

    const { user } = useUserStore();


    return (
        <main>
            <section className="flex">
                <div className="flex-2 px-20">
                    <h1 className="text-5xl font-semiBold font-Poppins text-neutral-800 my-10">{user?.firstname} {user?.lastname}</h1>
                    <Tabs defaultValue="home">
                        <TabsList className="grid w-full grid-cols-3 mb-10">
                            <TabsTrigger value="home">Home</TabsTrigger>
                            <TabsTrigger value="list">List</TabsTrigger>
                            <TabsTrigger value="bio">Bio</TabsTrigger>
                        </TabsList>
                        <TabsContent value="home">
                            <BlogTab />
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
                    {
                        user && <ProfileSidebar user={user} />
                    }
                </div>
            </section>
        </main>
    );
}
