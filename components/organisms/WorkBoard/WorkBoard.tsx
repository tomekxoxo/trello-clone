import AddAnotherButton from 'Components/molecules/AddAnotherButton/AddAnotherButton';
import { StyledWorkBoard } from 'Components/organisms/WorkBoard/WorkBoard.style';
import WorkBoardColumn from 'Components/organisms/WorkBoardColumn/WorkBoardColumn';
import { produce } from 'immer';
import { useEffect, useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

export interface WorkBoardProps {
  data?: string[];
}

const cardsMock = [
  {
    id: 0,
    labels: [
      { color: 'black', name: 'label1' },
      { color: 'green', name: 'label2' },
    ],
    title: 'Restaurant1',
    users: [],
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
    attachmentsCount: 3,
    id: 2,
    image: '/restaurant.jpeg',
    messagesCount: 8,
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
  {
    attachmentsCount: 31,
    id: 3,
    image: '/restaurant.jpeg',
    messagesCount: 42,
    title: 'Restaurant4',
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
    attachmentsCount: 8,
    id: 4,
    image: '/restaurant.jpeg',
    messagesCount: 4,
    title: 'Restaurant5',
    users: [],
  },
  {
    attachmentsCount: 10,
    id: 5,
    image: '/restaurant.jpeg',
    messagesCount: 41,
    title: 'Restaurant6',
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
  { cardIds: [0, 1, 2, 3, 4, 5], status: 'backlog' },
  { cardIds: [], status: 'wip' },
  { cardIds: [], status: 'qa' },
  { cardIds: [], status: 'done' },
];

const WorkBoard = ({ data }: WorkBoardProps) => {
  const [cards, setCards] = useState(cardsMock);
  const [columns, setCloumns] = useState(columnsMock);
  const columnsCount = columns.length + 1;

  console.log(data);

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
