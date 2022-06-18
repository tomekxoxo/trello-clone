import styled from 'styled-components';

interface IStyledWorkBoardProps {
  columnsCount: number;
}

export const StyledWorkBoard = styled.div<IStyledWorkBoardProps>`
  background-color: ${({ theme }) => theme.colors.boardColor};
  border-radius: 1.2rem;
  display: grid;
  gap: 2.4rem;
  grid-template-columns: ${({ columnsCount }) => `repeat(${columnsCount}, 1fr)`};
  height: 100%;
  overflow: scroll;
  padding: 0 2.4rem;
`;
