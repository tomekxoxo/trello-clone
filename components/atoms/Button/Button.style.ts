import styled, { css } from 'styled-components';

interface IStyledButtonProps {
  backgroundColor: string;
}

export const SharedButtonStyles = css`
  align-items: center;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  padding: 9px;
  width: fit-content;
`;

export const StyledButton = styled.button<IStyledButtonProps>`
  ${SharedButtonStyles}
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const StyledButtonIcon = styled.div`
  align-items: center;
  display: flex;
`;
