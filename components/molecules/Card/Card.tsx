import Button from 'Components/atoms/Button/Button';
import Icon from 'Components/atoms/Icon/Icon';
import Image from 'Components/atoms/Image/Image';
import Label, { LabelProps } from 'Components/atoms/Label/Label';
import Typography from 'Components/atoms/Typography/Typography';
import {
  StyledCard,
  StyledCardActions,
  StyledCardLabels,
  StyledCardUsers,
} from 'Components/molecules/Card/Card.style';
import ItemCounter from 'Components/molecules/ItemCounter/ItemCounter';
import User, { UserProps } from 'Components/molecules/User/User';
import { ForwardedRef, forwardRef } from 'react';

export interface CardProps {
  image?: string | null;
  title: string;
  labels?: LabelProps[];
  users?: UserProps[];
  canAddUser?: boolean;
  attachmentsCount?: number;
  messagesCount?: number;
  id: string;
  onClick: () => void;
}

const Card = (
  {
    image = '/panorama.svg',
    id,
    title,
    users,
    attachmentsCount,
    messagesCount,
    labels,
    canAddUser,
    onClick,
    ...restProps
  }: CardProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  console.log(id);

  const maxUsers = canAddUser ? 2 : 3;
  const usersToShow = users?.slice(0, maxUsers);
  const hiddenUsers = users && users?.length - maxUsers;
  const hasAnyHiddenUsers = hiddenUsers && hiddenUsers > 0;
  const hiddenUsersInfo = hasAnyHiddenUsers ? `+ ${hiddenUsers} others` : '';

  return (
    <>
      <StyledCard onClick={onClick} ref={ref} {...restProps}>
        {image && (
          <Image width={219} height={130} src={image} alt='restaurant image' objectFit='cover' />
        )}
        <Typography variant='h2' color='dark'>
          {title}
        </Typography>
        {!!labels?.length && (
          <StyledCardLabels>
            {labels.map(label => (
              <Label key={label.name} name={label.name} color='blue2' />
            ))}
          </StyledCardLabels>
        )}
        <StyledCardUsers>
          {usersToShow?.map((user, index) => (
            <User key={index} image={user.image} name={user.name} />
          ))}
          {hiddenUsersInfo && (
            <Typography variant='h3' color='gray4'>
              {hiddenUsersInfo}
            </Typography>
          )}
          {canAddUser && (
            <Button icon={<Icon name='plus' size='12' color='white' />} iconPosition='right' />
          )}
        </StyledCardUsers>
        {(attachmentsCount || messagesCount) && (
          <StyledCardActions>
            {attachmentsCount && <ItemCounter icon='paperclip' count={2} />}
            {messagesCount && <ItemCounter icon='message' count={5} />}
          </StyledCardActions>
        )}
      </StyledCard>
    </>
  );
};

export default forwardRef(Card);
