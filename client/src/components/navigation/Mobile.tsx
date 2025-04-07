
import { GiHamburgerMenu } from "react-icons/gi"
import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer"
import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { Logo } from "../Logo"
import { LinkItem } from "./LinkItem"


export const Mobile = () => {

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
        <Drawer>
            <DrawerTrigger asChild>
                <GiHamburgerMenu className="text-[#bba07f]" />
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader className="text-center">
                        <DrawerTitle>
                            <Logo className="text-4xl" />
                        </DrawerTitle>
                    </DrawerHeader>
                    <div className="flex flex-col items-center gap-5 mb-6">
                        {
                            routes.map((route, index) => (
                                <LinkItem key={index} link={route.link} label={route.label} />
                            ))
                        }
                        <Link to={"/login"}>
                            <Button>Login</Button>
                        </Link>
                    </div>
                    <DrawerFooter className="text-xs text-center text-gray-400 font-Poppins">
                        &copy; 2025 KMNV. All rights reserved.
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
