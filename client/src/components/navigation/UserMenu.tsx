

import { useNavigate } from "react-router-dom"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "../ui/menubar"

interface UserMenuProps {
    logout : () => void;
}

export const UserMenu = ({ logout }: UserMenuProps) => {

    const navigate = useNavigate();

    return (
        <>
            <Menubar>
                <MenubarMenu>
                    <MenubarTrigger className="focus:bg-none">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </MenubarTrigger>
                    <MenubarContent className="mr-16">
                        <MenubarItem inset onSelect={() => navigate('/profile')} >
                            Profile
                        </MenubarItem>
                        <MenubarItem inset >Library</MenubarItem>
                        <MenubarItem inset>Story</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem inset>Settings</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem onClick={logout} inset className="text-red-500 hover:text-red-500">Logout</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
        </>
    )

}
