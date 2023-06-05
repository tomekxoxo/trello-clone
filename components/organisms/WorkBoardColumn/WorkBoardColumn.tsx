import AddAnotherButton from 'Components/molecules/AddAnotherButton/AddAnotherButton';
import Card, { CardProps } from 'Components/molecules/Card/Card';
import ColumnHeader from 'Components/molecules/ColumnHeader/ColumnHeader';
import Multiline from 'Components/molecules/Multiline/Multiline';
import CardDetailsModal from 'Components/organisms/CardDetailsModal/CardDetailsModal';
import {
  StyledWorkBoardColumn,
  StyledWorkBoardContent,
  StyledWorkBoardMultilineWrapper,
} from 'Components/organisms/WorkBoardColumn/WorkBoardColumn.style';
import { Dispatch, SetStateAction, useState } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

export interface WorkBoardColumnProps {
  status: string;
  cards: any;
  setCards: Dispatch<SetStateAction<any>>;
  cardIds: number[];
}

const WorkBoardColumn = ({ status, cards, cardIds }: WorkBoardColumnProps) => {
  const [isMultilineOpen, setIsMultilineOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

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
              .map(cardId => cards?.find((card: CardProps) => +card.id === cardId))
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
            onSubmitButtonClick={value => {
              console.log('add', value);
              setIsMultilineOpen(false);
            }}
          />
        </StyledWorkBoardMultilineWrapper>
      )}
      {isDetailsModalOpen && <CardDetailsModal onCloseModal={() => setIsDetailsModalOpen(false)} />}
      <AddAnotherButton
        text='Add another card'
        onClick={() => setIsMultilineOpen(prevState => !prevState)}
      />
    </StyledWorkBoardColumn>
  );
};

export default WorkBoardColumn;
