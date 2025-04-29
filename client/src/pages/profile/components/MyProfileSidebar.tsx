import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IUserPayload } from "@/interfaces/user.interface"

import { EditButton } from "@/components/button/EditButton";

interface ProfileSidebarProps {
    user: IUserPayload;
}

export const MyProfileSidebar = ({ user }: ProfileSidebarProps) => {

    return (
        <aside className="sticky top-4 flex flex-col gap-8">
            <div className="h-full overflow-y-auto p-4 bg-white rounded-2xl shadow-sm flex flex-col">
                <div className="space-y-6 flex-1 ">

                    <div>
                        <Avatar className="size-24">
                            <AvatarImage className="object-cover" src={user.avatar} alt="Publisher Avatar" />
                            <AvatarFallback>Publisher Avatar</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col gap-2 mt-4">
                            <h2 className="text-neutral-800 font-semibold">{user.firstname} {user.lastname}</h2>
                            <h3 className="text-neutral-800 text-sm font-medium">{user.pseudonym}</h3>
                            <p className="text-neutral-500 text-[12px] font-normal">{user.tagline}</p>
                        </div>
                    </div>

                    <EditButton link={"/profile/me/settings"} title="Edit Profil" icon />
                </div>
            </div>
            <div className="h-full overflow-y-auto p-4 bg-white rounded-2xl shadow-sm flex flex-col">
                <div className="space-y-6 flex-1 ">
                    <div>
                        <h3>Recently activities</h3>
                        <div className="flex flex-col gap-2 mt-4">
                            <div className="flex items-start gap-3">
                                <div className="size-8 rounded-full bg-secondary flex items-center justify-center">
                                    📝
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-neutral-800">
                                        You posted a new blog: <span className="font-semibold">"Chasing Leaves in Spring"</span>
                                    </p>
                                    <p className="text-xs text-neutral-400">2 hours ago</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="size-8 rounded-full bg-secondary flex items-center justify-center">
                                    📝
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-neutral-800">
                                        You posted a new blog: <span className="font-semibold">"Chasing Leaves in Spring"</span>
                                    </p>
                                    <p className="text-xs text-neutral-400">2 hours ago</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="size-8 rounded-full bg-secondary flex items-center justify-center">
                                    📝
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-neutral-800">
                                        You posted a new blog: <span className="font-semibold">"Chasing Leaves in Spring"</span>
                                    </p>
                                    <p className="text-xs text-neutral-400">2 hours ago</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="size-8 rounded-full bg-secondary flex items-center justify-center">
                                    💬
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-neutral-800">
                                        You commented on <span className="font-semibold">"The Great Sock Hunt"</span>
                                    </p>
                                    <p className="text-xs text-neutral-400">1 day ago</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="size-8 rounded-full bg-secondary flex items-center justify-center">
                                    🤝
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-neutral-800">
                                        You started following <span className="font-semibold">@whiskerking</span>
                                    </p>
                                    <p className="text-xs text-neutral-400">3 days ago</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </aside>
    )
}
