import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { IUserPayload } from "@/interfaces/user.interface"
import { Link } from "react-router-dom";
import { BiSolidEditAlt } from "react-icons/bi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { unFollowUser } from "@/api/requests/user";
import { toast } from "react-toastify";


interface ProfileSidebarProps {
    user: IUserPayload;
    isOwnProfile?: boolean;

}

export const MyProfileSidebar = ({ user }: ProfileSidebarProps) => {

    // const followers = user.followers.length

    // const queryClient = useQueryClient();
    // const unFollowMutation = useMutation({
    //     mutationFn: (username: string) => unFollowUser(username),
    //     onSuccess: (data, username) => {
    //         // Update myProfile cache to remove the unfollowed user
    //         queryClient.setQueryData(["myProfile"], (oldData: IUserPayload | undefined) => {
    //             if (!oldData) return oldData;

    //             return {
    //                 ...oldData,
    //                 followings: oldData.followings.filter(f => f.username !== username),
    //             };
    //         });

    //         toast.success(data.message);
    //     },
    //     onError: (error: any) => {
    //         console.log(error.response?.data)
    //         toast.error(error?.response?.data?.message || "Something went wrong");
    //     },
    // })

    // const handleUnFollow = (username: string) => {

    //     console.log(username)
    //     unFollowMutation.mutate(username);
    // }


    // Fetch following users

    console.log(user)

    return (
        <aside className="sticky top-4 h-[calc(100vh-2rem)]">
            <div className="h-full overflow-y-auto p-4 space-y-6 bg-white rounded-2xl shadow-sm">
                {/* USER INFO */}

                <div className="">
                    <Avatar className="size-24">
                        <AvatarImage className="object-cover" src={user.avatar} alt="Publisher Avatar" />
                        <AvatarFallback>Publisher Avatar</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-2 mt-4">
                        <h2 className="text-neutral-800 font-medium">{user.firstname} {user.lastname}</h2>
                        {/* <p className="text-neutral-500 font-light">{followers} {followers > 1 ? 'Followers' : 'Follower'} </p> */}
                        <p className="text-neutral-500 text-sm font-light">Software Engineer | Cat slave</p>
                    </div>
                </div>

                {/* FOLLOW BUTTONS or Edit button */}

                <div className="flex items-center gap-4">
                    <Button variant={"outline"}>Edit profile</Button>
                    <BiSolidEditAlt className="text-2xl" />
                </div>

                {/* People to Follow */}
                <div>
                    <h2 className="text-lg font-semibold mb-2">Following</h2>
                    <ul className="space-y-4 mb-2">
                        {user.followings.map((person, index) => (
                            <li key={index} className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <Avatar>
                                        <AvatarImage className="object-cover" src={person.avatar} alt="Publisher Avatar" />
                                        <AvatarFallback>Publisher Avatar</AvatarFallback>
                                    </Avatar>
                                    <Link to={`/profile/${person.username}`}>
                                        <div>
                                            <p className="font-medium text-sm">{person.firstname} {person.lastname}</p>
                                            <p className="text-xs text-gray-500">{person.username}</p>
                                        </div>
                                    </Link>
                                </div>
                                {/* <Button onClick={() => handleUnFollow(person.username)} variant="outline" className="text-sm">Unfollow</Button> */}
                            </li>
                        ))}
                    </ul>
                    <Link to={"/"} className="underline text-sm">see more to follow</Link>
                </div>
            </div>
        </aside>
    )
}
