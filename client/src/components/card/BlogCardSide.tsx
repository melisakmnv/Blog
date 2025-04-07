import { useState } from 'react';

import { IPost } from '@/interfaces/post.interface'

import { formattedDate } from '@/lib/utils';

import { MdMoreHoriz } from "react-icons/md";
import { FaRegHeart, FaBookmark, FaRegBookmark, FaRegComment } from "react-icons/fa";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger, MenubarShortcut } from '@/components/ui/menubar';
import { Button } from '../ui/button';

interface BlogCardSideProps {
    post: IPost;
}
export const BlogCardSide = ({ post }: BlogCardSideProps) => {

    const [save, setSave] = useState(false)


    const handleSave = () => {
        setSave((prev: boolean) => !prev)
    }


    return (
        <Card className="w-[90%] border rounded-sm flex">
            <CardHeader className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <Avatar>
                        <AvatarImage src={post.avatar} alt="Publisher Avatar" />
                        <AvatarFallback>Publisher Avatar</AvatarFallback>
                    </Avatar>

                    <p className="text-sm text-neutral-500 font-Poppins truncate">{post.author}</p>
                </div>
                <div>
                    <p className="text-sm text-neutral-500 font-Poppins">{formattedDate(post.createdAt)}</p>
                </div>
            </CardHeader>

            <CardContent className="flex flex-col-reverse lg:flex-row justify-between gap-10">
                <div className='flex-2 flex flex-col gap-4'>
                    <CardTitle className="text-lg md:text-2xl font-Montserrat font-bold leading-tight text-neutral-800">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3 text-neutral-600 text-sm md:text-md">{post.description}</CardDescription>
                </div>
                <div className='flex-1'>
                    <img className="object-cover w-full" src={post.cover} alt="Post Cover" />
                </div>
            </CardContent>

            <CardFooter className="flex justify-between items-center">
                <div className='flex items-center gap-2'>
                    <Badge variant="outline" className="cursor-pointer rounded-full">{post.tag}</Badge>
                    <p className='text-sm text-neutral-500 hidden md:block'> • {post.readingTime}</p>
                    <div className="ml-2 md:ml-4 text-neutral-500 cursor-pointer">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <FaRegHeart />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>26 likes</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                    <div className="ml-2 md:ml-4 text-neutral-500 cursor-pointer">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <FaRegComment />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>26 comments</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                </div>
                <div className="flex items-center gap-2 md:gap-4">

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" onClick={handleSave}>
                                {save ? <FaBookmark /> : <FaRegBookmark />}
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Save</p>
                        </TooltipContent>
                    </Tooltip>

                    <Menubar>
                        <MenubarMenu>
                            <MenubarTrigger className='cursor-pointer'>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <MdMoreHoriz />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>More</p>
                                    </TooltipContent>
                                </Tooltip>
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
                </div>
            </CardFooter>
        </Card >
    )
}
