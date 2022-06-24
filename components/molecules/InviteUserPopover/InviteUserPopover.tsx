import { StyledInviteUserPopover } from 'Components/molecules/InviteUserPopover/InviteUserPopover.style';
import Popover, { IPopoverProps } from 'Components/molecules/Popover/Popover';

interface IInviteUserPopoverProps extends IPopoverProps {
  attachmentSide: 'left' | 'right';
}

const InviteUserPopover = ({ ...restProps }: IInviteUserPopoverProps) => {
  return (
    <Popover {...restProps}>
      <StyledInviteUserPopover>asd</StyledInviteUserPopover>
    </Popover>
  );
};

export default InviteUserPopover;
