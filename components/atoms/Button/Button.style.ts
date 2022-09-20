import { IconPositionType } from 'Components/atoms/Button/Button';
import styled, { css } from 'styled-components';

interface IStyledButtonProps {
  backgroundColor: string;
  width: string;
  borderColor: string;
}

export const SharedButtonStyles = css`
  align-items: center;
  border-radius: 8px;
  border-style: solid;
  border-width: 1px;
  cursor: pointer;
  display: flex;
  gap: 0.8rem;
  height: 3.2rem;
  justify-content: space-between;
  padding: 9px;
  width: fit-content;
`;

export const StyledButton = styled.button<IStyledButtonProps>`
  ${SharedButtonStyles}
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-color: ${({ borderColor }) => borderColor};
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
