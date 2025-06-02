import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IUserPayload } from "@/old/interfaces/user.interface"

import useUserStore from "@/old/store/useUserStore";
import { FollowButton } from "@/components/button/FollowButton";
import { useFollowUser } from "@/hooks/user/useUserMutation";
import { useState } from "react";
import { useFetchUserFollowings } from "@/hooks/user/useUserQuery";
import { FollowingList } from "./settings/FollowingList";

interface ProfileSidebarProps {
    user: IUserPayload;
}

export const ProfileSidebar = ({ user }: ProfileSidebarProps) => {

    const { user: currentUser } = useUserStore();
    const { data: followings } = useFetchUserFollowings(user._id)
    const { followUser } = useFollowUser()

    const [isFollowing, setIsFollowing] = useState(() =>
        user.followers.some(f => f._id === currentUser?._id)
    );

    const [countFollow, setCountFollow] = useState(user.followers.length);
    
    console.log(isFollowing)

    const handleFollow = () => {
        const newFollowState = !isFollowing;

        // Update local UI immediately (optimistic update)
        setIsFollowing(newFollowState);
        setCountFollow(prev => newFollowState ? prev + 1 : Math.max(prev - 1, 0));
        followUser(user._id);
    };

    return (
        <aside className="sticky top-4 h-[calc(100vh-10rem)]">
            <div className="h-full flex flex-col justify-between bg-white rounded-2xl shadow-sm p-4">
                <div className="overflow-y-auto space-y-6">
                    {/* USER INFO */}
                    <div>
                        <Avatar className="size-24">
                            <AvatarImage className="object-cover" src={user.avatar} alt="Publisher Avatar" />
                            <AvatarFallback>Publisher Avatar</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col gap-2 mt-4">
                            <h2 className="text-neutral-800 font-semibold">{user.firstname} {user.lastname}</h2>
                            <h3 className="text-neutral-800 text-sm font-medium">{user.pseudonym}</h3>
                            <p className="text-neutral-500 text-[12px] font-normal">{user.tagline}</p>
                            <p className="text-neutral-500 font-light">{countFollow} {countFollow > 1 ? 'Followers' : 'Follower'}</p>
                        </div>
                    </div>

                    <FollowButton variant={"outline"} onClick={handleFollow} initialfollowed={isFollowing} />
                    <FollowingList followings={followings} userId={user._id} />
                </div>

                {/* FOOTER */}
                <div className="text-xs text-gray-300 font-Karla mt-6 text-center">
                    <p>Crafted with curiosity and caffeine.</p>
                    <p>© {new Date().getFullYear()} Melisakmnv. All rights reserved.</p>
                </div>
            </div>
        </aside>
    )
}
