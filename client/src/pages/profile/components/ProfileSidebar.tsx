import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { IUserPayload } from "@/interfaces/user.interface"
import { Link } from "react-router-dom";


import useUserStore from "@/store/useUserStore";
import { FollowButton } from "@/components/button/FollowButton";
import { useFollowUser } from "@/hooks/useUser";
import { useState } from "react";

interface ProfileSidebarProps {
    user: IUserPayload;
}

export const ProfileSidebar = ({ user }: ProfileSidebarProps) => {
    const { user: currentUser } = useUserStore();
    const { followUser } = useFollowUser()
    const [countFollow, setCountFollow] = useState(user.followers.length)

    // const isFollowing = user.followers.map(f => f._id).includes(currentUser?._id!)
    const isFollowing = user.followers.some(f => f._id === currentUser?._id)


    const handleFollow = () => {
        setCountFollow((prev) => (isFollowing ? prev - 1 : prev + 1))
        followUser(user._id)
    }



    console.log(currentUser)

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
                        <p className="text-neutral-500 font-light">{countFollow} {countFollow > 1 ? 'Followers' : 'Follower'} </p>
                        <p className="text-neutral-500 text-sm font-light">Software Engineer | Cat slave</p>
                    </div>
                </div>

                {/* FOLLOW BUTTONS or Edit button */}

                <div className="flex items-center gap-4">
                    <FollowButton variant={"outline"} onClick={handleFollow} initialfollowed={isFollowing!} />
                </div>

                {/* People to Follow */}
                <div>
                    <h2 className="text-lg font-semibold mb-2">Following</h2>
                    <ul className="space-y-4 mb-2">

                        {user.followings.map((person, index) => {
                            const isMe = person._id === currentUser?._id;
                            const iFollow = currentUser?.followings.some(f => f._id === person._id);

                            return (
                                <li key={index} className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <Avatar>
                                            <AvatarImage className="object-cover" src={person.avatar} alt="Avatar" />
                                            <AvatarFallback>Avatar</AvatarFallback>
                                        </Avatar>
                                        <Link to={`/profile/${person.username}`}>
                                            <div>
                                                <p className="font-medium text-sm">{person.firstname} {person.lastname}</p>
                                                <p className="text-xs text-gray-500">@{person.username}</p>
                                            </div>
                                        </Link>
                                    </div>

                                    {!isMe && (
                                        iFollow ? (
                                            <Button variant="outline" className="text-sm">Unfollow</Button>
                                        ) : (
                                            <Button variant="default" className="text-sm">Follow</Button>
                                        )
                                    )}
                                </li>
                            );
                        })}


                    </ul>
                    <Link to={"/"} className="underline text-sm">see more to follow</Link>
                </div>

                {/* Story List */}

            </div>
        </aside>
    )
}
