import { IUserProfile } from "@/new/api/request/user";
import { Separator } from "@/old/components/ui/separator";
import { useParams } from "react-router-dom";

interface BioTabProps {
    user: IUserProfile;
}
export const BioTab = ({ user }: BioTabProps) => {

    // const followers = user.followers.length;
    // const followings = user.followings.length;

    const { username } = useParams()

    return (
        <div className="flex flex-col gap-8">

            {
                user.bio ? (
                    <p className="font-Karla font-extralight text-lg leading-[40px]">
                        {user.bio}
                    </p>
                ) : (
                    <div className="font-Karla font-extralight text-lg leading-[40px] border-dashed border p-10 flex items-center justify-center">
                        {
                            username ? (
                                <p>This user hasn't added a bio yet.</p>
                            ) : (
                                <p>
                                   You haven't added your bio yet.
                                </p>
                            )
                        }
                    </div>
                )
            }
            <Separator className="bg-secondary" />
            {/* <p className="text-sm text-neutral-600 hover:underline cursor-pointer">{followers} Follower{followers > 1 && "s"}&nbsp; · &nbsp;{followings} Following{followings > 1 && "s"}</p> */}
            <p className="text-sm text-neutral-600 hover:underline cursor-pointer">35K Followers&nbsp; · &nbsp;16K Followings</p>
        </div>
    )
}
