import ColumnHeader from 'Components/molecules/ColumnHeader/ColumnHeader';
import { StyledWorkBoardColumn } from 'Components/organisms/WorkBoardColumn/WorkBoardColumn.style';

export interface IWorkBoardColumnProps {
  name: string;
}

const WorkBoardColumn = ({ name }: IWorkBoardColumnProps) => {
  return (
    <StyledWorkBoardColumn>
      <ColumnHeader
        name={name}
        onMenuClick={() => {
          return null;
        }}
      />
    </StyledWorkBoardColumn>
  );
};

export default WorkBoardColumn;
