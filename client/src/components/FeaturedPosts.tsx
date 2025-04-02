import { Link } from "react-router-dom";
import { Image } from "./Image";
import { DisplayPost } from "./DisplayPost";


const FeaturedPosts = () => {


    return (
        <div className="mt-8 flex flex-col lg:flex-row gap-16">
            <DisplayPost main number={"01"} />
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
                <DisplayPost number={"02"} />
                <DisplayPost number={"03"} />
                <DisplayPost number={"04"} />
            </div>
        </div>
    );
};

export default FeaturedPosts;