import { Button } from "../ui/button"
import pencil from "../../assets/pencil.svg"

export const EditButton = () => {

    return (
        <Button size={"icon"}>
            <img src={pencil}
                alt="pencil"
                className="w-10 h-10 object-contain pointer-events-none"
            />
        </Button>
    )
}