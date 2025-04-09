import { CoverImage } from "@/components/CoverImage";
import { IPost } from "@/interfaces/post.interface"


interface PostContentProps {
    post : IPost;
}

export const PostContent = ({post}:PostContentProps) => {
    return (
        <section className="mx-auto">
            <article className="flex flex-col justify-center gap-4 md:gap-8 text-sm md:text-base lg:text-xl text-neutral-700 font-thin word-spacing">
                <CoverImage src={post.cover}/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor nisi, eum, ipsa delectus eos sint molestiae odit pariatur cum nemo, aspernatur doloremque odio officiis ut quis? Soluta repudiandae sunt aut impedit, ea nisi, laudantium totam, sint ut vitae deserunt debitis nihil nemo voluptates laboriosam saepe. Iusto qui eum sed ipsum!</p>

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus totam, nostrum rem doloribus vel quos cum eum hic ex error placeat tenetur expedita eveniet eligendi iure quaerat. Ipsa quo tempore impedit quos fugit tenetur aperiam a, aspernatur nihil esse inventore in aliquam molestiae. Illum assumenda amet veritatis vel nisi. Quo!</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta in minus, saepe praesentium doloribus doloremque atque odit accusantium molestias? Beatae!</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut maxime tempore debitis mollitia similique atque eum deleniti modi consequatur adipisci! Ratione ad accusantium deserunt veritatis ullam repellendus vel dolorem voluptas sapiente qui vero quibusdam rerum velit consequuntur doloremque dolorum ex dolor eligendi esse perferendis nulla, cumque magnam! Sed pariatur debitis in exercitationem atque expedita eveniet suscipit beatae. Labore, voluptates. Sed ipsa odit facere nulla ducimus inventore recusandae at eligendi deleniti!</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt harum quos culpa, voluptates perspiciatis voluptatem officia quam totam magnam nesciunt natus nemo dolor esse ipsa amet tempore vero, sit impedit rerum. Numquam sunt consequatur, assumenda doloribus voluptates eveniet dignissimos perspiciatis pariatur placeat perferendis quisquam consectetur quibusdam laudantium impedit nulla veniam minus necessitatibus dolor. Labore delectus eos, dolorem nulla accusamus atque enim facilis porro quisquam. Perferendis molestias dicta animi reprehenderit molestiae! Modi, a! Natus harum illum, exercitationem soluta excepturi quo adipisci nisi. Qui fugiat pariatur sapiente iste animi, aliquam, repudiandae magni hic praesentium eaque quidem expedita numquam illum? Sunt, ullam blanditiis!</p>

            </article>
        </section>
    )
}


