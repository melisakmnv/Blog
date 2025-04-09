
import { getPosts } from "@/api/requests/post"
import { BlogCardSide } from "@/components/card/BlogCardSide"
import { PostSidebar } from "@/components/posts/PostSidebar"
import { IPost } from "@/interfaces/post.interface"



import { useQuery } from "@tanstack/react-query"




export const Posts = () => {

    const { data: posts, isLoading } = useQuery<IPost[]>({
        queryFn: getPosts,
        queryKey: ["posts"]

    })

    if (isLoading) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <main>
            {/* FILTER BOX */}
            <section>
                <h2 className="font-Montserrat font-bold text-xl">Featured Posts</h2>
                <div className="flex">
                    <div className="flex-2 flex flex-col items-center justify-center gap-10">
                        {
                            posts?.map((post) => (
                                <BlogCardSide key={post._id} post={post} />
                            ))
                        }
                    </div>
                    <div className="flex-1 hidden lg:block">
                        <PostSidebar />
                    </div>
                </div>
            </section>
        </main>
    )
}
