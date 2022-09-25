import { StyledTypography } from 'Components/atoms/Typography/Typography.style';
import { useTheme } from 'styled-components';
import { ThemeColorsType } from 'Utils/theme';

export type VariantType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
export type WeightType = '700' | '600' | '500' | '400';

interface ITypographyProps {
  variant?: VariantType;
  color?: ThemeColorsType;
  weight?: WeightType;
  children: string;
}

const Typography = ({
  variant = 'h1',
  color = 'blue1',
  weight = '500',
  children,
  ...restProps
}: ITypographyProps) => {
  const { colors } = useTheme();

  return (
    <StyledTypography weight={weight} variant={variant} color={colors[color]} {...restProps}>
      {children}
    </StyledTypography>
  );
};

export default Typography;
