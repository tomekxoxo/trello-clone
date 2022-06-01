import Button from 'Components/atoms/Button/Button';
import Icon from 'Components/atoms/Icon/Icon';
import Typography from 'Components/atoms/Typography/Typography';
import AddBoardModal from 'Components/molecules/AddBoardModal/AddBoardModal';
import Card from 'Components/molecules/Card/Card';
import { StyledBoards, StyledBoardsHeader, StyledBoardsList } from 'Pages/boards/index.style';
import { useState } from 'react';

const Boards = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const mockList = [
    {
      image: '/restaurant.jpeg',
      title: 'Restaurant',
      users: [
        { image: '/user.jpeg', name: 'John Doe' },
        { name: 'Tomasz Kasprowicz' },
        { image: '/user.jpeg', name: 'Mark Black' },
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

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <StyledBoards>
      <StyledBoardsHeader>
        <Typography color='dark' variant='h1'>
          All Boards
        </Typography>
        <Button onClick={openModal} icon={<Icon name='plus' color='white' />}>
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
      {isModalOpen && <AddBoardModal closeModal={closeModal} />}
    </StyledBoards>
  );
};

export default Boards;
