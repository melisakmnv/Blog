
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { UserAvatar2 } from "@/components/UserAvatar2";
import { IPost } from "@/old/interfaces/post.interface"
import { formatName, formattedDate } from "@/old/lib/utils";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

interface FeaturedPostCardProps {
	post: IPost;
}
export const FeaturedPostCard = ({ post }: FeaturedPostCardProps) => {
	
	return (
		<Card className="w-[350px] lg:w-[400px] border rounded-sm flex flex-col">
			<CardHeader>
				<img src={post.cover} alt="Post Cover" />
			</CardHeader>
			<CardContent className="flex-1 flex flex-col gap-2">
				<CardTitle className="text-xl font-Montserrat font-bold leading-tight text-neutral-800">{post.title}</CardTitle>
				<CardDescription className="line-clamp-3 font-Karla text-neutral-700 text-sm">{post.description}</CardDescription>
			</CardContent>
			<div className="h-4 px-4">
				<Badge variant={"outline"}>{post.tag}</Badge>
			</div>
			{/* <Separator className="bg-secondary" /> */}
			<CardFooter className="h-fit flex justify-between items-center pt-2">
				<div className="flex gap-2 items-center">
					{/* <Avatar>
						<AvatarImage className='object-cover' src={post.author.avatar} alt="Publisher Avatar" />
						<AvatarFallback>Publisher Avatar</AvatarFallback>
					</Avatar>
					<p className="text-sm text-neutral-500 font-Poppins">
						<span>
							{formatName(post.author.firstname)} {formatName(post.author.lastname)}
						</span> {" "} • {" "} {formattedDate(post.createdAt)}
					</p> */}
					<UserAvatar2 user={post.author} />
				</div>
				<Link to={`/posts/${post.slug}`}>
					<Button>
						<BsArrowRight />
					</Button>
				</Link>
			</CardFooter>
		</Card>
	)
}

