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
import { useState } from 'react';

interface CommentProps {
  comment: string;
}

const Comment = ({ comment }: CommentProps) => {
  const [isEdit, setIsEdit] = useState(false);

  const editComment = () => setIsEdit(true);

  const cancelEdit = () => setIsEdit(false);

  const deleteComment = () => {
    return null;
  };

  return (
    <StyledComment>
      <StyledCommentHeader>
        <User withName name='Tomasz Kasprowicz' image='/user.jpeg' />
        <StyledCommentButtons>
          <Button color='gray3' variant='h5' backgroundColor='transparent' onClick={editComment}>
            Edit
          </Button>
          <Button color='gray3' variant='h5' backgroundColor='transparent' onClick={deleteComment}>
            Delete
          </Button>
        </StyledCommentButtons>
      </StyledCommentHeader>
      <SidebarSectionHeader title='Made on' iconName='calendar' description='May 26 2022' />
      {isEdit ? (
        <Multiline
          height='15rem'
          defaultValue={comment}
          submitButtonText='Edit'
          secondButtonText='Cancel'
          onSubmitButtonClick={value => {
            console.log('save', value);
          }}
          onSecondButtonClick={cancelEdit}
        />
      ) : (
        <Typography variant='h5' color='dark'>
          {comment}
        </Typography>
      )}
      <Separator orientation='horizontal' />
    </StyledComment>
  );
};

export default Comment;
