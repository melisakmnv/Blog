
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import useUserStore from "@/old/store/useUserStore"

import { commentSchema, CommentFormSchema } from "@/old/schema/comment.schema"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { IComment } from "@/old/interfaces/comment.interface"
import { useCreateComment, useEditComment } from "@/old/hooks/useComment"


interface CommentFormProps {
    postId: string;
}

export const CommentCreateForm = ({ postId }: CommentFormProps) => {

    const { user } = useUserStore()

    const { createComment, isLoading } = useCreateComment()

    const form = useForm<CommentFormSchema>({
        resolver: zodResolver(commentSchema),
        defaultValues: {
            content: ""
        }
    })

    const onSubmit = (values: CommentFormSchema) => {
        createComment({ postId: postId, content: values });
        form.reset()
    };


    return (
        <div className="flex gap-3 mb-6 p-4 md:p-0">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                    <FormField
                        control={form.control}
                        name="content"
                        render={({ field }) => (
                            <FormItem className="flex flex-col gap-4 w-full mb-4">
                                <FormLabel>
                                    <div className="flex items-center gap-4">
                                        <Avatar className="size-14">
                                            <AvatarImage className="object-cover" src={user?.avatar} alt={`${user?.firstname} ${user?.lastname}'s avatar`} />
                                            <AvatarFallback>Publisher Avatar</AvatarFallback>
                                        </Avatar>
                                        <h2 className="text-[#bba07f] font-normal text-base capitalize">{user?.firstname} {user?.lastname}</h2>
                                    </div>
                                </FormLabel>
                                <FormControl>
                                    <Textarea
                                        className="w-full p-3 border border-neutral-300 rounded-lg resize-none focus:outline-none"
                                        placeholder="What do you think about the blog?" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <div className="flex justify-end">
                        <div className="flex gap-4">
                            <Button disabled={isLoading} variant={"secondary"} onClick={() => form.reset()} type="button">Cancel</Button>
                            <Button disabled={isLoading} type="submit">Respond</Button>
                        </div>
                    </div>
                </form>
            </Form>
        </div>
    )
}



interface CommentEditFormProps {
    comment: IComment;
    handleToggle: (prev: boolean) => void;
}
export const CommentEditForm = ({ comment, handleToggle }: CommentEditFormProps) => {

    const { editComment, isLoading } = useEditComment()
    const form = useForm<CommentFormSchema>({
        resolver: zodResolver(commentSchema),
        defaultValues: {
            content: comment.content
        }
    })

    const onSubmit = (values: CommentFormSchema) => {
        editComment({ commentId: comment._id, content: values });
        form.reset()
        handleToggle(false)
    };

    return (

        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                        <FormItem className="flex flex-col gap-4 w-full mb-4">
                            <FormControl>
                                <Textarea
                                    className="w-full p-3 border border-neutral-300 rounded-lg resize-none focus:outline-none"
                                    placeholder="What do you think about the blog?" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <div className="flex justify-end">
                    <div className="flex gap-4">
                        <Button disabled={isLoading} variant={"secondary"} onClick={() => handleToggle(false)} type="button">Cancel</Button>
                        <Button disabled={isLoading} type="submit">Edit</Button>
                    </div>
                </div>
            </form>
        </Form>
    )
}