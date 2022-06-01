import Image from 'Components/atoms/Image/Image';
import Typography from 'Components/atoms/Typography/Typography';
import { StyledCard, StyledCardUsers } from 'Components/molecules/Card/Card.style';
import User, { IUserProps } from 'Components/molecules/User/User';

interface ICardProps {
  image?: string;
  title: string;
  users: IUserProps[];
}

const Card = ({ image, title, users }: ICardProps) => {
  const maxUsers = 3;
  const usersToShow = users.slice(0, maxUsers);
  const hiddenUsers = users.length - maxUsers;
  const hasAnyHiddenUsers = hiddenUsers > 0;
  const hiddenUsersInfo = hasAnyHiddenUsers ? `+ ${hiddenUsers} others` : '';

  return (
    <StyledCard>
      {image && <Image width={219} height={130} src={image} alt='restaurant image' />}
      <Typography variant='h2' font='notoSans' color='dark'>
        {title}
      </Typography>
      <StyledCardUsers>
        {usersToShow.map((user, index) => (
          <User key={index} image={user.image} name={user.name} />
        ))}
        <Typography variant='h3' font='notoSans' color='gray4'>
          {hiddenUsersInfo}
        </Typography>
      </StyledCardUsers>
    </StyledCard>
  );
};

export default Card;
