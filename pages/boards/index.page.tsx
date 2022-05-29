import Button from 'Components/atoms/Button/Button';
import Typography from 'Components/atoms/Typography/Typography';
import Card from 'Components/molecules/Card/Card';
import { StyledBoards, StyledBoardsHeader, StyledBoardsList } from 'Pages/boards/index.style';

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

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default Boards;
