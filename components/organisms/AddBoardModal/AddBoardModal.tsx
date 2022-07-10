import Button from 'Components/atoms/Button/Button';
import Icon from 'Components/atoms/Icon/Icon';
import Image from 'Components/atoms/Image/Image';
import Input from 'Components/atoms/Input/Input';
import Typography from 'Components/atoms/Typography/Typography';
import CoverPopup from 'Components/molecules/CoverPopup/CoverPopup';
import Modal from 'Components/molecules/Modal/Modal';
import VisibilityPopup from 'Components/molecules/VisibilityPopup/VisibilityPopup';
import {
  StyledAddBoardModal,
  StyledAddBoardModalButtons,
} from 'Components/organisms/AddBoardModal/AddBoardModal.style';
import { useState } from 'react';

interface IAddBoardModalProps {
  closeModal: () => void;
}

const AddBoardModal = ({ closeModal }: IAddBoardModalProps) => {
  const [cover, setCover] = useState('/panorama.svg');

  return (
    <Modal width='307px' closeModal={closeModal}>
      <StyledAddBoardModal>
        {cover && <Image width={259} height={140} src={cover} alt='thumbnail' objectFit='cover' />}
        <Input placeholder='Add board title' />
        <StyledAddBoardModalButtons>
          <CoverPopup setCover={setCover} />
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
