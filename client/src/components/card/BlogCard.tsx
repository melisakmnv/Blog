
import { IPost } from "@/old/interfaces/post.interface";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";

import { BsArrowRight } from "react-icons/bs";
import { formatName, formattedDate } from "@/old/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Link } from "react-router-dom";


interface BlogCardProps {
	post: IPost;
}
export const BlogCard = ({ post }: BlogCardProps) => {


	return (

		<Card className="w-[350px] lg:w-[400px] border rounded-sm">
			<CardHeader>
				<img src={post.cover} alt="Post Cover" />
			</CardHeader>
			<CardContent className="flex flex-col gap-2">
				<CardTitle className="text-xl font-Montserrat font-bold leading-tight text-neutral-800">{post.title}</CardTitle>
				<CardDescription className="line-clamp-3 font-Karla text-neutral-700 text-sm">{post.description}</CardDescription>
			</CardContent>
			<CardFooter className="flex justify-between items-center">
				<div className="flex gap-2 items-center">
					<Avatar>
						<AvatarImage className='object-cover' src={post.author.avatar} alt="Publisher Avatar" />
						<AvatarFallback>Publisher Avatar</AvatarFallback>
					</Avatar>
					<p className="text-sm text-neutral-500 font-Poppins"><span>

						{formatName(post.author.firstname)} {formatName(post.author.lastname)}</span> {" "} • {" "} {formattedDate(post.createdAt)}</p>
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
