import { StyledWorkBoard } from 'Components/organisms/WorkBoard/WorkBoard.style';
import WorkBoardColumn from 'Components/organisms/WorkBoardColumn/WorkBoardColumn';
import { useUpdateTaskPositionMutation } from 'graphql/generated/hooks';
import { BoardQuery } from 'graphql/generated/operations';
import { produce } from 'immer';
import { useEffect, useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

export interface WorkBoardProps {
  boardData: BoardQuery;
}

const WorkBoard = ({ boardData }: WorkBoardProps) => {
  const [columns, setCloumns] = useState(boardData.board.columns);
  const columnsCount = columns.length;
  const [updateTaskPosition] = useUpdateTaskPositionMutation();

  const onDragEnd = async (result: DropResult) => {
    const { source, destination, draggableId } = result;
    if (!destination?.droppableId) return;

    setCloumns(prevColumns =>
      produce(prevColumns, proxyColumns => {
        const tasks = columns.reduce((acc, curr) => {
          return acc.concat(curr?.tasks);
        }, []);
        const indexOfReducedColumn = proxyColumns.findIndex(
          column => column?.id === source.droppableId,
        );
        proxyColumns[indexOfReducedColumn]?.tasks.splice(source.index, 1);
        const indexOfGainedColumn = proxyColumns.findIndex(
          column => column?.id === destination.droppableId,
        );
        proxyColumns[indexOfGainedColumn]?.tasks.splice(
          destination.index,
          0,
          tasks.find(task => task.id === draggableId),
        );
      }),
    );

    await updateTaskPosition({
      variables: {
        position: {
          newColumnId: destination.droppableId,
          newIndex: destination.index,
          taskId: draggableId,
        },
      },
    });
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
            {columns.map((column, index) => (
              <WorkBoardColumn
                key={index}
                index={index}
                status={column?.name}
                tasks={column?.tasks}
                boardId={boardData.board.id}
                columnId={column?.id}
              />
            ))}
          </StyledWorkBoard>
        </DragDropContext>
      ) : null}
    </>
  );
};

export default WorkBoard;
