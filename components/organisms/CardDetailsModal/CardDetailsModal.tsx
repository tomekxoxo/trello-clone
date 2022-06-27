import Button from 'Components/atoms/Button/Button';
import Icon from 'Components/atoms/Icon/Icon';
import Image from 'Components/atoms/Image/Image';
import Typography from 'Components/atoms/Typography/Typography';
import Attachment from 'Components/molecules/Attachment/Attachment';
import FileButton from 'Components/molecules/FileButton/FileButton';
import Modal from 'Components/molecules/Modal/Modal';
import Multiline from 'Components/molecules/Multiline/Multiline';
import SidebarSectionHeader from 'Components/molecules/SidebarSectionHeader/SidebarSectionHeader';
import {
  StyledCardDetailsAsideSection,
  StyledCardDetailsAttachmentSection,
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

const CardDetailsModal = ({ onCloseModal }: ICardDetailsModalProps) => {
  const [file, setFile] = useState('/wayne-bishop-7YUW7fvIYoQ-unsplash.jpg');

  return (
    <Modal closeModal={onCloseModal} width='66rem'>
      <StyledCardDetailsModal>
        {file && <Image width={612} height={130} src={file} alt='thumbnail' objectFit='cover' />}
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
                <Button
                  borderColor='gray3'
                  color='white'
                  onClick={() => {
                    return;
                  }}
                  icon={<Icon name='plus' color='gray3' />}
                >
                  <Typography color='gray3' variant='h5'>
                    Add
                  </Typography>
                </Button>
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
          </StyledCardDetailsMainSection>
          <StyledCardDetailsAsideSection>
            <SidebarSectionHeader title='Actions' iconName='user' />
            <FileButton
              icon={<Icon name='image' color='gray3' size='12' />}
              setFile={setFile}
              color='gray6'
              accept='image/png, image/jpeg'
              width='100%'
            >
              <Typography color='gray3' variant='h4'>
                Cover
              </Typography>
            </FileButton>
          </StyledCardDetailsAsideSection>
        </StyledCardDetailsInfoSection>
      </StyledCardDetailsModal>
    </Modal>
  );
};

export default CardDetailsModal;
