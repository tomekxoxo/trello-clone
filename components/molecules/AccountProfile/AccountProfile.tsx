import Icon from 'Components/atoms/Icon/Icon';
import Popup from 'Components/atoms/Popup/Popup';
import { StyledAccountProfile } from 'Components/molecules/AccountProfile/AccountProfile.style';
import User from 'Components/molecules/User/User';
import VisibilityItem from 'Components/molecules/VisibilityItem/VisibilityItem';
import { useState } from 'react';

const AccountProfile = () => {
  const userName = 'Tomasz Kasprowicz';
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <StyledAccountProfile>
      <User name={userName} withName />
      <Popup
        anchor={<Icon name='chevron' color='dark' size='16' onClick={() => setIsPopupOpen(true)} />}
        isOpen={isPopupOpen}
        closePopup={() => setIsPopupOpen(false)}
        attachmentSide='right'
      >
        <VisibilityItem label='Logout' labelColor='gray3' />
      </Popup>
    </StyledAccountProfile>
  );
};

export default AccountProfile;
