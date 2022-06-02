import Card from 'Components/molecules/Card/Card';
import ColumnHeader from 'Components/molecules/ColumnHeader/ColumnHeader';
import { StyledWorkBoardColumn } from 'Components/organisms/WorkBoardColumn/WorkBoardColumn.style';

export interface IWorkBoardColumnProps {
  name: string;
}

const WorkBoardColumn = ({ name }: IWorkBoardColumnProps) => {
  const cardsMock = [
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
  ];

  return (
    <StyledWorkBoardColumn>
      <ColumnHeader
        name={name}
        onMenuClick={() => {
          return null;
        }}
      />
      {cardsMock.map((card, index) => (
        <Card key={index} image={card.image} title={card.title} users={card.users} />
      ))}
    </StyledWorkBoardColumn>
  );
};

export default WorkBoardColumn;
