import { StyledPopup, StyledPopupContent } from 'Components/molecules/Popup/Popup.style';
import useClickOutside from 'Hooks/useClickOutside';
import { useRef } from 'react';

export interface IPopupProps {
  anchor: JSX.Element;
  children: JSX.Element;
  attachmentSide?: 'left' | 'right';
  isOpen: boolean;
  closePopup: () => void;
}

const Popup = ({ anchor, attachmentSide = 'left', closePopup, isOpen, children }: IPopupProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, closePopup);

  return (
    <StyledPopup ref={ref}>
      {anchor}
      {isOpen && (
        <StyledPopupContent attachmentSide={attachmentSide}>{children}</StyledPopupContent>
      )}
    </StyledPopup>
  );
};

export default Popup;
