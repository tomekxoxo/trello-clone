import { StyledImage, StyledImageWrapper } from 'Components/atoms/Image/Image.style';
import { ImageProps } from 'next/image';

const ImageWrapper = ({ ...restProps }: ImageProps) => (
  <StyledImageWrapper>
    <StyledImage {...restProps} />
  </StyledImageWrapper>
);

export default ImageWrapper;
