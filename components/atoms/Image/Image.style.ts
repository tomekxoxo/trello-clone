import Image from 'next/image';
import styled from 'styled-components';

export const StyledImageWrapper = styled.div`
  cursor: ${({ onClick }) => onClick && 'pointer'};
  flex-shrink: 0;
`;

export const StyledImage = styled(Image)`
  border-radius: 1.2rem;
`;
