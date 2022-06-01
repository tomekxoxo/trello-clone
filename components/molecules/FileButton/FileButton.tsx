import {
  StyledFileButton,
  StyledFileButtonInput,
} from 'Components/molecules/FileButton/FIleButton.style';
import { ChangeEvent, Dispatch, ReactNode, SetStateAction } from 'react';
import { useTheme } from 'styled-components';
import { ThemeColorsType } from 'Utils/theme';

interface IFileButtonProps {
  setFile: Dispatch<SetStateAction<string>>;
  children: ReactNode;
  color?: ThemeColorsType;
  accept?: string;
}

const FileButton = ({ setFile, children, color = 'blue1', accept = '' }: IFileButtonProps) => {
  const loadImage = (event: ChangeEvent<HTMLInputElement>) => {
    const image = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setFile(reader.result);
      }
    };
    reader.readAsDataURL(image);
  };

  const { colors } = useTheme();
  const backgroundColor = colors[color];

  return (
    <StyledFileButton backgroundColor={backgroundColor}>
      {children}
      <StyledFileButtonInput type='file' accept={accept} onChange={loadImage} />
    </StyledFileButton>
  );
};

export default FileButton;
