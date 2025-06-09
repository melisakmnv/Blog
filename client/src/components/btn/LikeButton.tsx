import { Button } from "../ui/button"

import heartFilled from "../../assets/heart_filled.svg"
// import heartEmpty from "../../assets/heart_empty.svg"

export const LikeButton = () => {

    return (
        <Button size={"icon"}>
            <img src={heartFilled}
                alt="like"
                className="w-10 h-10 object-contain pointer-events-none"
            />
        </Button>
    )
}
