
import { useState } from "react"
import { Link } from "react-router-dom";

export const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);


    // text-[#ae7a72]
    return (
        <div className="w-full h-16 md:h-20 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-4 text-4xl font-bold logo">
                Story •
            </Link>

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
                    <Link to="/">Home</Link>
                    <Link to="/">Trending</Link>
                    <Link to="/">Most popular</Link>
                    <Link to="/">About</Link>
                    <Link to="/login">
                        <button className="py-2 px-4 rounded-3xl bg-neutral-700">Login</button>
                    </Link>
                </div>
            </div>
            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
                <Link to="/">Home</Link>
                <Link to="/">Trending</Link>
                <Link to="/">Most popular</Link>
                <Link to="/">About</Link>
            </div>
        </div>
    )
}
