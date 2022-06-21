import { StyledLabel } from 'Components/atoms/Label/Label.style';
import Typography from 'Components/atoms/Typography/Typography';
import { useTheme } from 'styled-components';
import { ThemeColorsType } from 'Utils/theme';

export interface ILabelProps {
  name: string;
  color: ThemeColorsType;
}

const Label = ({ name, color = 'brightYellow' }: ILabelProps) => {
  const { colors } = useTheme();

  return (
    <StyledLabel color={colors[color]}>
      <Typography font='notoSans' variant='h5' color='yellow'>
        {name}
      </Typography>
    </StyledLabel>
  );
};

export default Label;
