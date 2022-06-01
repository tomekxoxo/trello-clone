import { SharedButtonStyles } from 'Components/atoms/Button/Button.style';
import Input from 'Components/atoms/Input/Input';
import styled from 'styled-components';

interface IStyledFileButtonProps {
  backgroundColor: string;
  width: string;
}

export const StyledFileButton = styled.label<IStyledFileButtonProps>`
  ${SharedButtonStyles};
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: ${({ width }) => width};
`;

export const StyledFileButtonInput = styled(Input)`
  display: none;
`;

export const StyledFileButtonIcon = styled.div`
  align-items: center;
  display: flex;
`;
