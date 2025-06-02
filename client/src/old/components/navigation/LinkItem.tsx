
import { Link } from 'react-router-dom'

interface LinkItemProps {
    link: string;
    label: string;
    className?: string
}

export const LinkItem = ({ link, label, className }: LinkItemProps) => {
    return (
        <Link
            to={link}
            className={`${className} font-Karla uppercase font-light text-neutral-400 border-b border-transparent transition-all ease-in-out duration-300 hover:text-neutral-800 hover:border-b hover:border-neutral-600`}
        >
            {label}
        </Link>
    )
}

