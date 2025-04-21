import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { IUserPayload } from "@/interfaces/user.interface"
import { Link } from "react-router-dom";
import { BiSolidEditAlt } from "react-icons/bi";
import { FollowButton } from "@/components/button/FollowButton";
import { useFollowUser } from "@/hooks/useUser";

interface ProfileSidebarProps {
    user: IUserPayload;
    isOwnProfile?: boolean;

}

export const MyProfileSidebar = ({ user }: ProfileSidebarProps) => {

    const { followUser } = useFollowUser()

    const handleFollow = (userId: string) => {
        followUser(userId)
    }

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
                        <p className="text-neutral-500 text-sm font-light">Software Engineer | Cat slave</p>
                    </div>
                </div>

                {/* FOLLOW BUTTONS or Edit button */}

                <div className="flex items-center gap-4">
                    <Link to={"/profile/me/settings"}>
                        <Button variant={"outline"}>Edit profile</Button>
                    </Link>
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
                                {/* <Button onClick={() => {}} variant="outline" className="text-sm">Unfollow</Button> */}
                                <FollowButton initialfollowed={true} variant={"outline"} onClick={() => handleFollow(person._id)} />
                            </li>
                        ))}
                    </ul>
                    <Link to={"/"} className="underline text-sm">see more to follow</Link>
                </div>
            </div>
        </aside>
    )
}
