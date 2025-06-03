import { BiSolidEditAlt } from "react-icons/bi";
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

interface EditButtonProps {
    link: string;
    icon?: boolean;
    title: string;
}

export const EditButton = ({ link, icon, title }: EditButtonProps) => {
    return (
        <div className="flex items-center gap-4">
            <Link to={link}>
                <Button variant={"outline"}>{title}</Button>
            </Link>
            {
                icon && (<BiSolidEditAlt className="text-2xl" />)
            }

        </div>
    )
}
