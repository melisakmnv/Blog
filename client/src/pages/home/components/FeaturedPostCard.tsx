
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { IPost } from "@/interfaces/post.interface"
import { formatName, formattedDate } from "@/lib/utils";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

interface FeaturedPostCardProps {
  post: IPost;
}
export const FeaturedPostCard = ({ post }: FeaturedPostCardProps) => {
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

