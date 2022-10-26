import { StyledLabel } from 'Components/atoms/Label/Label.style';
import Typography from 'Components/atoms/Typography/Typography';
import { useTheme } from 'styled-components';
import { ThemeColors } from 'Utils/theme';

export interface LabelProps {
  name: string;
  color: ThemeColors;
}

const Label = ({ name, color = 'brightYellow' }: LabelProps) => {
  const { colors } = useTheme();

  return (
    <StyledLabel color={colors[color]}>
      <Typography variant='h5' color='yellow'>
        {name}
      </Typography>
    </StyledLabel>
  );
};

export default Label;
