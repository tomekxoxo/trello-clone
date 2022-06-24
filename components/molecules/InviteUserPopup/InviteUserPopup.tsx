import Button from 'Components/atoms/Button/Button';
import Input from 'Components/atoms/Input/Input';
import Typography from 'Components/atoms/Typography/Typography';
import { StyledInviteUserPopup } from 'Components/molecules/InviteUserPopup/InviteUserPopup.style';
import Popup from 'Components/molecules/Popup/Popup';
import PopupHeader from 'Components/molecules/PopupHeader/PopupHeader';

interface IInviteUserPopupProps {
  attachmentSide?: 'left' | 'right';
  isOpen: boolean;
  closePopup: () => void;
  anchor: JSX.Element;
}

const InviteUserPopup = ({
  anchor,
  attachmentSide = 'left',
  closePopup,
  isOpen,
}: IInviteUserPopupProps) => {
  return (
    <Popup anchor={anchor} attachmentSide={attachmentSide} closePopup={closePopup} isOpen={isOpen}>
      <StyledInviteUserPopup>
        <PopupHeader label='Invite to Board ' description='Search users you want to invite to' />
        <Input placeholder='User...' />
        <Button>
          <Typography color='white' variant='h5'>
            Invite
          </Typography>
        </Button>
      </StyledInviteUserPopup>
    </Popup>
  );
};

export default InviteUserPopup;
