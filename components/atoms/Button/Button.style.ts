import styled, { css } from 'styled-components';

interface IStyledButtonProps {
  backgroundColor: string;
  width: string;
}

export const SharedButtonStyles = css`
  align-items: center;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  gap: 0.8rem;
  padding: 9px;
  width: fit-content;
`;

export const StyledButton = styled.button<IStyledButtonProps>`
  ${SharedButtonStyles}
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: ${({ width }) => width};
`;

export const StyledButtonIcon = styled.div`
  align-items: center;
  display: flex;
`;
