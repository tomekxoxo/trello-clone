import { StyledButton, StyledButtonIcon } from 'Components/atoms/Button/Button.style';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { useTheme } from 'styled-components';
import { ThemeColorsType } from 'Utils/theme';

export type IconPositionType = 'left' | 'right';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  color?: ThemeColorsType;
  icon?: JSX.Element;
  iconPosition?: IconPositionType;
  width?: string;
}

const Button = ({
  children,
  color = 'blue1',
  iconPosition = 'left',
  icon,
  width = 'fit-content',
  ...restProps
}: IButtonProps) => {
  const { colors } = useTheme();
  const backgroundColor = colors[color];

  return (
    <StyledButton {...restProps} backgroundColor={backgroundColor} width={width}>
      {icon && <StyledButtonIcon iconPosition={iconPosition}>{icon}</StyledButtonIcon>}
      {children}
    </StyledButton>
  );
};

export default Button;
