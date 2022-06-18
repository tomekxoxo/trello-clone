import Image from 'Components/atoms/Image/Image';
import Typography from 'Components/atoms/Typography/Typography';
import { StyledCard, StyledCardUsers } from 'Components/molecules/Card/Card.style';
import User, { IUserProps } from 'Components/molecules/User/User';
import { ForwardedRef, forwardRef } from 'react';

interface ICardProps {
  image?: string;
  title: string;
  users?: IUserProps[];
}

const Card = (
  { image, title, users, ...restProps }: ICardProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const maxUsers = 3;
  const usersToShow = users?.slice(0, maxUsers);
  const hiddenUsers = users && users?.length - maxUsers;
  const hasAnyHiddenUsers = hiddenUsers && hiddenUsers > 0;
  const hiddenUsersInfo = hasAnyHiddenUsers ? `+ ${hiddenUsers} others` : '';

  return (
    <StyledCard ref={ref} {...restProps}>
      {image && <Image width={219} height={130} src={image} alt='restaurant image' />}
      <Typography variant='h2' font='notoSans' color='dark'>
        {title}
      </Typography>
      <StyledCardUsers>
        {usersToShow?.map((user, index) => (
          <User key={index} image={user.image} name={user.name} />
        ))}
        <Typography variant='h3' font='notoSans' color='gray4'>
          {hiddenUsersInfo}
        </Typography>
      </StyledCardUsers>
    </StyledCard>
  );
};

export default forwardRef(Card);
