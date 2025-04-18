import { IComment } from '@/interfaces/comment.interface'

import { IoClose } from "react-icons/io5";

import { CommentPreview } from './CommentPreview';

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { DrawerClose, DrawerContent, DrawerHeader, DrawerTitle } from '@/components/ui/drawer'
import { CommentForm } from './CommentForm';


interface CommentSidebarProps {
    comments: IComment[]
    postId: string
}

export const CommentSidebar = ({ comments, postId }: CommentSidebarProps) => {
    return (
        <DrawerContent>
            <div className="h-full overflow-y-auto">
                <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                        <div className='flex justify-between items-center'>
                            <DrawerTitle className='text-xl font-Montserrat'>Comments ({comments.length})</DrawerTitle>
                            <DrawerClose asChild>
                                <Button variant="ghost" size={"icon"}>
                                    <IoClose className='size-6' />
                                </Button>
                            </DrawerClose>
                        </div>
                        <Separator className="my-4 bg-border" />
                    </DrawerHeader>

                    <CommentForm postId={postId} />

                    <div className="flex flex-col gap-4 p-4 md:p-0 md:mb-10">
                        {comments.map((comment) => (
                            <CommentPreview key={comment._id} comment={comment} />
                        ))}
                    </div>
                </div>
            </div>
        </DrawerContent>
    )
}
