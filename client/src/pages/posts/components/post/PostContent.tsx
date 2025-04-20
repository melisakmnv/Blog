import { CoverImage } from "@/components/CoverImage";
import { Badge } from "@/components/ui/badge";
import { IPost } from "@/interfaces/post.interface"

interface PostContentProps {
    post: IPost;
}

export const PostContent = ({ post }: PostContentProps) => {

    return (
        <section className="mx-auto">
            <article className="flex flex-col justify-center gap-4 md:gap-8 text-sm md:text-base lg:text-xl text-neutral-700 font-thin word-spacing">
                <CoverImage src={post.cover} />
                <div
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </article>
            <Badge className="cursor-pointer mt-10 px-4 py-1" variant={"outline"}>{post.tag}</Badge>
        </section>
    )
}


