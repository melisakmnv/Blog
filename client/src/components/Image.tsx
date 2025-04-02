import { IKImage } from 'imagekitio-react';

interface ImageProps {
    src: string;
    className?: string;
    alt: string;
    width?: number;
    height?: number;
}
export const Image = ({ src, className, alt, width, height }: ImageProps) => {
    return (
        <IKImage
            urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
            path={src}
            className={className}
            loading="lazy"
            alt={alt}
            lqip={{ active: true, quality: 20 }}
            width={width}
            height={height}
        />
    )
}
