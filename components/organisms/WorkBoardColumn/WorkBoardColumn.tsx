import AddAnotherButton from 'Components/molecules/AddAnotherButton/AddAnotherButton';
import Card from 'Components/molecules/Card/Card';
import ColumnHeader from 'Components/molecules/ColumnHeader/ColumnHeader';
import Multiline from 'Components/molecules/Multiline/Multiline';
import CardDetailsModal from 'Components/organisms/CardDetailsModal/CardDetailsModal';
import {
  StyledWorkBoardColumn,
  StyledWorkBoardContent,
  StyledWorkBoardMultilineWrapper,
} from 'Components/organisms/WorkBoardColumn/WorkBoardColumn.style';
import { useAddTaskMutation } from 'graphql/generated/hooks';
import { TaskFragmentFragment } from 'graphql/generated/operations';
import { useState } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

export interface WorkBoardColumnProps {
  status: string;
  tasks: TaskFragmentFragment[];
  index: number;
  boardId: string;
  columnId: string;
}

const WorkBoardColumn = ({ status, columnId, boardId, tasks, index }: WorkBoardColumnProps) => {
  const [isMultilineOpen, setIsMultilineOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [detailsCardId, setDetailsCardId] = useState('');

  const [AddTask] = useAddTaskMutation();

  const onAddTask = async (name: string) => {
    await AddTask({
      refetchQueries: 'active',
      variables: {
        task: {
          boardId,
          columnId,
          name,
        },
      },
    });
    setIsMultilineOpen(false);
  };

  const onClickCard = (id: string) => {
    setIsDetailsModalOpen(true);
    setDetailsCardId(id);
  };

  const onCloseCardDetails = () => {
    setIsDetailsModalOpen(false);
    setDetailsCardId('');
  };

  return (
    <StyledWorkBoardColumn>
      <ColumnHeader status={status} />
      <Droppable droppableId={columnId}>
        {(provided, snapshot) => (
          <StyledWorkBoardContent
            {...provided.droppableProps}
            ref={provided.innerRef}
            isHovered={snapshot.isDraggingOver}
          >
            {tasks.map((task, index) => {
              if (!task) return;
              return (
                <Draggable draggableId={task.id} index={index} key={task.id}>
                  {provided => {
                    const commentUsers = task.comments
                      ?.filter((c): c is Exclude<typeof c, null> => c !== null)
                      ?.map(comment => comment.user);
                    const reducedUsers = Array.from(new Set(commentUsers?.map(user => user.id)))
                      .filter((c): c is Exclude<typeof c, null> => !!c)
                      .map(id => commentUsers?.find(u => u.id === id))
                      .filter((user): user is NonNullable<typeof user> => user !== undefined);
                    const labels = task.labels?.filter(
                      (l): l is Exclude<typeof l, null> => l !== null,
                    );

                    return (
                      <Card
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        key={task.id}
                        image={task?.image}
                        title={task.name}
                        users={reducedUsers}
                        labels={labels}
                        commentsCount={task.comments?.length}
                        attachmentsCount={4}
                        onClick={() => onClickCard(task.id)}
                      />
                    );
                  }}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </StyledWorkBoardContent>
        )}
      </Droppable>
      {isMultilineOpen && (
        <StyledWorkBoardMultilineWrapper>
          <Multiline
            submitButtonText='Save'
            placeholder='Enter a title for this card...'
            defaultValue=''
            onSubmitButtonClick={onAddTask}
            onClickOutside={() => setIsMultilineOpen(false)}
          />
        </StyledWorkBoardMultilineWrapper>
      )}
      {isDetailsModalOpen && detailsCardId && (
        <CardDetailsModal id={detailsCardId} onCloseModal={onCloseCardDetails} />
      )}
      {index === 0 && (
        <AddAnotherButton
          text='Add another card'
          onClick={() => setIsMultilineOpen(prevState => !prevState)}
        />
      )}
    </StyledWorkBoardColumn>
  );
};

export default WorkBoardColumn;
