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
import {
  useAddCommentMutation,
  useTaskQuery,
  useUpdateTaskDescriptionMutation,
  useUpdateTaskImageMutation,
} from 'graphql/generated/hooks';
import { useEffect, useState } from 'react';

export interface CardDetailsModalProps {
  onCloseModal: () => void;
  id: string;
}

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

const CardDetailsModal = ({ id, onCloseModal }: CardDetailsModalProps) => {
  const [cover, setCover] = useState('');

  const { data } = useTaskQuery({
    variables: {
      taskId: id,
    },
  });

  const [updateTaskImage] = useUpdateTaskImageMutation();
  const [updateTaskDescription] = useUpdateTaskDescriptionMutation();

  const onUpdateDescription = async (value: string) => {
    await updateTaskDescription({
      refetchQueries: 'active',
      variables: {
        task: {
          description: value,
          taskId: id,
        },
      },
    });
  };

  const [addComment] = useAddCommentMutation();

  const onAddComment = async (value: string) => {
    await addComment({
      refetchQueries: 'active',
      variables: {
        comment: {
          content: value,
          taskId: id,
        },
      },
    });
  };

  useEffect(() => {
    (async () => {
      if (!cover) return;
      await updateTaskImage({
        refetchQueries: 'active',
        variables: {
          task: {
            image: cover,
            taskId: id,
          },
        },
      });
    })();
  }, [cover, id, setCover, updateTaskImage]);

  useEffect(() => {
    if (!data?.task.image) return;
    setCover(data.task.image);
  }, [data?.task.image]);

  if (!data) return null;

  console.log('data', data);

  return (
    <Modal closeModal={onCloseModal} width='66rem'>
      <StyledCardDetailsModal>
        {cover && <Image width={612} height={130} src={cover} alt='thumbnail' objectFit='cover' />}
        <StyledCardDetailsInfoSection>
          <StyledCardDetailsMainSection>
            <Typography weight='400' color='dark' variant='h2'>
              {data.task.name}
            </Typography>
            <SidebarSectionHeader title='Status' description={data.task.column.name} />
            <SidebarSectionHeader title='Assigned to' description={data.task.user.name} />
            <SidebarSectionHeader title='Description' iconName='file-lines' />
            <Multiline
              height='23rem'
              defaultValue={data.task.description || ''}
              submitButtonText='Save'
              secondButtonText='Cancel'
              onSubmitButtonClick={onUpdateDescription}
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
                  Add file
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
                placeholder='Write a comment...'
                submitButtonText='Comment'
                secondButtonText='Cancel'
                onSubmitButtonClick={onAddComment}
              />
              {data.task.comments &&
                [...data.task.comments]
                  ?.sort((a, b) => Number(b?.updatedAt) - Number(a?.updatedAt))
                  ?.map(comment => <Comment comment={comment} key={comment?.id} />)}
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
