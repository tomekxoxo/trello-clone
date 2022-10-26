import Typography from 'Components/atoms/Typography/Typography';
import { StyledPopupHeader } from 'Components/molecules/PopupHeader/PopupHeader.style';

interface PopupHeaderProps {
  label: string;
  description: string;
}

const PopupHeader = ({ label, description }: PopupHeaderProps) => (
  <StyledPopupHeader>
    <Typography variant='h4' color='gray2' weight='600'>
      {label}
    </Typography>
    <Typography variant='h4' color='gray3' weight='400'>
      {description}
    </Typography>
  </StyledPopupHeader>
);

export default PopupHeader;
