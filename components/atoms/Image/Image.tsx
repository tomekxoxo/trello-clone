import { StyledImage, StyledImageWrapper } from 'Components/atoms/Image/Image.style';
import { ImageProps } from 'next/image';

const ImageWrapper = ({ onClick, ...restProps }: ImageProps) => (
  <StyledImageWrapper>
    <StyledImage {...restProps} onClick={onClick} />
  </StyledImageWrapper>
);

export default ImageWrapper;
