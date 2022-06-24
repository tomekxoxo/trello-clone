import Typography from 'Components/atoms/Typography/Typography';
import { StyledPopoverHeader } from 'Components/molecules/PopoverHeader/PopoverHeader.style';

interface IPopoverHeaderProps {
  label: string;
  description: string;
}

const PopoverHeader = ({ label, description }: IPopoverHeaderProps) => {
  return (
    <StyledPopoverHeader>
      <Typography variant='h4' color='gray2' weight='600'>
        {label}
      </Typography>
      <Typography variant='h4' font='notoSans' color='gray3' weight='400'>
        {description}
      </Typography>
    </StyledPopoverHeader>
  );
};

export default PopoverHeader;
