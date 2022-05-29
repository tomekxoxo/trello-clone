import Button from 'Components/atoms/Button/Button';
import Typography from 'Components/atoms/Typography/Typography';
import { StyledAccountProfile } from 'Components/molecules/AccountProfile/AccountProfile.style';
import Image from 'next/image';
import Chevron from 'Public/chevron.svg';

const AccountProfile = () => {
  const userInitials = 'TK';
  const userName = 'Tomasz Kasprowicz';

  return (
    <StyledAccountProfile>
      <Button color='gray4'>
        <Typography color='white' variant='h4'>
          {userInitials}
        </Typography>
      </Button>
      <Typography color='gray1' font='notoSans' variant='h4' weight='700'>
        {userName}
      </Typography>
      <Image src={Chevron} alt='Chevron' width={16} height={16} />
    </StyledAccountProfile>
  );
};

export default AccountProfile;
