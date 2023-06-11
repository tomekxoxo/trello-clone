import Button from 'Components/atoms/Button/Button';
import Icon from 'Components/atoms/Icon/Icon';
import { StyledBoardNavigation } from 'Components/molecules/BoardNavigation/BoardNavigation.style';
import InviteUserPopup from 'Components/molecules/InviteUserPopup/InviteUserPopup';
import User from 'Components/molecules/User/User';
import VisibilityPopup from 'Components/molecules/VisibilityPopup/VisibilityPopup';
import { useChangeBoardVisibilityMutation } from 'graphql/generated/hooks';
import { BoardQuery, BoardUsersQuery } from 'graphql/generated/operations';
import { Visibility } from 'graphql/generated/types';
import useVisibilityPopup from 'Hooks/useVisibilityPopup';
import React, { useState } from 'react';

interface BoardNavigationProps {
  userData: BoardUsersQuery | undefined;
  boardData: BoardQuery;
  id: string;
}

const BoardNavigation = ({ userData, boardData, id }: BoardNavigationProps) => {
  const { chosenOption, setChosenOption } = useVisibilityPopup(boardData.board.visibility);
  const [isInvitationModalOpen, setIsInvitationModalOpen] = useState(false);
  const [changeBoardVisibility] = useChangeBoardVisibilityMutation();

  const handleChange = async (
    option:
      | {
          description: string;
          icon: JSX.Element;
          label: string;
          value: Visibility;
        }
      | undefined,
  ) => {
    if (!option) return null;

    await changeBoardVisibility({
      variables: {
        visbility: {
          id,
          visibility: option?.value,
        },
      },
    });
    setChosenOption(option);
  };
  return (
    <StyledBoardNavigation>
      <VisibilityPopup chosenOption={chosenOption} setChosenOption={handleChange} />
      {boardData.board.users.map((user, index) => {
        if (!user) return;
        return <User key={index} image={user?.image} name={user.name} />;
      })}
      <InviteUserPopup
        boardData={boardData}
        boardId={id}
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
