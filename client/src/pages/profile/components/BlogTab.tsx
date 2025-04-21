import { PostItemCard } from "@/components/card/PostItemCard";
import { IPost } from "@/interfaces/post.interface"
import { useParams } from "react-router-dom";




interface BlogTabProps {
    posts: IPost[];
}
export const BlogTab = ({ posts }: BlogTabProps) => {

    const { username } = useParams()

    return (
        <section className="w-full">
            <div className="flex">
                <div className="flex-2 flex flex-col justify-center gap-10">
                    {posts && posts.length > 0 ? (
                        posts.map((post) => (
                            <PostItemCard key={post._id} post={post} />
                        ))
                    ) : (
                        <div className="font-Karla font-extralight text-lg leading-[40px] border-dashed border p-10 flex items-center justify-center">
                            {
                                username ? (
                                    <p>This user hasn't written anything yet</p>
                                ) : (
                                    <p>
                                        Your saved stories will appear here. Find something inspiring and save it for later.
                                    </p>
                                )
                            }
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
