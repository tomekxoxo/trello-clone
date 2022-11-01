import styled from 'styled-components';

export const StyledAddBoardForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const StyledAddBoardFormButtons = styled.div`
  display: grid;
  gap: 1.2rem;
  grid-template-columns: repeat(2, 1fr);
  justify-items: flex-end;
`;
