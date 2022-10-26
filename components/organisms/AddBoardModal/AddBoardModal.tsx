import Button from 'Components/atoms/Button/Button';
import Icon from 'Components/atoms/Icon/Icon';
import Image from 'Components/atoms/Image/Image';
import Input from 'Components/atoms/Input/Input';
import Modal from 'Components/atoms/Modal/Modal';
import CoverPopup from 'Components/molecules/CoverPopup/CoverPopup';
import VisibilityPopup from 'Components/molecules/VisibilityPopup/VisibilityPopup';
import {
  StyledAddBoardModal,
  StyledAddBoardModalButtons,
} from 'Components/organisms/AddBoardModal/AddBoardModal.style';
import { useState } from 'react';

interface AddBoardModalProps {
  closeModal: () => void;
}

const AddBoardModal = ({ closeModal }: AddBoardModalProps) => {
  const [cover, setCover] = useState('/panorama.svg');

  return (
    <Modal width='307px' closeModal={closeModal}>
      <StyledAddBoardModal>
        {cover && <Image width={259} height={140} src={cover} alt='thumbnail' objectFit='cover' />}
        <Input placeholder='Add board title' />
        <StyledAddBoardModalButtons>
          <CoverPopup setCover={setCover} />
          <VisibilityPopup attachmentSide='right' buttonWidth='100%' />
          <Button color='gray3' variant='h5' backgroundColor='white' onClick={closeModal}>
            Cancel
          </Button>
          <Button variant='h5' icon={<Icon name='plus' color='white' size='12' />}>
            Create
          </Button>
        </StyledAddBoardModalButtons>
      </StyledAddBoardModal>
    </Modal>
  );
};

export default AddBoardModal;
