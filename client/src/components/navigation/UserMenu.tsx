

import { useNavigate } from "react-router-dom"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "../ui/menubar"
import { IUserPayload } from "@/interfaces/user.interface";
import { toast } from "react-toastify";

interface UserMenuProps {
    logout: () => void;
    user: IUserPayload;
}

export const UserMenu = ({ logout, user }: UserMenuProps) => {

    const navigate = useNavigate();

    const handleLogout = async () => {
        navigate("/login");
        logout();
        toast.success("Logout successfully");
    };


    return (
        <>
            <Menubar>
                <MenubarMenu>
                    <MenubarTrigger className="focus:bg-none">
                        <Avatar className="size-10">
                            <AvatarImage className="object-cover" src={user.avatar} alt={`${user.firstname} ${user.lastname}'s Avatar`} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </MenubarTrigger>
                    <MenubarContent className="mr-16">
                        <MenubarItem inset onSelect={() => navigate(`/profile/me`)} >
                            Profile
                        </MenubarItem>
                        <MenubarItem inset >Library</MenubarItem>
                        <MenubarItem inset>Story</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem inset>Settings</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem onClick={handleLogout} inset className="text-red-500 hover:text-red-500">Logout</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
        </>
    )

}
