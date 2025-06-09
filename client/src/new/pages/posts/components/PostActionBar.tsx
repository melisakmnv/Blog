import { EditButton } from "@/components/btn/EditButton"
import { MoreButton } from "@/components/btn/MoreButton"

export const PostActionBar = () => {

    return (
        <div className="flex items-center gap-4">
            <EditButton />
            <MoreButton />
        </div>
    )
}