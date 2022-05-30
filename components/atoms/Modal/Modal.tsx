import {
  StyledModalWrapperCloseButton,
  StyledModalWrapperContent,
  StyledModalWrapperOverlay,
} from 'Components/atoms/Modal/Modal.style';
import Image from 'next/image';
import Xmark from 'Public/xmark.svg';
import Modal from 'react-modal';

interface IModalWrapperProps {
  children: JSX.Element;
  closeModal: () => void;
  width: string;
}

const ModalWrapper = ({ children, closeModal, width }: IModalWrapperProps) => {
  return (
    <Modal
      shouldCloseOnOverlayClick={false}
      isOpen={true}
      onRequestClose={closeModal}
      className='_'
      overlayClassName='_'
      contentElement={(props, children) => (
        <StyledModalWrapperContent {...props} width={width}>
          <StyledModalWrapperCloseButton onClick={closeModal}>
            <Image src={Xmark} alt='xmark' width={16} height={16} />
          </StyledModalWrapperCloseButton>
          {children}
        </StyledModalWrapperContent>
      )}
      overlayElement={(props, contentElement) => (
        <StyledModalWrapperOverlay {...props}>{contentElement}</StyledModalWrapperOverlay>
      )}
    >
      {children}
    </Modal>
  );
};

Modal.setAppElement('#__next');

export default ModalWrapper;
