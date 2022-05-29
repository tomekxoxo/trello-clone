import Button from 'Components/atoms/Button/Button';
import Typography from 'Components/atoms/Typography/Typography';
import Card from 'Components/molecules/Card/Card';
import styled from 'styled-components';

export const StyledBoards = styled.div`
  background-color: ${({ theme }) => theme.colors.boardColor};
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  padding: 2.4rem;
`;

export const StyledBoardsHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2.4rem;
`;

export const StyledBoardsList = styled.div`
  display: grid;
  gap: 2.4rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  overflow-y: scroll;
`;

const Boards = () => {
  const mockList = [
    {
      image: '/restaurant.jpeg',
      title: 'Restaurant',
      users: [
        { image: '/user.jpeg', name: 'John Doe' },
        { name: 'Tomasz Kasprowicz' },
        { image: '/user.jpeg', name: 'Mark Black' },
        { image: '/user.jpeg', name: 'Elon Musk' },
        { image: '/user.jpeg', name: 'Marion Cotilard' },
        { image: '/user.jpeg', name: 'Marion Cotilard' },
      ],
    },
    {
      image: '/restaurant.jpeg',
      title: 'Restaurant',
      users: [
        { image: '/user.jpeg', name: 'John Doe' },
        { name: 'Tomasz Kasprowicz' },
        { image: '/user.jpeg', name: 'Mark Black' },
        { image: '/user.jpeg', name: 'Elon Musk' },
        { image: '/user.jpeg', name: 'Marion Cotilard' },
        { image: '/user.jpeg', name: 'Marion Cotilard' },
      ],
    },
    {
      image: '/restaurant.jpeg',
      title: 'Restaurant',
      users: [
        { image: '/user.jpeg', name: 'John Doe' },
        { name: 'Tomasz Kasprowicz' },
        { image: '/user.jpeg', name: 'Mark Black' },
        { image: '/user.jpeg', name: 'Elon Musk' },
        { image: '/user.jpeg', name: 'Marion Cotilard' },
        { image: '/user.jpeg', name: 'Marion Cotilard' },
      ],
    },
    {
      image: '/restaurant.jpeg',
      title: 'Restaurant',
      users: [
        { image: '/user.jpeg', name: 'John Doe' },
        { name: 'Tomasz Kasprowicz' },
        { image: '/user.jpeg', name: 'Mark Black' },
        { image: '/user.jpeg', name: 'Elon Musk' },
        { image: '/user.jpeg', name: 'Marion Cotilard' },
        { image: '/user.jpeg', name: 'Marion Cotilard' },
      ],
    },
    {
      image: '/restaurant.jpeg',
      title: 'Restaurant',
      users: [
        { image: '/user.jpeg', name: 'John Doe' },
        { name: 'Tomasz Kasprowicz' },
        { image: '/user.jpeg', name: 'Mark Black' },
        { image: '/user.jpeg', name: 'Elon Musk' },
        { image: '/user.jpeg', name: 'Marion Cotilard' },
        { image: '/user.jpeg', name: 'Marion Cotilard' },
      ],
    },
    {
      image: '/restaurant.jpeg',
      title: 'Restaurant',
      users: [
        { image: '/user.jpeg', name: 'John Doe' },
        { name: 'Tomasz Kasprowicz' },
        { image: '/user.jpeg', name: 'Mark Black' },
        { image: '/user.jpeg', name: 'Elon Musk' },
        { image: '/user.jpeg', name: 'Marion Cotilard' },
        { image: '/user.jpeg', name: 'Marion Cotilard' },
      ],
    },
    {
      image: '/restaurant.jpeg',
      title: 'Restaurant',
      users: [
        { image: '/user.jpeg', name: 'John Doe' },
        { name: 'Tomasz Kasprowicz' },
        { image: '/user.jpeg', name: 'Mark Black' },
        { image: '/user.jpeg', name: 'Elon Musk' },
        { image: '/user.jpeg', name: 'Marion Cotilard' },
        { image: '/user.jpeg', name: 'Marion Cotilard' },
      ],
    },
    {
      image: '/restaurant.jpeg',
      title: 'Restaurant',
      users: [
        { image: '/user.jpeg', name: 'John Doe' },
        { name: 'Tomasz Kasprowicz' },
        { image: '/user.jpeg', name: 'Mark Black' },
        { image: '/user.jpeg', name: 'Elon Musk' },
        { image: '/user.jpeg', name: 'Marion Cotilard' },
        { image: '/user.jpeg', name: 'Marion Cotilard' },
      ],
    },
    {
      image: '/restaurant.jpeg',
      title: 'Restaurant',
      users: [
        { image: '/user.jpeg', name: 'John Doe' },
        { name: 'Tomasz Kasprowicz' },
        { image: '/user.jpeg', name: 'Mark Black' },
        { image: '/user.jpeg', name: 'Elon Musk' },
        { image: '/user.jpeg', name: 'Marion Cotilard' },
        { image: '/user.jpeg', name: 'Marion Cotilard' },
      ],
    },
    {
      image: '/restaurant.jpeg',
      title: 'Restaurant',
      users: [
        { image: '/user.jpeg', name: 'John Doe' },
        { name: 'Tomasz Kasprowicz' },
        { image: '/user.jpeg', name: 'Mark Black' },
        { image: '/user.jpeg', name: 'Elon Musk' },
        { image: '/user.jpeg', name: 'Marion Cotilard' },
        { image: '/user.jpeg', name: 'Marion Cotilard' },
      ],
    },
    {
      image: '/restaurant.jpeg',
      title: 'Restaurant',
      users: [
        { image: '/user.jpeg', name: 'John Doe' },
        { name: 'Tomasz Kasprowicz' },
        { image: '/user.jpeg', name: 'Mark Black' },
        { image: '/user.jpeg', name: 'Elon Musk' },
        { image: '/user.jpeg', name: 'Marion Cotilard' },
        { image: '/user.jpeg', name: 'Marion Cotilard' },
      ],
    },
    {
      image: '/restaurant.jpeg',
      title: 'Restaurant',
      users: [
        { image: '/user.jpeg', name: 'John Doe' },
        { name: 'Tomasz Kasprowicz' },
        { image: '/user.jpeg', name: 'Mark Black' },
        { image: '/user.jpeg', name: 'Elon Musk' },
        { image: '/user.jpeg', name: 'Marion Cotilard' },
        { image: '/user.jpeg', name: 'Marion Cotilard' },
      ],
    },
    {
      image: '/restaurant.jpeg',
      title: 'Restaurant',
      users: [
        { image: '/user.jpeg', name: 'John Doe' },
        { name: 'Tomasz Kasprowicz' },
        { image: '/user.jpeg', name: 'Mark Black' },
        { image: '/user.jpeg', name: 'Elon Musk' },
        { image: '/user.jpeg', name: 'Marion Cotilard' },
        { image: '/user.jpeg', name: 'Marion Cotilard' },
      ],
    },
    {
      image: '/restaurant.jpeg',
      title: 'Restaurant',
      users: [
        { image: '/user.jpeg', name: 'John Doe' },
        { name: 'Tomasz Kasprowicz' },
        { image: '/user.jpeg', name: 'Mark Black' },
        { image: '/user.jpeg', name: 'Elon Musk' },
        { image: '/user.jpeg', name: 'Marion Cotilard' },
        { image: '/user.jpeg', name: 'Marion Cotilard' },
      ],
    },
    {
      image: '/restaurant.jpeg',
      title: 'Restaurant',
      users: [
        { image: '/user.jpeg', name: 'John Doe' },
        { name: 'Tomasz Kasprowicz' },
        { image: '/user.jpeg', name: 'Mark Black' },
        { image: '/user.jpeg', name: 'Elon Musk' },
        { image: '/user.jpeg', name: 'Marion Cotilard' },
        { image: '/user.jpeg', name: 'Marion Cotilard' },
      ],
    },
    {
      image: '/restaurant.jpeg',
      title: 'Restaurant',
      users: [
        { image: '/user.jpeg', name: 'John Doe' },
        { name: 'Tomasz Kasprowicz' },
        { image: '/user.jpeg', name: 'Mark Black' },
        { image: '/user.jpeg', name: 'Elon Musk' },
        { image: '/user.jpeg', name: 'Marion Cotilard' },
        { image: '/user.jpeg', name: 'Marion Cotilard' },
      ],
    },
    {
      image: '/restaurant.jpeg',
      title: 'Restaurant',
      users: [
        { image: '/user.jpeg', name: 'John Doe' },
        { name: 'Tomasz Kasprowicz' },
        { image: '/user.jpeg', name: 'Mark Black' },
        { image: '/user.jpeg', name: 'Elon Musk' },
        { image: '/user.jpeg', name: 'Marion Cotilard' },
        { image: '/user.jpeg', name: 'Marion Cotilard' },
      ],
    },
    {
      image: '/restaurant.jpeg',
      title: 'Restaurant',
      users: [
        { image: '/user.jpeg', name: 'John Doe' },
        { name: 'Tomasz Kasprowicz' },
        { image: '/user.jpeg', name: 'Mark Black' },
        { image: '/user.jpeg', name: 'Elon Musk' },
        { image: '/user.jpeg', name: 'Marion Cotilard' },
        { image: '/user.jpeg', name: 'Marion Cotilard' },
      ],
    },
  ];
  return (
    <StyledBoards>
      <StyledBoardsHeader>
        <Typography color='dark' variant='h1'>
          All Boards
        </Typography>
        <Button>
          <Typography color='white' variant='h5'>
            Add
          </Typography>
        </Button>
      </StyledBoardsHeader>
      <StyledBoardsList>
        {mockList.map((board, index) => (
          <Card key={index} image={board.image} title={board.title} users={board.users} />
        ))}
      </StyledBoardsList>
    </StyledBoards>
  );
};

export default Boards;
