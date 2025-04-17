import { ProfileSidebar } from "./components/ProfileSidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BlogTab } from "./components/BlogTab";
import { ListTab } from "./components/ListTab";
import { BioTab } from "./components/BioTab";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "@/api/requests/user";
import { getUserPosts } from "@/api/requests/post";
import useUserStore from "@/store/useUserStore";



export const UserProfile = () => {

    const isOwnProfile = false
    const { username } = useParams();
    const { user: currentUser } = useUserStore();

    const { data: profileUser, isLoading, isError } = useQuery({
        queryKey: ["userProfile", username],
        queryFn: () => getProfile(username!),
    })

    const { data: posts } = useQuery({
        queryKey: ["posts", username],
        queryFn: () => getUserPosts(username!),
    })


    if (isLoading) return <p>Loading...</p>;
    if (isError || !profileUser) return <p>User not found</p>;

    console.log(profileUser)

    const isFollowing = profileUser.followers.some(f => f._id === currentUser?._id);

    console.log(isFollowing)

    return (
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
                            {
                                posts && (
                                    <BlogTab posts={posts} />
                                )
                            }
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
                    <ProfileSidebar user={profileUser} isOwnProfile={isOwnProfile} isFollowing={isFollowing} />
                </div>
            </section>
        </main>
    );
}
