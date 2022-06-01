import { SharedButtonStyles } from 'Components/atoms/Button/Button.style';
import Input from 'Components/atoms/Input/Input';
import styled from 'styled-components';

interface IStyledFileButtonProps {
  backgroundColor: string;
}

export const StyledFileButton = styled.label<IStyledFileButtonProps>`
  ${SharedButtonStyles};
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const StyledFileButtonInput = styled(Input)`
  display: none;
`;
