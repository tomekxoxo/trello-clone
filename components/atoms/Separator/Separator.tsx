import { StyledSeparator } from 'Components/atoms/Separator/Separator.style';
import { useTheme } from 'styled-components';
import { ThemeColorsType } from 'Utils/theme';

interface ISeparator {
  orientation?: 'horizontal' | 'vertical';
  color?: ThemeColorsType;
}

const Separator = ({ orientation = 'vertical', color = 'gray5' }: ISeparator) => {
  const { colors } = useTheme();

  return <StyledSeparator color={colors[color]} orientation={orientation} />;
};

export default Separator;
