import { Button } from "../ui/button"
import more from "../../assets/more.svg"


export const MoreButton = () => {

    return (
        <Button size={"icon"}>
            <img src={more}
                alt="more"
                className="w-10 h-10 object-contain pointer-events-none"
            />
        </Button>
    )
}
