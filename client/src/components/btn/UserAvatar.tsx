import { Link } from "react-router-dom";
import { IUserProfile } from "@/new/api/request/user";

import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import { FollowButton } from "./FollowButton";

import { formattedDate } from "@/old/lib/utils";

interface UserAvatarProps {
    user: IUserProfile;
    publishedDate?: string;
    readingTime?: string;
    nameTag?: boolean;
}

export const UserAvatar = ({ user, publishedDate, readingTime, nameTag }: UserAvatarProps) => {
    const profileUrl = `/profile/${user.username}`;
    const initials = `${user.firstname?.[0] ?? ''}${user.lastname?.[0] ?? ''}`;

    return (
        <HoverCard>

            <div className="flex items-center gap-4">
                <div>
                    <HoverCardTrigger asChild>
                        <Link to={profileUrl} className="shrink-0">
                            <div className="relative">
                                <Avatar className="size-16 ring-4 ring-[#A0BF87] shadow-md transition-transform">
                                    <AvatarImage className="object-cover" src={user.avatar} alt={`${user.firstname}'s avatar`} />
                                    <AvatarFallback>{initials}</AvatarFallback>
                                </Avatar>

                                {nameTag && (
                                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#A0BF87] text-white text-[10px] px-2 py-1 rounded-full shadow-sm font-Karla">
                                        @{user.firstname.toLowerCase()}
                                    </div>
                                )}
                            </div>
                        </Link>
                    </HoverCardTrigger>
                </div>

                <div className="space-y-1">
                    <HoverCardTrigger asChild>
                        <Link to={profileUrl}>
                            <p className="text-lg font-Poppins font-semibold capitalize text-[#A0675C] hover:underline">
                                {user.firstname} {user.lastname}
                            </p>
                        </Link>
                    </HoverCardTrigger>

                    {(publishedDate && readingTime) && (
                        <p className="text-xs md:text-sm text-[#A0675C] font-Karla flex items-center gap-2">
                            <span>{formattedDate(publishedDate)}</span>
                            <span>•</span>
                            <span>{readingTime}</span>
                        </p>
                    )}
                </div>
            </div>

            <HoverCardContent align="start" sideOffset={0} className="w-80">
                <div className="flex flex-col space-y-4 p-2">
                    <div className="flex justify-between items-center">
                        <Avatar className="size-14">
                            <AvatarImage className='object-cover' src={user.avatar} />
                            <AvatarFallback>VC</AvatarFallback>
                        </Avatar>
                        <FollowButton initialFollow={true} size={"sm"} />
                    </div>
                    <div className="space-y-2">
                        <p className="text-sm text-neutral-500 font-Poppins font-light">{user.followers.length} Followers</p>
                        <h4 className="text-sm font-semibold text-black">{user.pseudonym}</h4>
                        <p className="text-sm">
                            {user.tagline}
                        </p>
                    </div>
                </div>
            </HoverCardContent>

        </HoverCard>
    );
};