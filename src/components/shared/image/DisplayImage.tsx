import { FC, useCallback, useState } from 'react';
import { StarrySpinner } from '../spinners/StarrySpinner';
import { StyledProfileImage } from './styled';

interface DisplayImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const DisplayImage: FC<DisplayImageProps> = ({ src, alt, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleImageLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);
  return (
    <>
      {!isLoaded && (
        <StarrySpinner className={props.className} />
      )}
      <StyledProfileImage src={src} alt={alt} onLoad={handleImageLoad} {...props} />
    </>
  );
};

export default DisplayImage;
