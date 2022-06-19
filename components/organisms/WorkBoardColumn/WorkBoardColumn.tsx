import AddAnotherButton from 'Components/molecules/AddAnotherButton/AddAnotherButton';
import Card from 'Components/molecules/Card/Card';
import ColumnHeader from 'Components/molecules/ColumnHeader/ColumnHeader';
import {
  StyledWorkBoardColumn,
  StyledWorkBoardContent,
} from 'Components/organisms/WorkBoardColumn/WorkBoardColumn.style';
import { Dispatch, SetStateAction } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

export interface IWorkBoardColumnProps {
  status: string;
  cards: any;
  setCards: Dispatch<SetStateAction<any>>;
  cardIds: any;
}

const WorkBoardColumn = ({ status, cards, cardIds }: IWorkBoardColumnProps) => {
  return (
    <StyledWorkBoardColumn>
      <ColumnHeader
        status={status}
        onMenuClick={() => {
          return null;
        }}
      />
      <Droppable droppableId={status}>
        {(provided, snapshot) => (
          <StyledWorkBoardContent
            {...provided.droppableProps}
            ref={provided.innerRef}
            isHovered={snapshot.isDraggingOver}
          >
            {cardIds
              .map(cardId => cards?.find(card => card.id === cardId))
              .map((card, index) => {
                if (!card) return;
                return (
                  <Draggable draggableId={card.id.toString()} index={index} key={card.id}>
                    {provided => (
                      <Card
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        key={card.id}
                        image={card.image}
                        title={card.title}
                        users={card.users}
                      />
                    )}
                  </Draggable>
                );
              })}
            {provided.placeholder}
          </StyledWorkBoardContent>
        )}
      </Droppable>
      <AddAnotherButton text='Add another card' />
    </StyledWorkBoardColumn>
  );
};

export default WorkBoardColumn;
