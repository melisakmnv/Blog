import { IUserProfile } from "@/new/api/request/user"
import { Avatar, AvatarFallback, AvatarImage } from "@/old/components/ui/avatar"
import { Button } from "@/old/components/ui/button"

interface UserInfoProps {
    user: IUserProfile
}
export const UserInfo = ({ user }: UserInfoProps) => {
    return (
        <div>
            <div className="flex items-center justify-between">
                <Avatar className="size-24">
                    <AvatarImage className="object-cover" src={user.avatar} alt="Publisher Avatar" />
                    <AvatarFallback>Publisher Avatar</AvatarFallback>
                </Avatar>
                <Button>Follow</Button>
            </div>
            <div className="flex flex-col gap-2 mt-4">
                <h2 className="text-neutral-800 font-semibold capitalize">{user.firstname} {user.lastname}</h2>
                <h3 className="text-neutral-800 text-sm font-medium">{user.pseudonym}</h3>
                <p className="text-neutral-500 text-[12px] font-normal">{user.tagline}</p>
            </div>
        </div>
    )
}
