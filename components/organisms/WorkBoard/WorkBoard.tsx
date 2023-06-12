import { StyledWorkBoard } from 'Components/organisms/WorkBoard/WorkBoard.style';
import WorkBoardColumn from 'Components/organisms/WorkBoardColumn/WorkBoardColumn';
import { useUpdateTaskPositionMutation } from 'graphql/generated/hooks';
import { BoardQuery } from 'graphql/generated/operations';
import { produce } from 'immer';
import { useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

export interface WorkBoardProps {
  boardData: BoardQuery;
}

const WorkBoard = ({ boardData }: WorkBoardProps) => {
  const defaultColumns = boardData.board.columns.filter(
    (c): c is Exclude<typeof c, null> => c !== null,
  );
  const [columns, setCloumns] = useState(defaultColumns);
  const columnsCount = columns.length;
  const [updateTaskPosition] = useUpdateTaskPositionMutation();

  const onDragEnd = async (result: DropResult) => {
    const { source, destination, draggableId } = result;
    if (!destination?.droppableId) return;

    setCloumns(prevColumns =>
      produce(prevColumns, proxyColumns => {
        const tasks = columns.reduce<NonNullable<BoardQuery['board']['columns'][number]>['tasks']>(
          (acc, curr) => {
            const tasks = curr.tasks.filter((t): t is Exclude<typeof t, null> => t !== null);
            return acc.concat(tasks);
          },
          [],
        );
        const indexOfReducedColumn = proxyColumns.findIndex(
          column => column?.id === source.droppableId,
        );

        proxyColumns[indexOfReducedColumn]?.tasks.splice(source.index, 1);

        const indexOfGainedColumn = proxyColumns.findIndex(
          column => column?.id === destination.droppableId,
        );

        const draggedTask = tasks
          .filter((t): t is Exclude<typeof t, null> => t !== null)
          .find(task => task.id === draggableId);

        if (!draggedTask) return;

        proxyColumns[indexOfGainedColumn]?.tasks.splice(destination.index, 0, draggedTask);
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

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <StyledWorkBoard columnsCount={columnsCount}>
        {columns.map((column, index) => {
          const tasks = column?.tasks.filter((t): t is Exclude<typeof t, null> => Boolean(t));

          return (
            <WorkBoardColumn
              key={index}
              index={index}
              status={column?.name}
              tasks={tasks}
              boardId={boardData.board.id}
              columnId={column?.id}
            />
          );
        })}
      </StyledWorkBoard>
    </DragDropContext>
  );
};

export default WorkBoard;
