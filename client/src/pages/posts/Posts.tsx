import { useFetchPosts } from "@/hooks/usePost"

import { PostSidebar } from "@/components/posts/PostSidebar"
import { PostItemCard } from "@/components/card/PostItemCard";


export const Posts = () => {

    const { data: posts } = useFetchPosts();
	console.log('posts: ', posts);

    return (
        <main>
            {/* FILTER BOX */}
            <section>
                <h2 className="font-Montserrat font-bold text-xl">Featured Posts</h2>
                <div className="flex gap-10">
                    <div className="flex-2 flex flex-col items-center justify-center gap-10">
                        {
                            posts.map((post) => {
                                return(
                                    <PostItemCard post={post} key={post._id} />
                                )
                            })
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
