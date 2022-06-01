import { IButtonProps } from 'Components/atoms/Button/Button';
import {
  StyledFileButton,
  StyledFileButtonIcon,
  StyledFileButtonInput,
} from 'Components/molecules/FileButton/FIleButton.style';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { useTheme } from 'styled-components';

interface IFileButtonProps extends IButtonProps {
  setFile: Dispatch<SetStateAction<string>>;
  accept?: string;
}

const FileButton = ({
  setFile,
  children,
  color = 'blue1',
  accept = '',
  icon,
  width = 'fit-content',
}: IFileButtonProps) => {
  const loadImage = (event: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    let image = null;

    if (event.target.files && event.target.files.length > 0) {
      image = event.target.files[0];
    }
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setFile(reader.result);
      }
    };
    if (image !== null) {
      reader.readAsDataURL(image);
    }
  };

  const { colors } = useTheme();
  const backgroundColor = colors[color];

  return (
    <StyledFileButton backgroundColor={backgroundColor} width={width}>
      {icon && <StyledFileButtonIcon>{icon}</StyledFileButtonIcon>}
      {children}
      <StyledFileButtonInput type='file' accept={accept} onChange={loadImage} />
    </StyledFileButton>
  );
};

export default FileButton;
