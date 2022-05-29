import styled from 'styled-components';

interface IStyledButtonProps {
  backgroundColor: string;
}

export const StyledButton = styled.button<IStyledButtonProps>`
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  height: 30px;
  padding: 9px;
`;
