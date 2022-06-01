import {
  StyledInput,
  StyledInputButton,
  StyledInputContainer,
} from 'Components/atoms/Input/Input.style';
import { InputHTMLAttributes } from 'react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  button?: JSX.Element;
}

const Input = ({ button, ...restProps }: IInputProps) => {
  return (
    <StyledInputContainer>
      <StyledInput {...restProps} />
      <StyledInputButton>{button}</StyledInputButton>
    </StyledInputContainer>
  );
};

export default Input;
