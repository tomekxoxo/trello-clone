import Typography from 'Components/atoms/Typography/Typography';
import {
  StyledMultiline,
  StyledMultilineButton,
  StyledMultilineContainer,
} from 'Components/molecules/Multiline/Multiline.style';
import useClickOutside from 'Hooks/useClickOutside';
import { TextareaHTMLAttributes, useRef } from 'react';

interface IMultilineProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  buttonText?: string;
  onButtonClick?: () => void;
  closeMultiline: () => void;
}

const Multiline = ({
  buttonText,
  onButtonClick,
  closeMultiline,
  ...restProps
}: IMultilineProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, closeMultiline);

  return (
    <StyledMultilineContainer ref={ref}>
      <StyledMultiline {...restProps} />
      {buttonText && (
        <StyledMultilineButton onClick={onButtonClick} color='green1'>
          <Typography color='white' variant='h5' font='notoSans'>
            {buttonText}
          </Typography>
        </StyledMultilineButton>
      )}
    </StyledMultilineContainer>
  );
};

export default Multiline;
