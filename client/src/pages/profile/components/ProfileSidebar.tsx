import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { IUserPayload } from "@/interfaces/user.interface"
import { Link } from "react-router-dom";
import { BiSolidEditAlt } from "react-icons/bi";


interface ProfileSidebarProps {
    user: IUserPayload;
}


const peopleToFollow = [
    { name: 'Jane Doe', username: '@janedoe', avatar: 'https://randomuser.me/api/portraits/women/50.jpg', },
    { name: 'John Smith', username: '@johnsmith', avatar: 'https://randomuser.me/api/portraits/men/25.jpg', },
    { name: 'Jim Smith', username: '@jimsmith', avatar: 'https://randomuser.me/api/portraits/men/60.jpg', },
];
export const ProfileSidebar = ({ user }: ProfileSidebarProps) => {
    return (
        <aside className="sticky top-4 h-[calc(100vh-2rem)]">
            <div className="h-full overflow-y-auto p-4 space-y-6 bg-white rounded-2xl shadow-sm">
                {/* USER INFO */}

                <div className="">
                    <Avatar className="size-24">
                        <AvatarImage src={user.avatar} alt="Publisher Avatar" />
                        <AvatarFallback>Publisher Avatar</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-2 mt-4">
                        <h2 className="text-neutral-800 font-medium">{user.firstname} {user.lastname}</h2>
                        <p className="text-neutral-500 font-light">3.2K Followers</p>
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
                    <h2 className="text-lg font-semibold mb-2">People to Follow</h2>
                    <ul className="space-y-4 mb-2">
                        {peopleToFollow.map((person) => (
                            <li key={person.username} className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <Avatar>
                                        <AvatarImage src={person.avatar} alt="Publisher Avatar" />
                                        <AvatarFallback>Publisher Avatar</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-medium text-sm">{person.name}</p>
                                        <p className="text-xs text-gray-500">{person.username}</p>
                                    </div>
                                </div>
                                <Button variant={"outline"} className="text-sm">Follow</Button>
                            </li>
                        ))}
                    </ul>
                    <Link to={"/"} className="underline text-sm">see more to follow</Link>
                </div>

                {/* Story List */}

            </div>
        </aside>
    )
}
