

interface CoverImageProps {
    src: string;
    size? : string;
    className? : string;
}

export const CoverImage = ({ src, className }: CoverImageProps) => {
    return (
        <img className={`object-cover w-full ${className}`} src={src} alt="Post Cover" />
    )
}
