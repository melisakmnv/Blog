import { Link, useParams } from "react-router-dom";



export const PostPage = () => {


    const postTitle = "Lorem ipsum dolor sit amet.";
    const author = "John Doe"
    const username ="jackie"
    const authorImg = "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
    const category = "Web Design"
    const createdAt = "20 Jan 2020"
    const postDescription = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis nostrum ea, quo eaque maxime quibusdam molestias libero praesentium eos porro."

    const imageSrc = "https://hapy.design/wp-content/uploads/2024/03/web-design-concept-with-drawings_1134-77.jpg";

    return (
        <div className="flex flex-col gap-8">
            {/* detail */}
            <div className="flex gap-8">
                <div className="lg:w-3/5 flex flex-col gap-8">
                    <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
                        {postTitle}
                    </h1>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <span>Written by</span>
                        <Link to="" className="text-blue-800">{author}</Link>
                        <span>on</span>
                        <Link to="" className="text-blue-800">{category}</Link>
                        <span>{createdAt}</span>
                    </div>
                    <p className="text-gray-500 font-medium">{postDescription}</p>
                </div>(
                <div className="hidden lg:block w-2/5">
                    <img src={imageSrc} width={600} className="rounded-2xl" />
                </div>
                )
            </div>
            {/* content */}
            <div className="flex flex-col md:flex-row gap-12 justify-between">
                {/* text */}
                <div className="lg:text-lg flex flex-col gap-6 text-justify">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
                        fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
                        dolorem, dolores eligendi amet perferendis illum repellat nam quam
                        facilis veritatis. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
                        exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
                        Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
                        consectetur, adipisicing elit. Libero fuga modi amet error aliquid
                        eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
                        obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
                        fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
                        dolorem, dolores eligendi amet perferendis illum repellat nam quam
                        facilis veritatis. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
                        exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
                        Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
                        consectetur, adipisicing elit. Libero fuga modi amet error aliquid
                        eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
                        obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
                        fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
                        dolorem, dolores eligendi amet perferendis illum repellat nam quam
                        facilis veritatis. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
                        exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
                        Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
                        consectetur, adipisicing elit. Libero fuga modi amet error aliquid
                        eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
                        obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
                        fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
                        dolorem, dolores eligendi amet perferendis illum repellat nam quam
                        facilis veritatis. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
                        exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
                        Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
                        consectetur, adipisicing elit. Libero fuga modi amet error aliquid
                        eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
                        obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
                        fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
                        dolorem, dolores eligendi amet perferendis illum repellat nam quam
                        facilis veritatis. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
                        exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
                        Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
                        consectetur, adipisicing elit. Libero fuga modi amet error aliquid
                        eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
                        obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
                        fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
                        dolorem, dolores eligendi amet perferendis illum repellat nam quam
                        facilis veritatis. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
                        exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
                        Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
                        consectetur, adipisicing elit. Libero fuga modi amet error aliquid
                        eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
                        obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
                        fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
                        dolorem, dolores eligendi amet perferendis illum repellat nam quam
                        facilis veritatis. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
                        exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
                        Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
                        consectetur, adipisicing elit. Libero fuga modi amet error aliquid
                        eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
                        obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
                    </p>
                </div>
                {/* menu */}
                <div className="px-4 h-max sticky top-8">
                    <h1 className="mb-4 text-sm font-medium">Author</h1>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-8">
                                <img
                                src={authorImg}
                                    className="w-12 h-12 rounded-full object-cover"
                                    width="48"
                                    height="48"
                                />
                            <Link to={""} className="text-blue-800">{username}</Link>
                        </div>
                        <p className="text-sm text-gray-500">
                            Lorem ipsum dolor sit amet consectetur
                        </p>
                        <div className="flex gap-2">
                            {/* <Link>
                                <Image src="facebook.svg" />
                            </Link>
                            <Link>
                                <Image src="instagram.svg" />
                            </Link> */}
                            <div>F</div>
                            <div>I</div>
                        </div>
                    </div>
                    {/* <PostMenuActions post={data} /> */}
                    <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
                    <div className="flex flex-col gap-2 text-sm">
                        <Link to="" className="underline">All</Link>
                        <Link className="underline" to="/">
                            Web Design
                        </Link>
                        <Link className="underline" to="/">
                            Development
                        </Link>
                        <Link className="underline" to="/">
                            Databases
                        </Link>
                        <Link className="underline" to="/">
                            Search Engines
                        </Link>
                        <Link className="underline" to="/">
                            Marketing
                        </Link>
                    </div>
                    <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
                    {/* <Search /> */}
                </div>
            </div>
            {/* <Comments postId={data._id} /> */}
        </div>
    );
};
