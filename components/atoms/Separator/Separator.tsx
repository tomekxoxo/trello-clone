import { StyledSeparator } from 'Components/atoms/Separator/Separator.style';
import { useTheme } from 'styled-components';
import { ThemeColorsType } from 'Utils/theme';

export type OrientationType = 'vertical' | 'horizontal';

interface ISeparatorProps {
  orientation?: OrientationType;
  color?: ThemeColorsType;
}

const Separator = ({ orientation = 'vertical', color = 'gray5' }: ISeparatorProps) => {
  const { colors } = useTheme();

  return <StyledSeparator color={colors[color]} orientation={orientation} />;
};

export default Separator;
