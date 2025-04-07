import { BlogCard } from "@/components/card/BlogCard"
import { Header } from "@/components/home/Header"
import { NewestPost } from "@/components/home/NewestPost"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { FaArrowUp } from "react-icons/fa";



export const Home = () => {
    return (
        <main className="flex flex-col gap-6 md:gap-20">
            <Header/>
            <section className="flex flex-col gap-4">
                <h2 className="font-Montserrat font-bold text-xl">Newest post</h2>
                <NewestPost />
            </section>
            <section className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <h2 className="font-Montserrat font-bold text-xl">Featured Posts</h2>
                    <Link to="/posts" className="">
                        <Button className="hidden md:block">See all posts</Button>
                        <div className="border px-3 py-2 rounded-md md:hidden">
                            <FaArrowUp className=" transform rotate-45" />
                        </div>
                    </Link>
                </div>


                {/* xl:grid-cols-5 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
            </section>
        </main>
    )
}
