import { ReactNode } from 'react';
import { StyledButton } from './Button.style';

interface IButton {
  size?: 'small' | 'medium' | 'large';
  color: 'primary' | 'secondary';
  children: ReactNode;
}

const Button = ({ size = 'medium', color, children }: IButton) => (
  <StyledButton size={size} color={color}>
    {children}
  </StyledButton>
);

export default Button;
