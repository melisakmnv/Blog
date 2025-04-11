import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { LinkItem } from "./LinkItem"
import useUserStore from "@/store/useUserStore";
import { UserMenu } from "./UserMenu";

import { BiSolidEditAlt, BiBell } from "react-icons/bi";


export const Desktop = () => {

    const { user, logout } = useUserStore();

    const routes = [
        {
            link: "/",
            label: "Home"
        },
        {
            link: "/",
            label: "Trending"
        },
        {
            link: "/",
            label: "Most popular"
        },
    ]



    return (
        <div className="flex items-center gap-5">
            {
                user ? (
                    <>
                        <Link to="/">
                            <div className="flex items-center gap-2 font-Karla uppercase font-light text-neutral-500 border-b border-transparent transition-all ease-in-out duration-300 hover:text-neutral-800">
                                <BiSolidEditAlt className="size-6" />
                                <p>Write</p>
                            </div>

                        </Link>
                        <Button variant={"ghost"} size={"icon"}>
                            <BiBell className="size-6 text-neutral-500 font-light" />
                        </Button>
                        <UserMenu logout={logout} user={user} />
                    </>
                ) : (
                    <>

                        {
                            routes.map((route, index) => (
                                <LinkItem key={index} link={route.link} label={route.label} />
                            ))
                        }
                        <Link to={"/login"}>
                            <Button>Login</Button>
                        </Link>

                    </>
                )
            }
        </div>
    )
}
