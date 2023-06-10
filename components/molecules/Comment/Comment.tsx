import Button from 'Components/atoms/Button/Button';
import Separator from 'Components/atoms/Separator/Separator';
import Typography from 'Components/atoms/Typography/Typography';
import {
  StyledComment,
  StyledCommentButtons,
  StyledCommentHeader,
} from 'Components/molecules/Comment/Comment.style';
import Multiline from 'Components/molecules/Multiline/Multiline';
import SidebarSectionHeader from 'Components/molecules/SidebarSectionHeader/SidebarSectionHeader';
import User from 'Components/molecules/User/User';
import { useDeleteCommentMutation, useEditCommentMutation } from 'graphql/generated/hooks';
import { useState } from 'react';

interface CommentProps {
  comment: unknown;
}

const Comment = ({ comment }: CommentProps) => {
  const [isEdit, setIsEdit] = useState(false);

  const editComment = () => setIsEdit(true);

  const cancelEdit = () => setIsEdit(false);

  const [editCommentMutation] = useEditCommentMutation();
  const [deleteComment] = useDeleteCommentMutation();

  const onEditComment = async (value: string) => {
    await editCommentMutation({
      refetchQueries: 'active',
      variables: {
        comment: {
          commentId: comment.id,
          content: value,
        },
      },
    });
    cancelEdit();
  };

  const onDeleteComment = async () => {
    await deleteComment({
      refetchQueries: 'active',
      variables: {
        deleteCommentId: comment.id,
      },
    });
  };

  return (
    <StyledComment>
      <StyledCommentHeader>
        <User withName name={comment?.user?.name} image={comment?.user?.image} />
        <StyledCommentButtons>
          <Button color='gray3' variant='h5' backgroundColor='transparent' onClick={editComment}>
            Edit
          </Button>
          <Button
            color='gray3'
            variant='h5'
            backgroundColor='transparent'
            onClick={onDeleteComment}
          >
            Delete
          </Button>
        </StyledCommentButtons>
      </StyledCommentHeader>
      <SidebarSectionHeader
        title='Made on'
        iconName='calendar'
        description={new Date(Number(comment.updatedAt)).toDateString()}
      />
      {isEdit ? (
        <Multiline
          height='15rem'
          defaultValue={comment.content}
          submitButtonText='Edit'
          secondButtonText='Cancel'
          onSubmitButtonClick={onEditComment}
          onSecondButtonClick={cancelEdit}
        />
      ) : (
        <Typography variant='h5' color='dark'>
          {comment.content}
        </Typography>
      )}
      <Separator orientation='horizontal' />
    </StyledComment>
  );
};

export default Comment;
