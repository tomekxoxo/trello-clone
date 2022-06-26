import Button from 'Components/atoms/Button/Button';
import Icon from 'Components/atoms/Icon/Icon';
import Image from 'Components/atoms/Image/Image';
import Input from 'Components/atoms/Input/Input';
import Typography from 'Components/atoms/Typography/Typography';
import {
  StyledAddBoardModal,
  StyledAddBoardModalButtons,
} from 'Components/molecules/AddBoardModal/AddBoardModal.style';
import FileButton from 'Components/molecules/FileButton/FileButton';
import Modal from 'Components/molecules/Modal/Modal';
import VisibilityPopup from 'Components/molecules/VisibilityPopup/VisibilityPopup';
import { useState } from 'react';

interface IAddBoardModalProps {
  closeModal: () => void;
}

const AddBoardModal = ({ closeModal }: IAddBoardModalProps) => {
  const [file, setFile] = useState('/panorama.svg');

  return (
    <Modal width='307px' closeModal={closeModal}>
      <StyledAddBoardModal>
        {file && <Image width={259} height={140} src={file} alt='thumbnail' />}
        <Input placeholder='Add board title' />
        <StyledAddBoardModalButtons>
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
          <VisibilityPopup attachmentSide='right' buttonWidth='100%' />
          <Button color='white' onClick={closeModal}>
            <Typography color='gray3' variant='h5'>
              Cancel
            </Typography>
          </Button>
          <Button icon={<Icon name='plus' color='white' size='12' />}>
            <Typography color='white' variant='h5'>
              Create
            </Typography>
          </Button>
        </StyledAddBoardModalButtons>
      </StyledAddBoardModal>
    </Modal>
  );
};

export default AddBoardModal;
