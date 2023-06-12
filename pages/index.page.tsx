import Button from 'Components/atoms/Button/Button';
import Icon from 'Components/atoms/Icon/Icon';
import Typography from 'Components/atoms/Typography/Typography';
import Card from 'Components/molecules/Card/Card';
import AddBoardModal from 'Components/organisms/AddBoardModal/AddBoardModal';
import { useBoardsQuery } from 'graphql/generated/hooks';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/react';
import { StyledBoards, StyledBoardsHeader, StyledBoardsList } from 'Pages/index.style';
import { useState } from 'react';

const Boards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data } = useBoardsQuery();
  const router = useRouter();

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <StyledBoards>
      <StyledBoardsHeader>
        <Typography color='dark' variant='h1'>
          All Boards
        </Typography>
        <Button onClick={openModal} icon={<Icon name='plus' color='white' />} variant='h5'>
          Create Board
        </Button>
      </StyledBoardsHeader>
      <StyledBoardsList>
        {data?.boards.map(board => {
          if (!board) return null;
          const filteredUsers = board.users.filter((l): l is Exclude<typeof l, null> => Boolean(l));
          return (
            <Card
              key={board.id}
              image={board.image || undefined}
              title={board.name}
              users={filteredUsers}
              onClick={() => router.push(`/board/${board.id}`)}
            />
          );
        })}
      </StyledBoardsList>
      {isModalOpen && <AddBoardModal closeModal={closeModal} />}
    </StyledBoards>
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

export default Boards;
