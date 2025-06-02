import { IPost } from "@/new/api/request/user";
import { CoverImage } from "@/old/components/CoverImage";
import { Avatar, AvatarFallback, AvatarImage } from "@/old/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/old/components/ui/card";
import { formattedDate } from "@/old/lib/utils";



interface PostsTabProps {
    posts: IPost[]
}
export const PostsTab = ({ posts }: PostsTabProps) => {


    if (!posts.length) return (
        <p>This user hasn't written anything yet</p>
    )

    return (
        <div className="space-y-8">
            {posts.map((post) => (
                <PostItem post={post} key={post._id} />
            ))}
        </div>
    )
}


interface PostItem {
    post: IPost;
}
const PostItem = ({ post }: PostItem) => {

    return (
        <Card className=" border rounded-sm flex">
            <CardHeader className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <Avatar className="size-10">
                        <AvatarImage className='object-cover' src={post.author.avatar} alt="Publisher Avatar" />
                        <AvatarFallback>Publisher Avatar</AvatarFallback>
                    </Avatar>
                    <p className="text-sm text-neutral-800 font-Poppins capitalize truncate">{post.author.firstname} {post.author.lastname}</p>
                </div>
                <p className="text-sm text-neutral-500 font-Poppins">{formattedDate(post.createdAt)}</p>
            </CardHeader>
            <CardContent className="flex flex-col-reverse lg:flex-row justify-between gap-10">
                <div className='flex-2 flex flex-col gap-4'>
                    <CardTitle className="text-lg md:text-2xl font-Montserrat font-bold leading-tight text-neutral-800">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3 text-neutral-600 text-sm md:text-md">{post.description}</CardDescription>
                </div>
                <div className='flex-1'>
                    <CoverImage src={post.cover} />
                </div>
            </CardContent>
            <CardFooter>

            </CardFooter>
        </Card>
    )
}