import { StyledInput, StyledInputButton, StyledInputContainer } from 'Components/Input/Input.style';
import { InputHTMLAttributes } from 'react';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  button?: JSX.Element;
}

const Input = ({ button, ...restProps }: IInput) => {
  return (
    <StyledInputContainer>
      <StyledInput {...restProps} />
      <StyledInputButton>{button}</StyledInputButton>
    </StyledInputContainer>
  );
};

export default Input;
