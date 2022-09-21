import {
  StyledInput,
  StyledInputButton,
  StyledInputContainer,
} from 'Components/atoms/Input/Input.style';
import Typography from 'Components/atoms/Typography/Typography';
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
      {errorText && (
        <Typography variant='h5' color='red'>
          {errorText}
        </Typography>
      )}
    </>
  );
};

export default forwardRef(Input);
