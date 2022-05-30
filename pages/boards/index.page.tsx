import Button from 'Components/atoms/Button/Button';
import Modal from 'Components/atoms/Modal/Modal';
import Typography from 'Components/atoms/Typography/Typography';
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

  const openModal = () => setIsModalOpen(true);

  return (
    <StyledBoards>
      <StyledBoardsHeader>
        <Typography color='dark' variant='h1'>
          All Boards
        </Typography>
        <Button onClick={openModal}>
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
      {isModalOpen && (
        <Modal width='307px' closeModal={() => setIsModalOpen(false)}>
          <>asd</>
        </Modal>
      )}
    </StyledBoards>
  );
};

export default Boards;
