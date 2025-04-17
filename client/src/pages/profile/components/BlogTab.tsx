import { BlogCardSide } from "@/components/card/BlogCardSide"
import { IPost } from "@/interfaces/post.interface"
import { IUserPayload } from "@/interfaces/user.interface";



interface BlogTabProps {
    posts: IPost[];
    currentUser : IUserPayload;
}
export const BlogTab = ({ posts, currentUser }: BlogTabProps) => {

    return (
        <section className="w-full">
            <div className="flex">
                <div className="flex-2 flex flex-col justify-center gap-10">
                    {posts && posts.length > 0 ? (
                        posts.map((post) => (
                            <BlogCardSide key={post._id} post={post} currentUser={currentUser} />
                        ))
                    ) : (
                        <div className="font-Karla font-extralight text-lg leading-[40px] border-dashed border p-10 flex items-center justify-center">
                            <p>
                                Your saved stories will appear here. Find something inspiring and save it for later.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
