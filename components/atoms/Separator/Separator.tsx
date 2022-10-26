import { StyledSeparator } from 'Components/atoms/Separator/Separator.style';
import { useTheme } from 'styled-components';
import { ThemeColors } from 'Utils/theme';

export type Orientation = 'vertical' | 'horizontal';

interface SeparatorProps {
  orientation?: Orientation;
  color?: ThemeColors;
}

const Separator = ({ orientation = 'vertical', color = 'gray5' }: SeparatorProps) => {
  const { colors } = useTheme();

  return <StyledSeparator color={colors[color]} orientation={orientation} />;
};

export default Separator;
