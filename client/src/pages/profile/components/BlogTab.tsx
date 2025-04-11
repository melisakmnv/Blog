import { getPosts } from "@/api/requests/post"
import { BlogCardSide } from "@/components/card/BlogCardSide"
import { IPost } from "@/interfaces/post.interface"
import { useQuery } from "@tanstack/react-query"


export const BlogTab = () => {

    const { data: posts } = useQuery<IPost[]>({
        queryFn: getPosts,
        queryKey: ["posts"]

    })

    return (
        <section className="w-full">
            <div className="flex">
                <div className="flex-2 flex flex-col justify-center gap-10">
                    {
                        posts?.map((post) => (
                            <BlogCardSide key={post._id} post={post} />
                        ))
                    }
                </div>
               
            </div>
        </section>
    )
}
