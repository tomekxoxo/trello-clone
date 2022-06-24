import Button from 'Components/atoms/Button/Button';
import Typography from 'Components/atoms/Typography/Typography';
import { StyledUser, StyledUserImage } from 'Components/molecules/User/User.style';

export interface IUserProps {
  image?: string;
  name: string;
  withName?: boolean;
}

const User = ({ image, name, withName = false }: IUserProps) => {
  const userInitals = name
    .split(' ')
    .map(name => name[0])
    .join('');

  return (
    <StyledUser>
      {image ? (
        <StyledUserImage src={image} alt={name} width='34' height='34' />
      ) : (
        <Button color='gray4'>
          <Typography color='white' variant='h4'>
            {userInitals}
          </Typography>
        </Button>
      )}
      {withName && (
        <Typography color='gray1' font='notoSans' variant='h4' weight='700'>
          {name}
        </Typography>
      )}
    </StyledUser>
  );
};

export default User;
