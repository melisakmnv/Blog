
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'
import { MdMoreHoriz } from "react-icons/md";

export const MoreButton = () => {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <MdMoreHoriz className='size-5' />
            </TooltipTrigger>
            <TooltipContent>
                <Button variant={"ghost"}>
                    <p>More</p>
                </Button>
            </TooltipContent>
        </Tooltip>
    )
}
