import { IconPositionType } from 'Components/atoms/Button/Button';
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
  height: fit-content;
  justify-content: space-between;
  padding: 9px;
  width: fit-content;
`;

export const StyledButton = styled.button<IStyledButtonProps>`
  ${SharedButtonStyles}
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: ${({ width }) => width};
`;

interface IStyledButtonIconProps {
  iconPosition: IconPositionType;
}

export const StyledButtonIcon = styled.div<IStyledButtonIconProps>`
  align-items: center;
  display: flex;
  order: ${({ iconPosition }) => (iconPosition === 'left' ? 0 : 1)};
`;
