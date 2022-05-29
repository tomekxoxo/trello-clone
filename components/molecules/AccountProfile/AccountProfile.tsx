import Typography from 'Components/atoms/Typography/Typography';
import User from 'Components/atoms/User/User';
import { StyledAccountProfile } from 'Components/molecules/AccountProfile/AccountProfile.style';
import Image from 'next/image';
import Chevron from 'Public/chevron.svg';

const AccountProfile = () => {
  const userName = 'Tomasz Kasprowicz';

  return (
    <StyledAccountProfile>
      <User name={userName} />
      <Typography color='gray1' font='notoSans' variant='h4' weight='700'>
        {userName}
      </Typography>
      <Image src={Chevron} alt='Chevron' width={16} height={16} />
    </StyledAccountProfile>
  );
};

export default AccountProfile;
