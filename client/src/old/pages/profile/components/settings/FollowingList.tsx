import { FollowButton } from "@/components/button/FollowButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useFetchMyProfile } from "@/hooks/useMe";

import { useFollowUser } from "@/hooks/user/useUserMutation";
import { IUserSummary } from "@/old/interfaces/user.interface"
import { Link } from "react-router-dom";


//=====================
//  FollowingList
//=====================
interface FollowingListProps {
    followings: IUserSummary[];
    userId: string;
}
export const FollowingList = ({ followings, userId }: FollowingListProps) => {

    const { data: currentUser } = useFetchMyProfile()
    const { followUser } = useFollowUser()

    const handleFollow = (userId: string) => {
        followUser(userId)
    }

    const isOwnProfile = currentUser?._id === userId;
    const noFollowingsMessage = isOwnProfile ? "Looks like this you haven't followed anyone yet." : "Looks like this user hasn't followed anyone yet."


    if (!followings.length) {
        return (
            <p className="text-neutral-500 text-sm font-light text-center">
                {noFollowingsMessage}
            </p>
        );
    }

    return (

        <div>
            {followings && followings.length > 0 ? (
                <div>
                    <h2 className="text-lg font-semibold mb-2">Followings</h2>
                    <ul className="space-y-4 mb-2">
                        {
                            isOwnProfile ? (
                                followings.map((person) => (
                                    <UserFollowingItem
                                        key={person._id}
                                        person={person}
                                        onFollow={handleFollow}
                                        isMe={currentUser.username === person.username}
                                    />
                                ))) : (

                                followings.map((person) => {

                                    const isFollowing = currentUser.followings.some(f => f._id === person._id);
                                    
                                    return (

                                        <FollowingItem
                                            key={person._id}
                                            person={person}
                                            onFollow={handleFollow}
                                            isFollowing={isFollowing!}
                                            isMe={currentUser.username === person.username}
                                        />
                                    
                                    )
                                }))
                        }
                    </ul>

                    {followings.length > 4 && (
                        <Link to={"/"} className="underline text-sm">see more to follow</Link>
                    )}
                </div>
            ) : (
                <div>
                    <p className="text-neutral-500 text-sm font-light text-center">
                        {noFollowingsMessage}
                    </p>
                </div>
            )}
        </div>
    )
}


// =====================
// UserFollowingItem (Logged-in user)
// =====================
interface UserFollowingItemProps {
    person: IUserSummary;
    onFollow: (userId: string) => void;
    isMe: boolean;
}

const UserFollowingItem = ({ person, onFollow, isMe }: UserFollowingItemProps) => {


    return (
        <li key={person._id} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Avatar>
                    <AvatarImage className="object-cover" src={person.avatar} alt="Publisher Avatar" />
                    <AvatarFallback>Publisher Avatar</AvatarFallback>
                </Avatar>
                <Link to={isMe ? "/profile/me" : `/profile/${person.username}`}>
                    <div>
                        <p className="font-medium text-sm">{person.firstname} {person.lastname}</p>
                        <p className="text-xs text-gray-500">{person.username}</p>
                    </div>
                </Link>
            </div>
            <FollowButton initialfollowed={true} variant={"outline"} onClick={() => onFollow(person._id)} />
        </li>
    )
}

// =====================
// NormalFollowingItem (Other users)
// =====================

interface FollowingItemProps {
    person: IUserSummary;
    onFollow: (userId: string) => void;
    isFollowing: boolean;
    isMe: boolean;
}

const FollowingItem = ({ person, onFollow, isFollowing, isMe }: FollowingItemProps) => {

    return (
        <li key={person._id} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Avatar>
                    <AvatarImage className="object-cover" src={person.avatar} alt="Publisher Avatar" />
                    <AvatarFallback>Publisher Avatar</AvatarFallback>
                </Avatar>
                <Link to={isMe ? "/profile/me" : `/profile/${person.username}`}>
                    <div>
                        <p className="font-medium text-sm">{person.firstname} {person.lastname}</p>
                        <p className="text-xs text-gray-500">{person.username}</p>
                    </div>
                </Link>
            </div>
            {
                !isMe && <FollowButton initialfollowed={isFollowing} variant={"outline"} onClick={() => onFollow(person._id)} />
            }
        </li>
    )
}
