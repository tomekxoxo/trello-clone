import Image from 'Components/atoms/Image/Image';
import Label from 'Components/atoms/Label/Label';
import Typography from 'Components/atoms/Typography/Typography';
import {
  StyledCard,
  StyledCardActions,
  StyledCardLabels,
  StyledCardUsers,
} from 'Components/molecules/Card/Card.style';
import ItemCounter from 'Components/molecules/ItemCounter/ItemCounter';
import User from 'Components/molecules/User/User';
import { LabelFragmentFragment, UserFragmentFragment } from 'graphql/generated/operations';
import { ForwardedRef, forwardRef } from 'react';

export interface CardProps {
  image?: string | null;
  title: string;
  labels?: LabelFragmentFragment[];
  users?: UserFragmentFragment[];
  attachmentsCount?: number;
  commentsCount?: number;
  onClick: () => void;
}

const Card = (
  {
    image,
    title,
    users,
    attachmentsCount,
    commentsCount,
    labels,
    onClick,
    ...restProps
  }: CardProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const maxUsers = 3;
  const usersToShow = users
    ?.slice(0, maxUsers)
    .filter((u): u is Exclude<typeof u, null> => Boolean(u));
  const hiddenUsers = users && users?.length - maxUsers;
  const hasAnyHiddenUsers = hiddenUsers && hiddenUsers > 0;
  const hiddenUsersInfo = hasAnyHiddenUsers ? `+ ${hiddenUsers} others` : '';

  return (
    <>
      <StyledCard onClick={onClick} ref={ref} {...restProps}>
        {image && (
          <Image
            width={219}
            height={130}
            src={image}
            alt='restaurant image'
            style={{ objectFit: 'cover' }}
          />
        )}
        <Typography variant='h2' color='dark'>
          {title}
        </Typography>
        {!!labels?.length && (
          <StyledCardLabels>
            {labels
              .filter((l): l is Exclude<typeof l, null> => Boolean(l))
              .map(label => (
                <Label key={label.name} name={label.name} color={label.color} />
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
        </StyledCardUsers>
        {(attachmentsCount || commentsCount) && (
          <StyledCardActions>
            {!!attachmentsCount && <ItemCounter icon='paperclip' count={attachmentsCount} />}
            {!!commentsCount && <ItemCounter icon='message' count={commentsCount} />}
          </StyledCardActions>
        )}
      </StyledCard>
    </>
  );
};

export default forwardRef(Card);
