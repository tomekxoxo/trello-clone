import Button from 'Components/atoms/Button/Button';
import { StyledAccountProfile } from 'Components/molecules/AccountProfile/AccountProfile.style';
import Typography from 'Components/Typography/Typography';
import Image from 'next/image';
import Chevron from 'Public/chevron.svg';

const AccountProfile = () => {
  return (
    <StyledAccountProfile>
      <Button color='gray4'>
        <Typography color='white' variant='h4'>
          TK
        </Typography>
      </Button>
      <Typography color='gray1' font='notoSans' variant='h4' weight='700'>
        Tomasz Kasprowicz
      </Typography>
      <Image src={Chevron} alt='Chevron' width={16} height={16} />
    </StyledAccountProfile>
  );
};

export default AccountProfile;
