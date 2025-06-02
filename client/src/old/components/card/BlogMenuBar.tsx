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


export interface MenuAction {
    label: string
    onClick?: () => void
    danger?: boolean
    separatorBefore?: boolean
}

interface OptionsMenuProps {
    actions: MenuAction[]
}

export const OptionsMenu = ({ actions }: OptionsMenuProps) => {
    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger className="cursor-pointer hover:bg-accent">
                    <MoreButton />
                </MenubarTrigger>
                <MenubarContent>
                    {actions.map((action, index) => (
                        <div key={index}>
                            {action.separatorBefore && <MenubarSeparator />}
                            <MenubarItem
                                onClick={action.onClick}
                                className={action.danger ? "text-red-600 hover:text-red-600" : ""}
                            >
                                {action.label}
                            </MenubarItem>
                        </div>
                    ))}
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    )
}