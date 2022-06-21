import Typography from 'Components/atoms/Typography/Typography';
import { StyledDropdownHeader } from 'Components/molecules/DropdownHeader/DropdownHeader.style';

interface IDropdownHeaderProps {
  label: string;
  description: string;
}

const DropdownHeader = ({ label, description }: IDropdownHeaderProps) => {
  return (
    <StyledDropdownHeader>
      <Typography variant='h4' color='gray2' weight='600'>
        {label}
      </Typography>
      <Typography variant='h4' font='notoSans' color='gray3' weight='400'>
        {description}
      </Typography>
    </StyledDropdownHeader>
  );
};

export default DropdownHeader;
