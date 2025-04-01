import { useState } from "react"

export const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className="w-full h-16 md:h-20 flex items-center justify-between">
            {/* LOGO */}
            <div className="flex items-center gap-4 text-2xl font-bold">
                LOGO
            </div>
            {/* MOBILE MENU */}
            <div className="md:hidden">
                <div
                    className="cursor-pointer text-2xl"
                    onClick={() => setOpenMenu((prev: boolean) => !prev)}
                >
                    {openMenu ? "X" : "M"}
                </div>

                {/* MOBILE LINK LIST */}
                <div className={`w-full h-[calc(100vh-4rem)] flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${openMenu ? "-right-0" : "-right-[100%]"}`}>
                    <a href="/">Home</a>
                    <a href="/">Trending</a>
                    <a href="/">Most popular</a>
                    <a href="/">About</a>
                    <a href="/">
                        <button className="py-2 px-4 rounded-3xl bg-neutral-700">Login</button>
                    </a>
                </div>
            </div>
            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
                <a href="/">Home</a>
                <a href="/">Trending</a>
                <a href="/">Most popular</a>
                <a href="/">About</a>
                <a href="/">
                    <button className="py-2 px-4 rounded-3xl bg-neutral-700">Login</button>
                </a>
            </div>
        </div>
    )
}
