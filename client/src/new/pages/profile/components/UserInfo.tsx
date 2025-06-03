import { useMemo } from "react"

import useUserStore from "@/old/store/useUserStore"
import { IUserProfile } from "@/new/api/request/user"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { followUser } from "@/new/api/request/me"
import { toast } from "react-toastify"

interface UserInfoProps {
    user: IUserProfile
}
export const UserInfo = ({ user }: UserInfoProps) => {

    const { user: currentUser } = useUserStore()
    const queryClient = useQueryClient();

    const isCurrentUser = useMemo(() => currentUser?._id === user?._id, [currentUser?._id, user?._id])
    const isFollowing = useMemo(() => {
        if (!user?.followers || !currentUser?._id) return false;
        return user.followers.includes(currentUser._id);
    }, [user?.followers, currentUser?._id]);


    const { mutate, isPending } = useMutation({
        mutationFn: (userId: string) => followUser(userId),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["userProfile"] });
            queryClient.invalidateQueries({ queryKey: ["userFollowings"] });
            toast.success(data.message);
        },
        onError: (error: any) => {
            console.log(error.response?.data);
            toast.error(error?.response?.data?.message || "Something went wrong");
        },
    });

    const handleClick = (userId: string) => {
        mutate(userId);
    };

    return (
        <div>
            <div className="flex items-center justify-between">
                <Avatar className="size-24">
                    <AvatarImage className="object-cover" src={user.avatar} alt="Publisher Avatar" />
                    <AvatarFallback>Publisher Avatar</AvatarFallback>
                </Avatar>
                {
                    isCurrentUser ? (
                        <Button>Edit</Button>
                    ) : <FollowButton isFollowing={isFollowing} disabled={isPending} onClick={() => handleClick(user._id)} />
                }
            </div>
            <div className="flex flex-col gap-2 mt-4">
                <h2 className="text-neutral-800 font-semibold capitalize">{user.firstname} {user.lastname}</h2>
                <h3 className="text-neutral-800 text-sm font-medium">{user.pseudonym}</h3>
                <p className="text-neutral-500 text-[12px] font-normal">{user.tagline}</p>
            </div>
        </div>
    )
}


interface FollowButtonProps {
    isFollowing: boolean;
    disabled: boolean;
    onClick: () => void;
}
const FollowButton = ({ isFollowing, disabled, onClick }: FollowButtonProps) => {

    return (
        <Button
            onClick={onClick}
            disabled={disabled}
            className={isFollowing ? "font-Poppins border-2 border-primary bg-white text-primary font-normal hover:text-white hover:border-transparent" : ""}>
            {isFollowing ? "Following" : "Follow +"}
        </Button>
    )
}