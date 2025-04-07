import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";
import { Avatar } from "../ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "../ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "../ui/input";

export const PostSidebar = () => {
    const tags = ['React', 'JavaScript', 'Design', 'UX', 'Tailwind', 'Yoga', 'Renovation', 'Business'];
    const peopleToFollow = [
        { name: 'Jane Doe', username: '@janedoe', avatar: 'https://randomuser.me/api/portraits/women/50.jpg', },
        { name: 'John Smith', username: '@johnsmith', avatar: 'https://randomuser.me/api/portraits/men/25.jpg', },
        { name: 'Jim Smith', username: '@jimsmith', avatar: 'https://randomuser.me/api/portraits/men/60.jpg', },
    ];
    const recentActivity = [
        'Commented on "How to use Tailwind"',
        'Liked "Top 10 JavaScript Tricks"',
        'Started following @ux_guru',
    ];

    return (
        // <aside className="w-full max-w-sm p-4 space-y-8 bg-white border">
        <aside className="sticky top-4 h-[calc(100vh-2rem)]">
            <div className="h-full overflow-y-auto p-4 space-y-6 bg-white rounded-2xl shadow-sm">
            {/* Search */}
            <div>
                <h2 className="text-lg font-semibold mb-2">Search</h2>
                <div className="flex w-full max-w-sm items-center space-x-2">
                    <Input type="text" placeholder="Search posts or authors.." />
                    <Button variant={"outline"} type="submit">Search</Button>
                </div>
            </div>

            {/* Filter */}
            <div>
                <h2 className="text-lg font-semibold mb-2">Sort by Date</h2>
                <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Newest post.." />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="newest">Newest</SelectItem>
                            <SelectItem value="oldest">Oldest</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            {/* Tags */}
            <div>
                <h2 className="text-lg font-semibold mb-2">Recommended topics</h2>
                <div className="flex flex-wrap gap-2 mb-2">
                    {tags.map((tag) => (
                        <Badge key={tag} className="cursor-pointer" variant={"outline"}>{tag}</Badge>
                    ))}
                </div>
                <Link to={"/"} className="underline text-sm">see more topics</Link>
            </div>

            {/* People to Follow */}
            <div>
                <h2 className="text-lg font-semibold mb-2">People to Follow</h2>
                <ul className="space-y-4 mb-2">
                    {peopleToFollow.map((person) => (
                        <li key={person.username} className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <Avatar>
                                    <AvatarImage src={person.avatar} alt="Publisher Avatar" />
                                    <AvatarFallback>Publisher Avatar</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-medium text-sm">{person.name}</p>
                                    <p className="text-xs text-gray-500">{person.username}</p>
                                </div>
                            </div>
                            <Button variant={"outline"} className="text-sm">Follow</Button>
                        </li>
                    ))}
                </ul>
                <Link to={"/"} className="underline text-sm">see more to follow</Link>
            </div>

            {/* Recent Activity */}
            <div>
                <h2 className="text-lg font-semibold mb-2">Recent Activity</h2>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    {recentActivity.map((activity, index) => (
                        <li key={index}>{activity}</li>
                    ))}
                </ul>
            </div>
            </div>
        </aside>
    );
};
