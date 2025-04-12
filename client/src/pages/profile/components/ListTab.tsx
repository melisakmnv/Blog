import { BlogCardSide } from "@/components/card/BlogCardSide"



const posts: any[] = []
export const ListTab = () => {
    return (
        <section className="w-full">
            <div className="flex">
                <div className="flex-2 flex flex-col justify-center gap-10">
                    {
                        posts.length ? (
                            posts.map((post) => (
                                <BlogCardSide key={post._id} post={post} />
                            ))
                        ) : (
                            <div>
                                <p className="font-Karla font-extralight text-xl leading-[40px]"> You have no list</p>
                            </div>
                        )
                    }
                </div>

            </div>
        </section>
    )
}
