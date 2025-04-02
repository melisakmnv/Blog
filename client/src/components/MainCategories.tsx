import { Link } from "react-router-dom";


const MainCategories = () => {
    return (
        <div className="hidden md:flex bg-neutral-700 rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
            {/* links */}
            <div className="flex-1 flex items-center justify-between flex-wrap">
                <Link
                    to="/posts"
                    className="bg-blue-600 text-white rounded-full px-4 py-2"
                >
                    All Posts
                </Link>
                <Link
                    to="/posts?cat=web-design"
                    className="hover:bg-neutral-500 rounded-full px-4 py-2"
                >
                    Web Design
                </Link>
                <Link
                    to="/posts?cat=development"
                    className="hover:bg-neutral-500 rounded-full px-4 py-2"
                >
                    Development
                </Link>
                <Link
                    to="/posts?cat=databases"
                    className="hover:bg-neutral-500 rounded-full px-4 py-2"
                >
                    Databases
                </Link>
                <Link
                    to="/posts?cat=seo"
                    className="hover:bg-neutral-500 rounded-full px-4 py-2"
                >
                    Search Engines
                </Link>
                <Link
                    to="/posts?cat=marketing"
                    className="hover:bg-neutral-500 rounded-full px-4 py-2"
                >
                    Marketing
                </Link>
            </div>
            <span className="text-xl font-medium">|</span>
            {/* search */}
        </div>
    );
};

export default MainCategories;