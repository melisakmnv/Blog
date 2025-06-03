import { useFetchMyPosts, useFetchMySavedLists } from "@/hooks/useMe"
import { PostsList } from "./PostList"
import { useParams } from "react-router-dom"

export const UserPosts = ({ userId }: { userId: string }) => {

    const { data: posts } = useFetchMyPosts(userId)
    const { username } = useParams()

    return (
        <div>
            {posts.length > 0 ? (
                <PostsList posts={posts} />
            ) : (
                <div className="font-Karla font-extralight text-lg leading-[40px] border-dashed border p-10 flex items-center justify-center">
                    {
                        username ? (
                            <p>This user hasn't written anything yet</p>
                        ) : (
                            <p>
                                You haven't written any story yet
                            </p>
                        )
                    }
                </div>
            )}
        </div>
    )
}



export const UserSavedPosts = () => {

    const { data: posts } = useFetchMySavedLists()

    return (
        <div>
            {posts.length > 0 ? (
                <PostsList posts={posts} />
            ) : (
                <div className="font-Karla font-extralight text-lg leading-[40px] border-dashed border p-10 flex items-center justify-center">
                    <p>
                        Your saved stories will appear here. Find something inspiring and save it for later.
                    </p>
                </div>
            )}
        </div>
    )
}
