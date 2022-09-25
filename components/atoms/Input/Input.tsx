import {
  StyledInput,
  StyledInputButton,
  StyledInputContainer,
  StyledInputError,
} from 'Components/atoms/Input/Input.style';
import { forwardRef, InputHTMLAttributes, Ref } from 'react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  button?: JSX.Element;
  errorText?: string;
}

const Input = ({ button, errorText, ...restProps }: IInputProps, ref: Ref<HTMLInputElement>) => (
  <>
    <StyledInputContainer>
      <StyledInput {...restProps} ref={ref} />
      <StyledInputButton>{button}</StyledInputButton>
      {errorText && (
        <StyledInputError variant='h5' color='red'>
          {errorText}
        </StyledInputError>
      )}
    </StyledInputContainer>
  </>
);

export default forwardRef(Input);
