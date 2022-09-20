import Image from 'next/image';
import styled from 'styled-components';

export const StyledUser = styled.div`
  align-items: center;
  display: flex;
  flex-shrink: 0;
  gap: 1.2rem;
  height: 3.2rem;
  width: 3.2rem;

  > button {
    cursor: default;
    width: 3.2rem;
  }
`;

export const StyledUserImage = styled(Image)`
  border-radius: 0.8rem;
`;
