import { StyledImage, StyledImageWrapper } from 'Components/atoms/Image/Image.style';
import { ImageProps } from 'next/image';

const ImageWrapper = ({ onClick, ...restProps }: ImageProps) => (
  <StyledImageWrapper onClick={onClick}>
    <StyledImage {...restProps} />
  </StyledImageWrapper>
);

export default ImageWrapper;
