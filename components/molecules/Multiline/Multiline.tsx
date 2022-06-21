import Typography from 'Components/atoms/Typography/Typography';
import {
  StyledMultiline,
  StyledMultilineButton,
  StyledMultilineContainer,
} from 'Components/molecules/Multiline/Multiline.style';
import { TextareaHTMLAttributes } from 'react';

interface IMultilineProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  buttonText?: string;
  onButtonClick?: () => void;
}

const Multiline = ({ buttonText, onButtonClick, ...restProps }: IMultilineProps) => {
  return (
    <StyledMultilineContainer>
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
