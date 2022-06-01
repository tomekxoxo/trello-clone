import Button from 'Components/atoms/Button/Button';
import Image from 'Components/atoms/Image/Image';
import Input from 'Components/atoms/Input/Input';
import Modal from 'Components/atoms/Modal/Modal';
import Typography from 'Components/atoms/Typography/Typography';
import {
  StyledAddBoardModal,
  StyledAddBoardModalButtons,
} from 'Components/molecules/AddBoardModal/AddBoardModal.style';
import FileButton from 'Components/molecules/FileButton/FileButton';
import { useState } from 'react';

interface IAddBoardModalProps {
  closeModal: () => void;
}

const AddBoardModal = ({ closeModal }: IAddBoardModalProps) => {
  const [file, setFile] = useState('');

  return (
    <Modal width='307px' closeModal={closeModal}>
      <StyledAddBoardModal>
        {file && <Image width={259} height={78} src={file} alt='thumbnail' objectFit='cover' />}
        <Input placeholder='Add board title' />
        <StyledAddBoardModalButtons>
          <FileButton setFile={setFile} color='gray6' accept='image/png, image/jpeg'>
            <Typography color='gray3' variant='h4'>
              Cover
            </Typography>
          </FileButton>
          <Button color='gray4'>
            <Typography color='gray3' variant='h4'>
              Private
            </Typography>
          </Button>
          <Button color='white'>
            <Typography color='gray3' variant='h5'>
              Cancel
            </Typography>
          </Button>
          <Button>
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
