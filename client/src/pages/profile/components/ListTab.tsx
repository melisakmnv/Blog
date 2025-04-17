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
