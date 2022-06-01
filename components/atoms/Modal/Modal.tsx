import Icon from 'Components/atoms/Icon/Icon';
import {
  StyledModalWrapperCloseButton,
  StyledModalWrapperContent,
  StyledModalWrapperOverlay,
} from 'Components/atoms/Modal/Modal.style';
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
          <StyledModalWrapperCloseButton
            onClick={closeModal}
            icon={<Icon name='xmark' color='white' />}
          ></StyledModalWrapperCloseButton>
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
