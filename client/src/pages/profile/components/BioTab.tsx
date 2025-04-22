import { Separator } from "@/components/ui/separator"
import { IUserPayload } from "@/interfaces/user.interface"


interface BioTabProps {
    user: IUserPayload;
}
export const BioTab = ({ user }: BioTabProps) => {

    const followers = user.followers.length;
    const followings = user.followings.length;

    return (
        <div className="flex flex-col gap-8">
            <p className="font-Karla font-extralight text-lg leading-[40px]">
                {user.bio}
            </p>
            <Separator className="bg-accent" />
            {/*  <p>{initialCount} like{initialCount > 1 && "s"} </p> */}
            <p className="text-sm text-neutral-600 hover:underline cursor-pointer">{followers} Follower{followers > 1 && "s"}&nbsp; · &nbsp;{followings} Following{followings > 1 && "s"}</p>
        </div>
    )
}
