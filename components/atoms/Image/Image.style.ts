import Image from 'next/image';
import styled from 'styled-components';

export const StyledImageWrapper = styled.div`
  flex-shrink: 0;
`;

interface IStyledImageProps {
  onClick?: () => void;
}

export const StyledImage = styled(Image)<IStyledImageProps>`
  border-radius: 1.2rem;
  cursor: ${({ onClick }) => onClick && 'pointer'};
`;
