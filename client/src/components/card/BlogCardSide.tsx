

import { IPost } from '@/old/interfaces/post.interface'

import { formattedDate } from '@/old/lib/utils';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { Link } from 'react-router-dom';
import { SaveButton } from '../button/SaveButton';
import { LikeButton } from '../button/LikeButton';
import { BlogMenuBar } from './BlogMenuBar';
import { CommentButton } from '../button/CommentButton';
import { CoverImage } from '../CoverImage';
import { IUserPayload } from '@/old/interfaces/user.interface';

interface BlogCardSideProps {
    post: IPost;
    currentUser: IUserPayload;
}
export const BlogCardSide = ({ post, currentUser }: BlogCardSideProps) => {


    console.log(currentUser)
    // const isSaved = currentUser.savedPosts.some((p) => p === post._id)
    const isSaved = false

    // console.log(isSaved)

    return (
        <Card className=" border rounded-sm flex">
            <Link to={`/posts/${post.slug}`}>
                <CardHeader className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <Avatar>
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
            </Link>
            <CardFooter className="flex justify-between items-center">
                <div className='flex items-center gap-2'>
                    <Badge variant="outline" className="cursor-pointer rounded-full">{post.tag}</Badge>
                    <p className='text-sm text-neutral-500 hidden md:block'> • {post.readingTime}</p>
                    <LikeButton onClick={() => {}} variant={"display"} initialCount={post.likes.length} />
                    <CommentButton post={post} variant={"display"} />
                </div>
                <div className="flex items-center gap-2 md:gap-4">
                    <SaveButton postId={post._id} isSaved={isSaved} />
                    <BlogMenuBar />
                </div>
            </CardFooter>
        </Card >

    )
}
