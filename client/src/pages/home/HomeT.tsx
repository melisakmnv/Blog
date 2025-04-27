import { Header } from "@/components/home/Header"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

import { FaArrowUp } from "react-icons/fa";
import { Suspense } from "react";

import { FeaturedPosts } from "./components/FeaturedPosts";
import { FeaturedPostSkeletons } from "@/components/skeleton/Skeletons";


export const HomeT = () => {
    return (
        <main className="flex flex-col gap-6 md:gap-20">
            <Header />
            <section className="flex flex-col gap-4">
                <h2 className="font-Montserrat font-bold text-xl">Newest post</h2>
                {/* <NewestPost /> */}
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

                <div>
                    <Suspense fallback={<FeaturedPostSkeletons />}>
                        <FeaturedPosts />
                    </Suspense>
                </div>
            </section>
        </main>
    )
}
