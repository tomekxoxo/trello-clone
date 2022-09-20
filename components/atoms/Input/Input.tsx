import ErrorMessage from 'Components/atoms/ErrorMessage/ErrorMessage';
import {
  StyledInput,
  StyledInputButton,
  StyledInputContainer,
} from 'Components/atoms/Input/Input.style';
import { forwardRef, InputHTMLAttributes, Ref } from 'react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  button?: JSX.Element;
  errorText?: string;
}

const Input = ({ button, errorText, ...restProps }: IInputProps, ref: Ref<HTMLInputElement>) => {
  return (
    <>
      <StyledInputContainer>
        <StyledInput {...restProps} ref={ref} />
        <StyledInputButton>{button}</StyledInputButton>
      </StyledInputContainer>
      {errorText && <ErrorMessage message={errorText} />}
    </>
  );
};

export default forwardRef(Input);
