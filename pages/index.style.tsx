import styled from 'styled-components';

export const StyledBoards = styled.div`
  background-color: ${({ theme }) => theme.colors.boardColor};
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  padding: 2.4rem;
`;

export const StyledBoardsHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2.4rem;
`;

export const StyledBoardsList = styled.div`
  display: grid;
  gap: 2.4rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  overflow-y: scroll;
`;
