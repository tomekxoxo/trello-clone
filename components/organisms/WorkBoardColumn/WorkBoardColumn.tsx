import Card from 'Components/molecules/Card/Card';
import ColumnHeader from 'Components/molecules/ColumnHeader/ColumnHeader';
import { StyledWorkBoardColumn } from 'Components/organisms/WorkBoardColumn/WorkBoardColumn.style';
import update from 'immutability-helper';
import { useCallback, useState } from 'react';

export interface IWorkBoardColumnProps {
  status: string;
}

const cardsMock = [
  {
    id: 0,
    image: '/restaurant.jpeg',
    status: 'wip',
    title: 'Restaurant1',
    users: [
      { image: '/user.jpeg', name: 'John Doe' },
      { name: 'Tomasz Kasprowicz' },
      { image: '/user.jpeg', name: 'Mark Black' },
    ],
  },
  {
    id: 1,
    image: '/restaurant.jpeg',
    status: 'wip',
    title: 'Restaurant2',
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
    id: 2,
    image: '/restaurant.jpeg',
    status: 'wip',
    title: 'Restaurant3',
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

const WorkBoardColumn = ({ status }: IWorkBoardColumnProps) => {
  const [state, setState] = useState(cardsMock);

  const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
    console.log(hoverIndex);
    setState(prevState =>
      update(prevState, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevState[dragIndex]],
        ],
      }),
    );
  }, []);

  return (
    <StyledWorkBoardColumn>
      <ColumnHeader
        status={status}
        onMenuClick={() => {
          return null;
        }}
      />
      {state
        .filter(card => card.status === status)
        .map((card, index) => (
          <Card
            index={index}
            moveCard={moveCard}
            key={card.id}
            image={card.image}
            title={card.title}
            users={card.users}
            id={card.id}
          />
        ))}
    </StyledWorkBoardColumn>
  );
};

export default WorkBoardColumn;
