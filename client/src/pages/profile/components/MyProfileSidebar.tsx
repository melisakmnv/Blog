import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IUserPayload } from "@/interfaces/user.interface"

import { Separator } from "@/components/ui/separator";
import { useFetchUserFollowings } from "@/hooks/user/useUserQuery";
import { FollowingList } from "./settings/FollowingList";
import { EditButton } from "@/components/button/EditButton";

interface ProfileSidebarProps {
    user: IUserPayload;
}

export const MyProfileSidebar = ({ user }: ProfileSidebarProps) => {

    const { data: followings } = useFetchUserFollowings(user._id)

    return (
        <aside className="sticky top-4 h-[calc(100vh-10rem)]">
            <div className="h-full overflow-y-auto p-4 bg-white rounded-2xl shadow-sm flex flex-col">
                <div className="space-y-6 flex-1">

                    <div>
                        <Avatar className="size-24">
                            <AvatarImage className="object-cover" src={user.avatar} alt="Publisher Avatar" />
                            <AvatarFallback>Publisher Avatar</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col gap-2 mt-4">
                            <h2 className="text-neutral-800 font-medium">{user.firstname} {user.lastname}</h2>
                            <p className="text-neutral-500 text-sm font-light">{user.bio}</p>
                        </div>
                    </div>

                    <EditButton link={"/profile/me/settings"} title="Edit Profil" icon />
                    <FollowingList followings={followings} userId={user._id} />
                </div>

                <Separator className="bg-accent" />

                <div className="text-xs text-gray-300 pt-4 mt-auto font-Karla">
                    <p>Crafted with curiosity and caffeine.</p>
                    <p>© {new Date().getFullYear()} Melisakmnv. All rights reserved.</p>
                </div>
            </div>
        </aside>
    )
}
