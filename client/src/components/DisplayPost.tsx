import { Link } from "react-router-dom";

interface DisplayPostProps {
    main?: boolean;
    number: string;
}

export const DisplayPost = ({ main, number }: DisplayPostProps) => {
    const imageSrc = "https://hapy.design/wp-content/uploads/2024/03/web-design-concept-with-drawings_1134-77.jpg";
    const postTitle = "Lorem ipsum dolor sit amet.";
    const postDate = main ? "2 days ago" : "Sat 20 Jan 25";
    const category = "Web Design";
    const link = ""

    return (
        <div className={main ? "w-full lg:w-1/2 flex flex-col gap-4" : "lg:h-1/3 flex justify-between gap-4"}>
            {/* Image */}
            <div className={main ? "" : "w-1/3 aspect-video"}>
                <img className={main ? "rounded-md w-full" : "rounded-sm"} src={imageSrc} alt="display" />
            </div>

            {/* Content */}
            <div className={main ? "flex flex-col" : "w-2/3"}>
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center  gap-1 md:gap-4 text-sm lg:text-base mb-2 md:mb-4">
                    <div className="flex items-center gap-2">
                        <h1 className="font-semibold">{number}.</h1>
                        <Link to={link} className="text-blue-400 lg:text-lg">{category}</Link>
                    </div>

                    <span className="text-gray-500">{postDate}</span>
                </div>

                {/* Title */}
                <Link
                    to={link}
                    className={main
                        ? "text-xl lg:text-3xl font-semibold lg:font-bold"
                        : "text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"}
                >
                    {postTitle}
                </Link>
            </div>
        </div>
    );
};
