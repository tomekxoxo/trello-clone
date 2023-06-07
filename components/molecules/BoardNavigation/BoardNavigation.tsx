import { Visibility } from '@prisma/client';
import Button from 'Components/atoms/Button/Button';
import Icon from 'Components/atoms/Icon/Icon';
import { StyledBoardNavigation } from 'Components/molecules/BoardNavigation/BoardNavigation.style';
import InviteUserPopup from 'Components/molecules/InviteUserPopup/InviteUserPopup';
import User from 'Components/molecules/User/User';
import VisibilityPopup from 'Components/molecules/VisibilityPopup/VisibilityPopup';
import { BoardUsersQuery } from 'graphql/generated/operations';
import useVisibilityPopup from 'Hooks/useVisibilityPopup';
import React, { useState } from 'react';

interface BoardNavigationProps {
  userData: BoardUsersQuery | undefined;
  visibility: Visibility;
}

const BoardNavigation = ({ userData, visibility }: BoardNavigationProps) => {
  const { chosenOption, setChosenOption } = useVisibilityPopup(visibility);
  const [isInvitationModalOpen, setIsInvitationModalOpen] = useState(false);

  return (
    <StyledBoardNavigation>
      <VisibilityPopup chosenOption={chosenOption} setChosenOption={setChosenOption} />
      {userData?.boardUsers.map((user, index) => {
        if (!user) return;
        return <User key={index} image={user?.image} name={user.name} />;
      })}
      <InviteUserPopup
        closePopup={() => setIsInvitationModalOpen(false)}
        isOpen={isInvitationModalOpen}
        anchor={
          <Button
            onClick={() => setIsInvitationModalOpen(prevState => !prevState)}
            color='blue1'
            icon={<Icon name='plus' size='12' color='white' />}
          />
        }
      />
    </StyledBoardNavigation>
  );
};

export default BoardNavigation;
