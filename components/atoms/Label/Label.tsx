import { StyledLabel } from 'Components/atoms/Label/Label.style';
import Typography from 'Components/atoms/Typography/Typography';
import { ColorResult } from 'react-color';

export interface LabelProps {
  name: string;
  color: ColorResult['hex'];
}

const Label = ({ name, color }: LabelProps) => {
  return (
    <StyledLabel color={color}>
      <Typography variant='h5' color='white'>
        {name}
      </Typography>
    </StyledLabel>
  );
};

export default Label;
