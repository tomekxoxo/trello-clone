import { StyledWorkBoard } from 'Components/organisms/WorkBoard/WorkBoard.style';
import WorkBoardColumn from 'Components/organisms/WorkBoardColumn/WorkBoardColumn';

export interface IWorkBoardProps {
  data?: any;
}

const WorkBoard = ({ data }: IWorkBoardProps) => {
  console.log(data);
  const columnsMock = [
    { id: '1', name: 'Backlog 🤯' },
    { id: '2', name: 'In Progress' },
    { id: '3', name: 'QA review' },
    { id: '4', name: 'DONE' },
  ];
  return (
    <StyledWorkBoard>
      {columnsMock.map(({ name, id }) => (
        <WorkBoardColumn name={name} key={id} />
      ))}
    </StyledWorkBoard>
  );
};

export default WorkBoard;
