
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'
import { MdMoreHoriz } from "react-icons/md";

export const MoreButton = () => {
  return (
      <Tooltip>
          <TooltipTrigger asChild>
              <MdMoreHoriz />
          </TooltipTrigger>
          <TooltipContent>
              <p>More</p>
          </TooltipContent>
      </Tooltip>
  )
}
