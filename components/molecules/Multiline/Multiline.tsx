import Button from 'Components/atoms/Button/Button';
import Typography from 'Components/atoms/Typography/Typography';
import {
  StyledMultiline,
  StyledMultilineButtons,
  StyledMultilineContainer,
} from 'Components/molecules/Multiline/Multiline.style';
import useClickOutside from 'Hooks/useClickOutside';
import { ChangeEvent, MouseEvent, TextareaHTMLAttributes, useRef, useState } from 'react';
import { ThemeColorsType } from 'Utils/theme';

interface IMultilineProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  submitButtonText?: string;
  secondButtonText?: string;
  height?: string;
  defaultValue: string;
  onSubmitButtonClick: (value: string) => void;
  onSecondButtonClick?: () => void;
  firstButtonColor?: ThemeColorsType;
  firstButtonTextColor?: ThemeColorsType;
  secondButtonColor?: ThemeColorsType;
  secondButtonTextColor?: ThemeColorsType;
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
}

const Multiline = ({
  height = '12rem',
  submitButtonText,
  onSubmitButtonClick,
  onSecondButtonClick,
  secondButtonText,
  defaultValue = '',
  firstButtonTextColor = 'white',
  justifyContent = 'flex-start',
  secondButtonColor = 'white',
  firstButtonColor = 'green1',
  secondButtonTextColor = 'gray3',
  ...restProps
}: IMultilineProps) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [innerValue, setInnerValue] = useState(defaultValue);

  const containerRef = useRef<HTMLDivElement>(null);
  const multilineRef = useRef<HTMLTextAreaElement>(null);

  const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInnerValue(e.target.value);
  };

  const handleOnMultilineContainerClick = () => {
    setIsEditMode(true);
    multilineRef.current?.focus();
  };

  const handleClickOutside = () => {
    setInnerValue(defaultValue);
    setIsEditMode(false);
  };

  const handleOnSubmitButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onSubmitButtonClick(innerValue);
    setIsEditMode(false);
  };

  const handleOnSecondButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onSecondButtonClick?.();
    setInnerValue(defaultValue);
    setIsEditMode(false);
  };

  useClickOutside(containerRef, handleClickOutside);

  return (
    <StyledMultilineContainer
      isEditMode={isEditMode}
      ref={containerRef}
      height={height}
      onClick={handleOnMultilineContainerClick}
    >
      <StyledMultiline
        onChange={handleOnChange}
        ref={multilineRef}
        value={innerValue}
        readOnly={!isEditMode}
        {...restProps}
      />
      {isEditMode && (
        <StyledMultilineButtons justifyContent={justifyContent}>
          {submitButtonText && (
            <Button onClick={handleOnSubmitButtonClick} color={firstButtonColor}>
              <Typography color={firstButtonTextColor} variant='h5' font='notoSans'>
                {submitButtonText}
              </Typography>
            </Button>
          )}
          {secondButtonText && (
            <Button onClick={handleOnSecondButtonClick} color={secondButtonColor}>
              <Typography color={secondButtonTextColor} variant='h5' font='notoSans'>
                {secondButtonText}
              </Typography>
            </Button>
          )}
        </StyledMultilineButtons>
      )}
    </StyledMultilineContainer>
  );
};

export default Multiline;
