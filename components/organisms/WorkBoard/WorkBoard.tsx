import { StyledWorkBoard } from 'Components/organisms/WorkBoard/WorkBoard.style';
import WorkBoardColumn from 'Components/organisms/WorkBoardColumn/WorkBoardColumn';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export interface IWorkBoardProps {
  data?: string[];
}

const WorkBoard = ({ data }: IWorkBoardProps) => {
  console.log(data);
  const columnsMock = [
    { id: '1', status: 'backlog 🤯' },
    { id: '2', status: 'wip' },
    { id: '3', status: 'qa' },
    { id: '4', status: 'done' },
  ];
  return (
    <DndProvider backend={HTML5Backend}>
      <StyledWorkBoard>
        {columnsMock.map(({ status, id }) => (
          <WorkBoardColumn status={status} key={id} />
        ))}
      </StyledWorkBoard>
    </DndProvider>
  );
};

export default WorkBoard;
