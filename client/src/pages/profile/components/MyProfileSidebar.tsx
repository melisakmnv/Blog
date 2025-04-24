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

    console.log(user)

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
                            <h2 className="text-neutral-800 font-semibold">{user.firstname} {user.lastname}</h2>
                            <h3 className="text-neutral-800 text-sm font-medium">{user.pseudonym}</h3>
                            <p className="text-neutral-500 text-[12px] font-normal">{user.tagline}</p>
                        </div>
                    </div>

                    <EditButton link={"/profile/me/settings"} title="Edit Profil" icon />
                    <FollowingList followings={followings} userId={user._id} />
                </div>

                <Separator className="bg-secondary" />

                <div className="text-xs text-gray-300 pt-4 mt-auto font-Karla">
                    <p>Crafted with curiosity and caffeine.</p>
                    <p>© {new Date().getFullYear()} Melisakmnv. All rights reserved.</p>
                </div>
            </div>
        </aside>
    )
}
