

import { Link } from "react-router-dom";


export const PostList = () => {

    const imageSrc = "https://hapy.design/wp-content/uploads/2024/03/web-design-concept-with-drawings_1134-77.jpg"
    const postItemTitle = "Lorem ipsum dolor sit amet"
    const postAuthor = "John Doe"
    const postCategory = "Web design"
    const createdAt = "20 Jan 2020"
    const postDescription = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque quam, architecto nisi numquam qui molestiae error asperiores dignissimos nobis similique corrupti provident illum pariatur dolorum. Esse explicabo tenetur rem voluptates."

    const linkSlug = ""

    return (
        <div className="flex flex-col xl:flex-row gap-8 mb-12">
            {/* image */}
            <div className="md:hidden xl:block xl:w-1/3">
                <img src={imageSrc} className="rounded-2xl object-cover" width={735} />
            </div>
            {/* details */}
            <div className="flex flex-col gap-4 xl:w-2/3">
                <Link to={""} className="text-4xl font-semibold">
                    {postItemTitle}
                </Link>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <span>Written by</span>
                    <Link className="text-blue-800" to={`/posts?author=${postAuthor}`}>{postAuthor}</Link>
                    <span>on</span>
                    <Link to={""} className="text-blue-800">{postCategory}</Link>
                    <span>{createdAt}</span>
                </div>
                <p>{postDescription}</p>
                <Link to={`/${linkSlug}`} className="underline text-blue-800 text-sm">
                    Read More
                </Link>
            </div>
        </div>
    );
};

