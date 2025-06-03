import { AvatarFallback } from "@radix-ui/react-avatar"
import { Avatar, AvatarImage } from "./ui/avatar"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card"
import { IUserPayload } from "@/old/interfaces/user.interface"
import { Link } from "react-router-dom"

interface UserAvatar2Props {
    user: IUserPayload;
}

export const UserAvatar2 = ({ user }: UserAvatar2Props) => {

    // No pseudonym
    // No tagline in IuserPayload

    // Receive user props :
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <div className="flex items-center gap-4">
                    <Link to={`/profile/${user.username}`}>
                        <Avatar className="size-10 cursor-pointer">
                            <AvatarImage className='object-cover' src={user.avatar} />
                            <AvatarFallback>VC</AvatarFallback>
                        </Avatar>
                    </Link>
                    <div>
                        <Link to={`/profile/${user.username}`} className="hover:underline">
                            <p className="text-sm capitalize">{user.firstname} {user.lastname}</p>
                        </Link>
                    </div>
                </div>
            </HoverCardTrigger>
            <HoverCardContent align="start" sideOffset={0} className="w-80">
                <div className="flex flex-col space-y-4 p-2">
                    <Avatar className="size-14">
                        <AvatarImage className='object-cover' src={user.avatar} />
                        <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-2">
                        <h4 className="text-sm font-semibold">{user.pseudonym}</h4>
                        <p className="text-sm">
                            {user.tagline}
                        </p>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}
