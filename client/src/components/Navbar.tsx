
import { Link } from "react-router-dom"
import { Logo } from "./Logo"


import { Mobile } from "./navigation/Mobile";
import { Desktop } from "./navigation/Desktop";


export const Navbar = () => {

    

    return (
        <div className="w-full h-16 md:h-20 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-4 text-4xl font-bold logo">
                <Logo />
            </Link>

            <div className="md:hidden">
                <Mobile />
            </div>
            <div className="hidden md:block">
                <Desktop />
            </div>

        </div>
    )
}
