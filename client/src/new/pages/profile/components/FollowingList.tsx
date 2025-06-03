import { IUserProfile } from "@/new/api/request/user"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

interface FollowingListProps {
    followings: IUserProfile[];
}
export const FollowingList = ({ followings }: FollowingListProps) => {
    const MAX_FOLLOWER_PREVIEW = 4;

    if (!followings.length) return (
        <p>No followings</p>
    )

    return (
        <div className="w-fit">
            <h2 className="text-neutral-800 font-semibold mb-4">Followings</h2>
            <div className="flex flex-col gap-2">
                {followings?.slice(0, MAX_FOLLOWER_PREVIEW).map((following) => (
                    <div key={following._id} >
                        <FollowingItem user={following} />
                    </div>
                ))}
            </div>
            <h3 className="hover:underline cursor-pointer text-neutral-500 text-[14px] font-normal mt-4 ">See all ({followings.length})</h3>
        </div>
    )
}


interface FollowingItemProps {
    user: IUserProfile;
}
const FollowingItem = ({ user }: FollowingItemProps) => {
    return (
        <Link to={`/profile/${user.username}`}>
            <div className="flex items-center gap-2">
                <Avatar className="size-8">
                    <AvatarImage className="object-cover" src={user.avatar} alt={user.username} />
                    <AvatarFallback>{user.username}</AvatarFallback>
                </Avatar>
                <div className="hover:underline">
                    <p className="text-neutral-500 text-[14px] font-normal capitalize">{user.firstname} {user.lastname}</p>
                </div>
            </div>
        </Link>
    )
}