import Icon from 'Components/atoms/Icon/Icon';
import { StyledAccountProfile } from 'Components/molecules/AccountProfile/AccountProfile.style';
import User from 'Components/molecules/User/User';

const AccountProfile = () => {
  const userName = 'Tomasz Kasprowicz';

  return (
    <StyledAccountProfile>
      <User name={userName} withName />
      <Icon name='chevron' color='dark' size='16' />
    </StyledAccountProfile>
  );
};

export default AccountProfile;
