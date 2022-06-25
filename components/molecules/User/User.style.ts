import Image from 'next/image';
import styled from 'styled-components';

export const StyledUser = styled.div`
  align-items: center;
  display: flex;
  gap: 1.2rem;
`;

export const StyledUserImage = styled(Image)`
  border-radius: 0.8rem;
`;
