import styled from 'styled-components';

export const StyledWorkBoard = styled.div`
  background-color: ${({ theme }) => theme.colors.boardColor};
  border-radius: 1.2rem;
  display: flex;
  gap: 2.4rem;
  height: 100%;
  padding: 2.4rem;
`;
