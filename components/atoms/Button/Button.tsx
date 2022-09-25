import { StyledButton, StyledButtonIcon } from 'Components/atoms/Button/Button.style';
import Typography, { VariantType } from 'Components/atoms/Typography/Typography';
import { ButtonHTMLAttributes } from 'react';
import { useTheme } from 'styled-components';
import { ThemeColorsType } from 'Utils/theme';

export type IconPositionType = 'left' | 'right';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: ThemeColorsType;
  color?: ThemeColorsType;
  icon?: JSX.Element;
  iconPosition?: IconPositionType;
  width?: string;
  borderColor?: ThemeColorsType;
  children?: string;
  variant?: VariantType;
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
}: IButtonProps) => {
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
