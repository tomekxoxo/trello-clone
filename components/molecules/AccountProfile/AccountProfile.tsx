import Button from 'Components/atoms/Button/Button';
import DropdownItem from 'Components/atoms/DropdownItem/DropdownItem';
import Icon from 'Components/atoms/Icon/Icon';
import Popup from 'Components/atoms/Popup/Popup';
import Typography from 'Components/atoms/Typography/Typography';
import { StyledAccountProfile } from 'Components/molecules/AccountProfile/AccountProfile.style';
import User from 'Components/molecules/User/User';
import { signOut, useSession } from 'next-auth/react';
import { useState } from 'react';

const AccountProfile = () => {
  const { data: session } = useSession();

  const userName = session?.user?.name;
  const image = session?.user?.image;
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleLogout = async () => {
    await signOut({ callbackUrl: '/' });
  };

  console.log(useSession());

  return (
    <StyledAccountProfile>
      <User name={userName} withName image={image} />
      <Popup
        anchor={
          <Button
            backgroundColor='transparent'
            color='boardColor'
            onClick={() => setIsPopupOpen(true)}
            icon={<Icon name='chevron' color='dark' />}
          />
        }
        isOpen={isPopupOpen}
        closePopup={() => setIsPopupOpen(false)}
        attachmentSide='right'
      >
        <DropdownItem onClick={handleLogout}>
          <Typography color='gray3' variant='h4'>
            Logout
          </Typography>
        </DropdownItem>
      </Popup>
    </StyledAccountProfile>
  );
};

export default AccountProfile;
