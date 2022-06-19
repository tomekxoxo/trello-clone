import AddAnotherButton from 'Components/molecules/AddAnotherButton/AddAnotherButton';
import { StyledWorkBoard } from 'Components/organisms/WorkBoard/WorkBoard.style';
import WorkBoardColumn from 'Components/organisms/WorkBoardColumn/WorkBoardColumn';
import { produce } from 'immer';
import { useEffect, useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

export interface IWorkBoardProps {
  data?: string[];
}

const cardsMock = [
  {
    id: 0,
    image: '/restaurant.jpeg',
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

const columnsMock = [
  { cardIds: [0, 1, 2], status: 'backlog' },
  { cardIds: [], status: 'wip' },
  { cardIds: [], status: 'qa' },
  { cardIds: [], status: 'done' },
];

const WorkBoard = ({ data }: IWorkBoardProps) => {
  console.log(data);
  const [cards, setCards] = useState(cardsMock);
  const [columns, setCloumns] = useState(columnsMock);
  const columnsCount = columns.length + 1;

  const onDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;
    if (!destination?.droppableId) return;

    setCloumns(prevColumns =>
      produce(prevColumns, columns => {
        const indexOfReducedColumn = columns.findIndex(
          column => column.status === source.droppableId,
        );
        columns[indexOfReducedColumn].cardIds.splice(source.index, 1);
        const indexOfGainedColumn = columns.findIndex(
          column => column.status === destination.droppableId,
        );
        columns[indexOfGainedColumn].cardIds.splice(destination.index, 0, +draggableId);
      }),
    );
  };

  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(process.browser);
  }, []);

  return (
    <>
      {isBrowser ? (
        <DragDropContext onDragEnd={onDragEnd}>
          <StyledWorkBoard columnsCount={columnsCount}>
            {columns.map(({ status, cardIds }, index) => (
              <WorkBoardColumn
                key={index}
                status={status}
                cardIds={cardIds}
                cards={cards}
                setCards={setCards}
              />
            ))}
            <AddAnotherButton text='Add another column' />
          </StyledWorkBoard>
        </DragDropContext>
      ) : null}
    </>
  );
};

export default WorkBoard;
