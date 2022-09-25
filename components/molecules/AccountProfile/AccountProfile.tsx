// import DropdownItem from 'Components/atoms/DropdownItem/DropdownItem';
// import Icon from 'Components/atoms/Icon/Icon';
// import Popup from 'Components/atoms/Popup/Popup';
// import Typography from 'Components/atoms/Typography/Typography';
import { StyledAccountProfile } from 'Components/molecules/AccountProfile/AccountProfile.style';
import User from 'Components/molecules/User/User';
// import { useState } from 'react';

const AccountProfile = () => {
  const userName = 'Tomasz Kasprowicz';
  // const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <StyledAccountProfile>
      <User name={userName} withName />
      {/* <Popup
        anchor={<Icon name='chevron' color='dark' size='16' onClick={() => setIsPopupOpen(true)} />}
        isOpen={isPopupOpen}
        closePopup={() => setIsPopupOpen(false)}
        attachmentSide='right'
      >
        <DropdownItem>
          <Typography color='gray3' variant='h4'>
            Logout
          </Typography>
        </DropdownItem>
      </Popup> */}
    </StyledAccountProfile>
  );
};

export default AccountProfile;
