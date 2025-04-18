import { Button } from '@/components/ui/button'
import { DrawerClose, DrawerContent, DrawerHeader, DrawerTitle } from '@/components/ui/drawer'
import { Separator } from '@/components/ui/separator'
import { IComment } from '@/interfaces/comment.interface'

import { IoClose } from "react-icons/io5";
import { CommentBlock } from './CommentBlock';




interface CommentSidebarProps {
    comments: IComment[]
    // value: string;
    // onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    // onSubmit: () => void;
}

export const CommentSidebar = ({ comments }: CommentSidebarProps) => {
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

                    {/* <CommentInput
                        value={value}
                        onChange={onChange}
                        onSubmit={onSubmit}

                    /> */}

                    <div className="flex flex-col gap-4 p-4 md:p-0">
                        {comments.map((comment) => (
                            <CommentBlock key={comment._id} comment={comment} />
                        ))}
                    </div>
                </div>
            </div>
        </DrawerContent>
    )
}
