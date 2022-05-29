import { StyledButton } from 'Components/atoms/Button/Button.style';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { useTheme } from 'styled-components';
import { ThemeColorsType } from 'Utils/theme';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color?: ThemeColorsType;
}

const Button = ({ children, color = 'blue1', ...restProps }: IButtonProps) => {
  const { colors } = useTheme();
  const backgroundColor = colors[color];

  return (
    <StyledButton {...restProps} backgroundColor={backgroundColor}>
      {children}
    </StyledButton>
  );
};

export default Button;
