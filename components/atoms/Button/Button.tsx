import { StyledButton, StyledButtonIcon } from 'Components/atoms/Button/Button.style';
import Typography, { Variant } from 'Components/atoms/Typography/Typography';
import { ButtonHTMLAttributes } from 'react';
import { useTheme } from 'styled-components';
import { ThemeColors } from 'Utils/theme';

export type IconPosition = 'left' | 'right';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: ThemeColors;
  color?: ThemeColors;
  icon?: JSX.Element;
  iconPosition?: IconPosition;
  width?: string;
  borderColor?: ThemeColors;
  children?: string;
  variant?: Variant;
}

const Button = ({
  variant = 'h1',
  children,
  borderColor = 'transparent',
  backgroundColor = 'blue1',
  color = 'white',
  iconPosition = 'left',
  icon,
  width = 'fit-content',
  type = 'button',
  ...restProps
}: ButtonProps) => {
  const { colors } = useTheme();

  return (
    <StyledButton
      {...restProps}
      backgroundColor={colors[backgroundColor]}
      width={width}
      borderColor={borderColor}
      type={type}
    >
      {icon && <StyledButtonIcon iconPosition={iconPosition}>{icon}</StyledButtonIcon>}
      {children && (
        <Typography color={color} variant={variant}>
          {children}
        </Typography>
      )}
    </StyledButton>
  );
};

export default Button;
