import styled from 'styled-components';

export const StyledColumnHeader = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.boardColor};
  display: flex;
  height: fit-content;
  justify-content: space-between;
  padding: 2.4rem 0;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;
`;
