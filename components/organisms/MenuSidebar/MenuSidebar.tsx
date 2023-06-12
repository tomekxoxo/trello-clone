import Button from 'Components/atoms/Button/Button';
import Icon from 'Components/atoms/Icon/Icon';
import Separator from 'Components/atoms/Separator/Separator';
import Typography from 'Components/atoms/Typography/Typography';
import Multiline from 'Components/molecules/Multiline/Multiline';
import SidebarSectionHeader from 'Components/molecules/SidebarSectionHeader/SidebarSectionHeader';
import SidebarTeamMember from 'Components/molecules/SidebarTeamMember/SidebarTeamMember';
import {
  StyledMenuSidebar,
  StyledMenuSidebarContent,
  StyledMenuSidebarHeader,
} from 'Components/organisms/MenuSidebar/MenuSidebar.style';
import {
  useRemoveUserFromBoardMutation,
  useUpdateBoardDescriptionMutation,
} from 'graphql/generated/hooks';
import { BoardQuery } from 'graphql/generated/operations';
import useClickOutside from 'Hooks/useClickOutside';
import { useRef } from 'react';

interface MenuSidebarProps {
  closeSidebar: () => void;
  boardData: BoardQuery;
}

const MenuSidebar = ({ closeSidebar, boardData }: MenuSidebarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, closeSidebar);

  const [updateBoardDescription] = useUpdateBoardDescriptionMutation();

  const onChangeDescription = async (value: string) => {
    await updateBoardDescription({
      refetchQueries: 'active',
      variables: {
        board: {
          boardId: boardData.board.id,
          description: value,
        },
      },
    });
  };

  const [removeUserFromBoard] = useRemoveUserFromBoardMutation();

  const onRemoveMember = async (userId: string) => {
    await removeUserFromBoard({
      refetchQueries: 'active',
      variables: {
        board: {
          boardId: boardData.board.id,
          userId,
        },
      },
    });
  };

  return (
    <StyledMenuSidebar ref={ref}>
      <StyledMenuSidebarHeader>
        <Typography color='gray1' weight='600' variant='h4'>
          Menu
        </Typography>
        <Button
          onClick={closeSidebar}
          backgroundColor='white'
          icon={<Icon name='xmark' color='gray1' />}
        />
      </StyledMenuSidebarHeader>
      <Separator orientation='horizontal' />
      <StyledMenuSidebarContent>
        <SidebarSectionHeader
          title='Made by'
          iconName='user'
          description={boardData.board.owner.name}
        />
        <SidebarSectionHeader
          title='Made on'
          iconName='calendar'
          description={new Date(Number(boardData.board.createdAt)).toDateString()}
        />
        <SidebarSectionHeader title='Description' iconName='file-lines' />
        <Multiline
          height='30rem'
          defaultValue={boardData.board.description || ''}
          submitButtonText='Save'
          secondButtonText='Cancel'
          onSubmitButtonClick={onChangeDescription}
        />
        <SidebarSectionHeader title='Team' iconName='file-lines' />
        {boardData.board.users.map(user => {
          const isOwner = user?.id === boardData.board.ownerId;

          if (!user?.id) return null;

          return (
            <SidebarTeamMember
              key={user?.id}
              userImage={user?.image}
              userName={user?.name}
              isOwner={isOwner}
              removeMember={() => onRemoveMember(user?.id)}
            />
          );
        })}
      </StyledMenuSidebarContent>
    </StyledMenuSidebar>
  );
};

export default MenuSidebar;
