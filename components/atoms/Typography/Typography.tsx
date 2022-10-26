import { StyledTypography } from 'Components/atoms/Typography/Typography.style';
import { useTheme } from 'styled-components';
import { ThemeColors } from 'Utils/theme';

export type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
export type Weight = '700' | '600' | '500' | '400';

interface TypographyProps {
  variant?: Variant;
  color?: ThemeColors;
  weight?: Weight;
  children: string;
}

const Typography = ({
  variant = 'h1',
  color = 'blue1',
  weight = '500',
  children,
  ...restProps
}: TypographyProps) => {
  const { colors } = useTheme();

  return (
    <StyledTypography weight={weight} variant={variant} color={colors[color]} {...restProps}>
      {children}
    </StyledTypography>
  );
};

export default Typography;
