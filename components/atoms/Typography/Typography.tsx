import { StyledTypography } from 'Components/atoms/Typography/Typography.style';
import { useTheme } from 'styled-components';
import { ThemeColorsType, ThemeFontsType } from 'Utils/theme';

export type VariantType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
export type WeightType = '700' | '600' | '500' | '400';

interface ITypographyProps {
  variant?: VariantType;
  color?: ThemeColorsType;
  weight?: WeightType;
  font?: ThemeFontsType;
  children: string;
}

const Typography = ({
  variant = 'h1',
  color = 'blue1',
  weight = '500',
  font = 'poppins',
  children,
}: ITypographyProps) => {
  const { colors, fonts } = useTheme();

  return (
    <StyledTypography font={fonts[font]} weight={weight} variant={variant} color={colors[color]}>
      {children}
    </StyledTypography>
  );
};

export default Typography;
