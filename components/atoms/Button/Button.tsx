import { StyledButton, StyledButtonIcon } from 'Components/atoms/Button/Button.style';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { useTheme } from 'styled-components';
import { ThemeColorsType } from 'Utils/theme';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  color?: ThemeColorsType;
  icon?: JSX.Element;
}

const Button = ({ children, color = 'blue1', icon, ...restProps }: IButtonProps) => {
  const { colors } = useTheme();
  const backgroundColor = colors[color];

  return (
    <StyledButton {...restProps} backgroundColor={backgroundColor}>
      {icon && <StyledButtonIcon>{icon}</StyledButtonIcon>}
      {children}
    </StyledButton>
  );
};

export default Button;
