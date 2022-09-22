import FileButton from 'Components/atoms/FileButton/FileButton';
import Icon from 'Components/atoms/Icon/Icon';
import Image from 'Components/atoms/Image/Image';
import Modal from 'Components/atoms/Modal/Modal';
import Typography from 'Components/atoms/Typography/Typography';
import Attachment from 'Components/molecules/Attachment/Attachment';
import Comment from 'Components/molecules/Comment/Comment';
import CoverPopup from 'Components/molecules/CoverPopup/CoverPopup';
import Multiline from 'Components/molecules/Multiline/Multiline';
import SidebarSectionHeader from 'Components/molecules/SidebarSectionHeader/SidebarSectionHeader';
import {
  StyledCardDetailsAsideSection,
  StyledCardDetailsAttachmentSection,
  StyledCardDetailsCommentsSection,
  StyledCardDetailsInfoSection,
  StyledCardDetailsMainSection,
  StyledCardDetailsModal,
} from 'Components/organisms/CardDetailsModal/CardDetailsModal.style';
import { useState } from 'react';

export interface ICardDetailsModalProps {
  onCloseModal: () => void;
}

const title = '✋🏿 Move anything that is actually started here';

const mockDescription = `Ideas are created and share here through a card. 
Here you can describe what you'd like to accomplish.
For example you can follow three simple questions to create the card related to your idea:

  * Why  ? (Why do you wish to do it ?)
  * What ? (What it  is it, what are the goals, who is concerned)
  * How  ? (How do you think you can do it ? What are the required steps ?)

After creation, you can move your card to the todo list.`;

const attachmentsMock = [
  {
    date: 'Added July 5, 2020',
    image: '/wayne-bishop-7YUW7fvIYoQ-unsplash.jpg',
    title: 'Reasoning by Ranganath t',
  },
  {
    date: 'Added July 2, 2020',
    title: 'Reasoning by Ranganath k',
  },
  {
    date: 'Added July 1, 2020',
    title: 'Reasoning by Ranganath a',
  },
];

const commentsMock = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet',

  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet',
];

const CardDetailsModal = ({ onCloseModal }: ICardDetailsModalProps) => {
  const [cover, setCover] = useState('/wayne-bishop-7YUW7fvIYoQ-unsplash.jpg');

  return (
    <Modal closeModal={onCloseModal} width='66rem'>
      <StyledCardDetailsModal>
        {cover && <Image width={612} height={130} src={cover} alt='thumbnail' objectFit='cover' />}
        <StyledCardDetailsInfoSection>
          <StyledCardDetailsMainSection>
            <Typography weight='400' color='dark' variant='h2'>
              {title}
            </Typography>
            <SidebarSectionHeader title='Status' description='Backlog' />
            <SidebarSectionHeader title='Description' iconName='file-lines' />
            <Multiline
              height='23rem'
              defaultValue={mockDescription}
              submitButtonText='Save'
              secondButtonText='Cancel'
              onSubmitButtonClick={value => {
                console.log('save', value);
              }}
            />
            <SidebarSectionHeader
              title='Attachments'
              iconName='file-lines'
              button={
                <FileButton
                  icon={<Icon name='plus' color='gray3' />}
                  setFile={() => {
                    return;
                  }}
                  color='gray6'
                  accept='image/png, image/jpeg'
                  width='max-content'
                >
                  <Typography color='gray3' variant='h5'>
                    Add file
                  </Typography>
                </FileButton>
              }
            />
            <StyledCardDetailsAttachmentSection>
              {attachmentsMock.map((attachment, index) => (
                <Attachment
                  key={index}
                  date={attachment.date}
                  title={attachment.title}
                  image={attachment.image}
                />
              ))}
            </StyledCardDetailsAttachmentSection>
            <StyledCardDetailsCommentsSection>
              <SidebarSectionHeader title='Comments' iconName='pen' />
              <Multiline
                height='10rem'
                defaultValue='Write a comment...'
                submitButtonText='Comment'
                secondButtonText='Cancel'
                onSubmitButtonClick={value => {
                  console.log('save', value);
                }}
              />
              {commentsMock.map((comment, index) => (
                <Comment comment={comment} key={index} />
              ))}
            </StyledCardDetailsCommentsSection>
          </StyledCardDetailsMainSection>
          <StyledCardDetailsAsideSection>
            <SidebarSectionHeader title='Actions' iconName='user' />
            <CoverPopup setCover={setCover} attachmentSide='right' />
          </StyledCardDetailsAsideSection>
        </StyledCardDetailsInfoSection>
      </StyledCardDetailsModal>
    </Modal>
  );
};

export default CardDetailsModal;
