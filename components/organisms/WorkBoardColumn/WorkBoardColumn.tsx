import AddAnotherButton from 'Components/molecules/AddAnotherButton/AddAnotherButton';
import Card, { ICardProps } from 'Components/molecules/Card/Card';
import ColumnHeader from 'Components/molecules/ColumnHeader/ColumnHeader';
import Multiline from 'Components/molecules/Multiline/Multiline';
import {
  StyledWorkBoardColumn,
  StyledWorkBoardContent,
  StyledWorkBoardMultilineWrapper,
} from 'Components/organisms/WorkBoardColumn/WorkBoardColumn.style';
import { Dispatch, SetStateAction, useState } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

export interface IWorkBoardColumnProps {
  status: string;
  cards: any;
  setCards: Dispatch<SetStateAction<any>>;
  cardIds: number[];
}

const WorkBoardColumn = ({ status, cards, cardIds }: IWorkBoardColumnProps) => {
  const [isMultilineOpen, setIsMultilineOpen] = useState(false);

  return (
    <StyledWorkBoardColumn>
      <ColumnHeader status={status} />
      <Droppable droppableId={status}>
        {(provided, snapshot) => (
          <StyledWorkBoardContent
            {...provided.droppableProps}
            ref={provided.innerRef}
            isHovered={snapshot.isDraggingOver}
          >
            {cardIds
              .map(cardId => cards?.find((card: ICardProps) => card.id === cardId))
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
                        id={card.id}
                        image={card.image}
                        title={card.title}
                        users={card.users}
                        labels={card.labels}
                        messagesCount={card.messagesCount}
                        attachmentsCount={card.attachmentsCount}
                        canAddUser
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
            closeMultiline={() => setIsMultilineOpen(false)}
            buttonText='Save'
            placeholder='Enter a title for this card...'
          />
        </StyledWorkBoardMultilineWrapper>
      )}
      <AddAnotherButton
        text='Add another card'
        onClick={() => setIsMultilineOpen(prevState => !prevState)}
      />
    </StyledWorkBoardColumn>
  );
};

export default WorkBoardColumn;
