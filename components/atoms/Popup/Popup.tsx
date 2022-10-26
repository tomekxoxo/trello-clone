import { StyledPopup, StyledPopupContent } from 'Components/atoms/Popup/Popup.style';
import useClickOutside from 'Hooks/useClickOutside';
import { useRef } from 'react';

export interface PopupProps {
  anchor: JSX.Element;
  children: JSX.Element;
  attachmentSide?: 'left' | 'right';
  isOpen: boolean;
  closePopup: () => void;
}

const Popup = ({
  anchor,
  attachmentSide = 'left',
  closePopup,
  isOpen,
  children,
  ...restProps
}: PopupProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, closePopup);

  return (
    <StyledPopup ref={ref} {...restProps}>
      {anchor}
      {isOpen && (
        <StyledPopupContent attachmentSide={attachmentSide}>{children}</StyledPopupContent>
      )}
    </StyledPopup>
  );
};

export default Popup;
