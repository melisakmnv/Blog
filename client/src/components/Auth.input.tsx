import { Input } from './ui/input'

interface AuthInputProps {
    id: string;
    // placeholder: string;
    className?: string;
    label: string;
}
export const AuthInput = ({ id, className, label }: AuthInputProps) => {
    return (
        <div className='relative w-full'>
            <Input
                id={id}
                placeholder=" "
                className="peer w-full pt-3
                font-light bg-white border-b outline-none transition disabled:opacity-70 disabled:cursor-not-allowed"
            />
            <label
                htmlFor={id}
                className='absolute text-md duration-150 transform -translate-y-3 top-2 left-0 z-10 origin-[0] 
                font-Poppins tracking-wide font-light
                text-sm text-gray-600
                scale-75
                peer-focus:scale-75
                peer-focus:-translate-y-3
                peer-focus:text-gray-600
                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                peer-placeholder-shown:text-gray-300
                '
            >
                {label}
            </label>
        </div>
    )
}
