import { StyledImageWrapper } from 'Components/atoms/Image/Image.style';
import { ImageProps } from 'next/image';

const ImageWrapper = ({ ...restProps }: ImageProps) => <StyledImageWrapper {...restProps} />;

export default ImageWrapper;
