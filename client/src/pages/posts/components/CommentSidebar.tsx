import { Button } from '@/components/ui/button'
import { DrawerClose, DrawerContent, DrawerHeader, DrawerTitle } from '@/components/ui/drawer'
import { Separator } from '@/components/ui/separator'
import { IComment } from '@/interfaces/comment.interface'

import { IoClose } from "react-icons/io5";
import { CommentBlock } from './CommentBlock';
import { CommentInput } from './CommentInput';



interface CommentSidebarProps {
    comments: IComment[]
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onSubmit: () => void;
}

export const CommentSidebar = ({ comments, value, onChange, onSubmit }: CommentSidebarProps) => {
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

                    <CommentInput
                        value={value}
                        onChange={onChange}
                        onSubmit={onSubmit}

                    />

                    <div className="flex flex-col gap-4">
                        {comments.map((comment) => (
                            <CommentBlock key={comment._id} comment={comment} />
                        ))}
                    </div>
                </div>
            </div>
        </DrawerContent>
    )
}
