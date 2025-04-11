import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { LinkItem } from "./LinkItem"
import useUserStore from "@/store/useUserStore";
import { UserMenu } from "./UserMenu";


export const Desktop = () => {

    const { user, logout } = useUserStore();




    // const { user, isAuthenticated } = useUserStore();



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
                routes.map((route, index) => (
                    <LinkItem key={index} link={route.link} label={route.label} />
                ))
            }
            {
                user ? (
                    <UserMenu logout={logout}/>
                ) : (
                    <Link to={"/login"}>
                        <Button>Login</Button>
                    </Link>
                )
            }
        </div>
    )
}
