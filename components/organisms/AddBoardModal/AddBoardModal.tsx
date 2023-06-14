import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'Components/atoms/Button/Button';
import Icon from 'Components/atoms/Icon/Icon';
import Image from 'Components/atoms/Image/Image';
import Input from 'Components/atoms/Input/Input';
import Modal from 'Components/atoms/Modal/Modal';
import Textarea from 'Components/atoms/Textarea/Textarea';
import CoverPopup from 'Components/molecules/CoverPopup/CoverPopup';
import VisibilityPopup from 'Components/molecules/VisibilityPopup/VisibilityPopup';
import {
  StyledAddBoardForm,
  StyledAddBoardFormButtons,
} from 'Components/organisms/AddBoardModal/AddBoardModal.style';
import { Schema, schema } from 'Components/organisms/AddBoardModal/validation';
import { useAddBoardMutation } from 'graphql/generated/hooks';
import { Visibility } from 'graphql/generated/types';
import useVisibilityPopup from 'Hooks/useVisibilityPopup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface AddBoardModalProps {
  closeModal: () => void;
}

const AddBoardModal = ({ closeModal }: AddBoardModalProps) => {
  const [cover, setCover] = useState('/panorama.svg');
  const [addBoardMutation] = useAddBoardMutation();
  const { chosenOption, setChosenOption } = useVisibilityPopup(Visibility.public);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: Schema) => {
    addBoardMutation({
      refetchQueries: 'active',
      variables: {
        board: {
          description: data.boardDescription,
          image: cover,
          name: data.boardName,
          visibility: chosenOption?.value || Visibility.public,
        },
      },
    });
    closeModal();
  };

  return (
    <Modal width='307px' closeModal={closeModal}>
      <StyledAddBoardForm onSubmit={handleSubmit(onSubmit)}>
        {cover && (
          <Image
            width={259}
            height={140}
            src={cover}
            alt='thumbnail'
            style={{ objectFit: 'cover' }}
          />
        )}
        <Input
          placeholder='Board title'
          {...register('boardName')}
          errorText={errors.boardName?.message}
        />
        <Textarea {...register('boardDescription')} placeholder='Board description' />
        <StyledAddBoardFormButtons>
          <CoverPopup setCover={setCover} />
          <VisibilityPopup
            attachmentSide='right'
            buttonWidth='100%'
            chosenOption={chosenOption}
            setChosenOption={setChosenOption}
          />
          <Button color='gray3' variant='h5' backgroundColor='white' onClick={closeModal}>
            Cancel
          </Button>
          <Button type='submit' variant='h5' icon={<Icon name='plus' color='white' size='12' />}>
            Create
          </Button>
        </StyledAddBoardFormButtons>
      </StyledAddBoardForm>
    </Modal>
  );
};

export default AddBoardModal;
