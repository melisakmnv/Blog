

interface CoverImageProps {
    src: string;
    size? : string;

}

export const CoverImage = ({ src }: CoverImageProps) => {
    return (
        <img className="object-cover w-full" src={src} alt="Post Cover" />
    )
}
