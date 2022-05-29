import { StyledSeparator } from 'Components/atoms/Separator/Separator.style';
import { useTheme } from 'styled-components';
import { ThemeColorsType } from 'Utils/theme';

interface ISeparatorProps {
  orientation?: 'horizontal' | 'vertical';
  color?: ThemeColorsType;
}

const Separator = ({ orientation = 'vertical', color = 'gray5' }: ISeparatorProps) => {
  const { colors } = useTheme();

  return <StyledSeparator color={colors[color]} orientation={orientation} />;
};

export default Separator;
