import React from 'react';

import { ImageLoader } from './ImageLoader';

export const AsyncImage: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = ({
  src,
  ...props
}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [imageSrc, setImageSrc] = React.useState<string>();

  React.useEffect(() => {
    if (!src) {
      return;
    }

    const img = new Image();

    img.addEventListener('load', handleLoad);

    img.src = src!;

    return () => img.removeEventListener('load', handleLoad);
  }, []);

  const handleLoad = () => {
    setImageSrc(src);
    setIsLoading(false);
  };

  if (isLoading) {
    return <ImageLoader />;
  }

  return <img src={imageSrc} {...props} />;
};
