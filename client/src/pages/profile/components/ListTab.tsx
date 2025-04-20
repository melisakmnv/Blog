
import { PostItemCard } from "@/components/card/PostItemCard";
import { IPost } from "@/interfaces/post.interface"


interface ListTabProps {
    posts: IPost[];
}
export const ListTab = ({ posts }: ListTabProps) => {
    return (
        <section className="w-full">
            <div className="flex">
                <div className="flex-2 flex flex-col justify-center gap-10">
                    {
                        posts.length ? (
                            posts.map((post) => (
                                <PostItemCard key={post._id} post={post} />
                            ))
                        ) : (
                            <div className="font-Karla font-extralight text-lg leading-[40px] border-dashed border p-10 flex items-center justify-center">
                                <p>
                                    Your list is empty. Start building it by saving a story you love!
                                </p>
                            </div>
                        )
                    }
                </div>

            </div>
        </section>
    )
}
