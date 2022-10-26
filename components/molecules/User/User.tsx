import Button from 'Components/atoms/Button/Button';
import Typography from 'Components/atoms/Typography/Typography';
import { StyledUser, StyledUserImage } from 'Components/molecules/User/User.style';

export interface UserProps {
  image?: string;
  name: string;
  withName?: boolean;
}

const User = ({ image, name, withName = false }: UserProps) => {
  const userInitals = name
    .split(' ')
    .map(name => name[0])
    .join('');

  return (
    <StyledUser>
      {image ? (
        <StyledUserImage src={image} alt={name} width='32' height='32' />
      ) : (
        <Button variant='h4' backgroundColor='gray4'>
          {userInitals}
        </Button>
      )}
      {withName && (
        <Typography color='gray1' variant='h4' weight='700'>
          {name}
        </Typography>
      )}
    </StyledUser>
  );
};

export default User;
