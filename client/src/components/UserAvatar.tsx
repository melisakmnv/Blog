import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { FollowButton } from "./button/FollowButton";

import { formattedDate } from "@/lib/utils";

import { IUser } from "@/interfaces/user.interface";
import { IPost } from "@/interfaces/post.interface";
import { IComment } from "@/interfaces/comment.interface";


interface UserAvatarProps {
    user: IUser;
    variant: "card" | "blog" | "comment" | "profile";
    color?: string;
    post?: IPost;
    comment?: IComment;
}

export const UserAvatar = ({ user, variant, post, comment }: UserAvatarProps) => {

    const sizeClass = {
        card: "size-10",
        blog: "size-14",
        comment: "size-14",
        profile: "size-16",
    }[variant]


    return (
        <div>
            <div className="flex items-center gap-2">
                <HoverCard>
                    <div className="flex items-center gap-4">
                        <HoverCardTrigger asChild>
                            <Avatar className={`${sizeClass} cursor-pointer`}>
                                <AvatarImage src={user.avatar} alt={`${user.username}'s avatar`} />
                                <AvatarFallback>{user.username[0].toUpperCase()}</AvatarFallback>
                            </Avatar>
                        </HoverCardTrigger>

                        {
                            variant === "blog" && (
                                <div>
                                    <div className="flex gap-2 items-center">
                                        <HoverCardTrigger>
                                            <Button className="p-0 text-md" variant={"link"}>@{user.username}</Button>
                                        </HoverCardTrigger>

                                        <div className="flex items-center">
                                            <span className="mr-2">•</span>
                                            <FollowButton variant={"link"} className="underline p-0 text-sm text-neutral-800" />
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        {post && (
                                            <div className="text-xs text-muted-foreground font-Poppins">
                                                <span>
                                                    {formattedDate(post.createdAt)}
                                                </span>
                                                <span className="mx-2">•</span>
                                                <span>
                                                    {post.readingTime}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )
                        }

                        {
                            variant === "comment" && (
                                <div>
                                    <div className="flex gap-2 items-center">
                                        <HoverCardTrigger>
                                            <Button className="p-0 text-md" variant={"link"}>@{user.username}</Button>
                                        </HoverCardTrigger>

                                        {
                                            comment && (
                                                <div className="flex items-center">
                                                    <div className="text-xs text-muted-foreground font-Poppins">
                                                        <span className="mx-2">•</span>
                                                        <span>
                                                            {formattedDate(comment.createdAt)}
                                                        </span>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            )
                        }
                    </div>



                    <HoverCardContent className="w-80 flex flex-col gap-4">
                        <div className="flex justify-between items-end">
                            <Avatar className="size-16">
                                <AvatarImage src={user.avatar} alt={`${user.username}'s avatar`} />
                                <AvatarFallback>{user.username[0].toUpperCase()}</AvatarFallback>
                            </Avatar>
                            <FollowButton variant={"outline"} />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h4 className="text-md font-semibold text-neutral-800">@{user.username}</h4>
                            <p className="text-sm text-neutral-600">{user.followers / 1000}K <span className="text-neutral-400">Followers</span></p>
                        </div>
                        <p className="text-sm">{user.bio}</p>
                    </HoverCardContent>
                </HoverCard>


            </div>
        </div>
    )
}
