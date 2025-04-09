import { MoreButton } from "../button/MoreButton"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "../ui/menubar"


export const BlogMenuBar = () => {
    return (

        <Menubar>
            <MenubarMenu>
                <MenubarTrigger className='cursor-pointer'>
                    <MoreButton />
                </MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        Follow author
                    </MenubarItem>
                    {/* <MenubarSeparator /> */}
                    <MenubarItem>
                        Mute author
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem className='text-red-600'>
                        Report story
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    )
}
