import { IComment } from '@/old/interfaces/comment.interface'

import { IoClose } from "react-icons/io5";

import { CommentPreview } from './CommentPreview';

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { DrawerClose, DrawerContent, DrawerHeader, DrawerTitle } from '@/components/ui/drawer'
import { CommentCreateForm } from './CommentForm';
import useUserStore from '@/old/store/useUserStore';
import { Link } from 'react-router-dom';


interface CommentSidebarProps {
    comments: IComment[]
    postId: string
}

export const CommentSidebar = ({ comments, postId }: CommentSidebarProps) => {
    const { user } = useUserStore()
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

                    {user ? (
                        <CommentCreateForm postId={postId} />
                    ) : (
                        <p className="font-thin">
                            You need to{" "}
                            <Link to="/login" className="text-blue-600 hover:underline">
                                log in
                            </Link>{" "}
                            to leave a comment.
                        </p>
                    )}

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
