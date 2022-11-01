import { StyledTextarea } from 'Components/atoms/Textarea/Textarea.style';
import React, { forwardRef, Ref, TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  height?: string;
}

const Textarea = (
  { height = '100px', ...restProps }: TextareaProps,
  ref: Ref<HTMLTextAreaElement>,
) => <StyledTextarea height={height} {...restProps} ref={ref} />;

export default forwardRef(Textarea);
