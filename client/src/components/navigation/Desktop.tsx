import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { LinkItem } from "./LinkItem"


export const Desktop = () => {

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
        {
            link: "/",
            label: "About"
        },
    ]

    return (
        <div className="flex items-center gap-5">
            {
                routes.map((route, index) => (
                    <LinkItem key={index} link={route.link} label={route.label} />
                ))
            }
            <Link to={"/login"}>
                <Button>Login</Button>
            </Link>
        </div>
    )
}
