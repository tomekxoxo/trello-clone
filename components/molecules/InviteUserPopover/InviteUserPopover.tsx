import Button from 'Components/atoms/Button/Button';
import Input from 'Components/atoms/Input/Input';
import Typography from 'Components/atoms/Typography/Typography';
import { StyledInviteUserPopover } from 'Components/molecules/InviteUserPopover/InviteUserPopover.style';
import Popover from 'Components/molecules/Popover/Popover';
import PopoverHeader from 'Components/molecules/PopoverHeader/PopoverHeader';

interface IInviteUserPopoverProps {
  attachmentSide?: 'left' | 'right';
  isOpen: boolean;
  closePopover: () => void;
  anchor: JSX.Element;
}

const InviteUserPopover = ({
  anchor,
  attachmentSide = 'left',
  closePopover,
  isOpen,
}: IInviteUserPopoverProps) => {
  return (
    <Popover
      anchor={anchor}
      attachmentSide={attachmentSide}
      closePopover={closePopover}
      isOpen={isOpen}
    >
      <StyledInviteUserPopover>
        <PopoverHeader label='Invite to Board ' description='Search users you want to invite to' />
        <Input placeholder='User...' />
        <Button>
          <Typography color='white' variant='h5'>
            Invite
          </Typography>
        </Button>
      </StyledInviteUserPopover>
    </Popover>
  );
};

export default InviteUserPopover;
