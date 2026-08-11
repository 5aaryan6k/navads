import { useState } from "react";

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

export function SafeImage({
  src,
  alt,
  fallbackSrc = "/images/common/placeholder.jpg",
  className,
  ...props
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src || fallbackSrc);

  return (
    <img
      {...props}
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => {
        if (imgSrc !== fallbackSrc) {
          setImgSrc(fallbackSrc);
        }
      }}
    />
  );
}
