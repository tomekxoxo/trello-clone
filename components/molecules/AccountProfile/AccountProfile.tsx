import Typography from 'Components/atoms/Typography/Typography';
import { StyledAccountProfile } from 'Components/molecules/AccountProfile/AccountProfile.style';
import User from 'Components/molecules/User/User';
import Image from 'next/image';

const AccountProfile = () => {
  const userName = 'Tomasz Kasprowicz';

  return (
    <StyledAccountProfile>
      <User name={userName} />
      <Typography color='gray1' font='notoSans' variant='h4' weight='700'>
        {userName}
      </Typography>
      <Image src='/chevron.svg' alt='Chevron' width={16} height={16} />
    </StyledAccountProfile>
  );
};

export default AccountProfile;
