import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IUserPayload } from "@/interfaces/user.interface"

import { FollowButton } from "@/components/button/FollowButton";
import { useFollowUser } from "@/hooks/user/useUserMutation";
import { useEffect, useMemo, useState } from "react";
import { useFetchUserFollowings } from "@/hooks/user/useUserQuery";
import { FollowingList } from "./settings/FollowingList";
import { useFetchMyProfile } from "@/hooks/useMe";
import { Separator } from "@/components/ui/separator";

interface ProfileSidebarProps {
    user: IUserPayload;
}

export const ProfileSidebar = ({ user }: ProfileSidebarProps) => {

    const { data: followings } = useFetchUserFollowings(user._id)
    const { data: me } = useFetchMyProfile()


    // const checkFollow = useMemo(() => {
    //     if (!me) return false;
    //     return me.followings.some((followed) => followed._id === user._id);
    // }, [me, user._id]);

    const checkFollow = useMemo(() => {
        if (!me) return false;
        return me.followings.some((followed) => followed._id === user._id);
      }, [me, user._id]);

    const initialCount = user.followers.length;
    const [count, setCount] = useState<number>(initialCount);
    const [followed, setFollowed] = useState<boolean>(checkFollow)

    const { mutationFollowUser, isLoading } = useFollowUser()

    // Able to follow

    console.log(followed)

    useEffect(() => {
        setFollowed(checkFollow);
    }, [checkFollow]);


    const handleFollow = () => {
        mutationFollowUser(user._id);
        setFollowed(prev => !prev);  // ← immediately flip the button follow state
        setCount(prev => (followed ? prev - 1 : prev + 1));
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
                            <p className="text-neutral-500 font-light">{count} {count > 1 ? 'Followers' : 'Follower'}</p>
                        </div>
                    </div>

                    <FollowButton isLoading={isLoading} variant={"outline"} onClick={handleFollow} initialfollowed={followed} />
                    <Separator className="bg-secondary" />
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
