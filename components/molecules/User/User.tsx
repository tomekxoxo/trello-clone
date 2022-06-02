import Button from 'Components/atoms/Button/Button';
import Typography from 'Components/atoms/Typography/Typography';
import { StyledUserImage } from 'Components/molecules/User/User.style';

export interface IUserProps {
  image?: string;
  name: string;
}

const User = ({ image, name }: IUserProps) => {
  const userInitals = name
    .split(' ')
    .map(name => name[0])
    .join('');

  return image ? (
    <StyledUserImage src={image} alt={name} width='34' height='34' />
  ) : (
    <Button color='gray4'>
      <Typography color='white' variant='h4'>
        {userInitals}
      </Typography>
    </Button>
  );
};

export default User;
