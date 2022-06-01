import Icon from 'Components/atoms/Icon/Icon';
import Typography from 'Components/atoms/Typography/Typography';
import { StyledAccountProfile } from 'Components/molecules/AccountProfile/AccountProfile.style';
import User from 'Components/molecules/User/User';

const AccountProfile = () => {
  const userName = 'Tomasz Kasprowicz';

  return (
    <StyledAccountProfile>
      <User name={userName} />
      <Typography color='gray1' font='notoSans' variant='h4' weight='700'>
        {userName}
      </Typography>
      <Icon name='chevron' color='dark' size='16' />
    </StyledAccountProfile>
  );
};

export default AccountProfile;
