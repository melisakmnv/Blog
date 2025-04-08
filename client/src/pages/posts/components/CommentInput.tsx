import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"


interface CommentInputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onSubmit: () => void;
}
export const CommentInput = ({ value, onChange, onSubmit }: CommentInputProps) => {
    return (
        <div className="flex gap-3 mb-6">
            <Avatar>
                <AvatarImage src="" alt="Your Avatar" />
                <AvatarFallback>C</AvatarFallback>
            </Avatar>
            <div className="flex-1">
                <textarea
                    value={value}
                    onChange={onChange}
                    rows={3}
                    placeholder="Write your comment..."
                    className="w-full p-3 border border-neutral-300 rounded-lg resize-none focus:outline-none"
                />
                <div className="flex justify-end mt-2">
                    <Button onClick={onSubmit}>Post Comment</Button>
                </div>
            </div>
        </div>
    )
}
