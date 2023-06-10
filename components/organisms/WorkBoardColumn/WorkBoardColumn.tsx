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
import { useState } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

export interface WorkBoardColumnProps {
  status: string;
  tasks: number[];
  index: number;
  boardId: string;
  columnId: string;
}

const WorkBoardColumn = ({ status, columnId, boardId, tasks, index }: WorkBoardColumnProps) => {
  const [isMultilineOpen, setIsMultilineOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

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
                  {provided => (
                    <Card
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      key={task.id}
                      id={task.id}
                      image={task?.image}
                      title={task.name}
                      // users={card.users}
                      labels={task.labels}
                      // messagesCount={card.messagesCount}
                      // attachmentsCount={card.attachmentsCount}
                      canAddUser
                      onClick={() => setIsDetailsModalOpen(true)}
                    />
                  )}
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
      {isDetailsModalOpen && <CardDetailsModal onCloseModal={() => setIsDetailsModalOpen(false)} />}
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
