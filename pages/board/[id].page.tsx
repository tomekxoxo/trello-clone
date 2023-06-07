import Button from 'Components/atoms/Button/Button';
import Icon from 'Components/atoms/Icon/Icon';
import BoardNavigation from 'Components/molecules/BoardNavigation/BoardNavigation';
import MenuSidebar from 'Components/organisms/MenuSidebar/MenuSidebar';
import WorkBoard from 'Components/organisms/WorkBoard/WorkBoard';
import { useBoardQuery, useBoardUsersQuery } from 'graphql/generated/hooks';
import { useRouter } from 'next/router';
import { StyledBoard, StyledBoardNavigation } from 'Pages/board/index.style';
import { useState } from 'react';

const Index = () => {
  const [isShowMenuSidebarOpen, setIsShowMenuSidebarOpen] = useState(false);

  const router = useRouter();
  const id = router.query.id as unknown as string;

  const { data: userData } = useBoardUsersQuery({
    variables: {
      boardUsersId: id,
    },
  });

  const { data: boardData } = useBoardQuery({
    variables: {
      boardId: id,
    },
  });

  return (
    <StyledBoard>
      <StyledBoardNavigation>
        {boardData?.board.visibility && (
          <BoardNavigation userData={userData} visibility={boardData?.board.visibility} />
        )}
        <Button
          color='gray3'
          variant='h4'
          backgroundColor='gray6'
          onClick={() => setIsShowMenuSidebarOpen(true)}
          icon={<Icon name='ellipsis' color='gray3' />}
        >
          Show menu
        </Button>
        {isShowMenuSidebarOpen && (
          <MenuSidebar closeSidebar={() => setIsShowMenuSidebarOpen(false)} />
        )}
      </StyledBoardNavigation>
      <WorkBoard />
    </StyledBoard>
  );
};

export default Index;
