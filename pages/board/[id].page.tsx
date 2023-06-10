import Button from 'Components/atoms/Button/Button';
import Icon from 'Components/atoms/Icon/Icon';
import BoardNavigation from 'Components/molecules/BoardNavigation/BoardNavigation';
import MenuSidebar from 'Components/organisms/MenuSidebar/MenuSidebar';
import WorkBoard from 'Components/organisms/WorkBoard/WorkBoard';
import { useBoardQuery, useBoardUsersQuery } from 'graphql/generated/hooks';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/react';
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
        {boardData && <BoardNavigation userData={userData} boardData={boardData} id={id} />}
        <Button
          color='gray3'
          variant='h4'
          backgroundColor='gray6'
          onClick={() => setIsShowMenuSidebarOpen(true)}
          icon={<Icon name='ellipsis' color='gray3' />}
        >
          Show menu
        </Button>
        {isShowMenuSidebarOpen && boardData && (
          <MenuSidebar boardData={boardData} closeSidebar={() => setIsShowMenuSidebarOpen(false)} />
        )}
      </StyledBoardNavigation>
      {boardData && <WorkBoard boardData={boardData} />}
    </StyledBoard>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Index;
