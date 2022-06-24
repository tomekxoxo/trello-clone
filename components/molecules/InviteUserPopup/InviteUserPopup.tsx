import { StyledInviteUserPopup } from 'Components/molecules/InviteUserPopup/InviteUserPopup.style';
import Popup, { IPopupProps } from 'Components/molecules/Popup/Popup';

interface IInviteUserPopupProps extends IPopupProps {
  attachmentSide: 'left' | 'right';
}

const InviteUserPopup = ({ ...restProps }: IInviteUserPopupProps) => {
  return (
    <Popup {...restProps}>
      <StyledInviteUserPopup>asd</StyledInviteUserPopup>
    </Popup>
  );
};

export default InviteUserPopup;
