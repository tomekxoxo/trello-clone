import { StyledPopup, StyledPopupContent } from 'Components/molecules/Popup/Popup.style';
import React from 'react';

export interface IPopupProps {
  anchor: JSX.Element;
  children: JSX.Element;
  attachmentSide?: 'left' | 'right';
  isOpen: boolean;
}

const Popup = ({ anchor, attachmentSide = 'left', isOpen, children }: IPopupProps) => {
  return (
    <StyledPopup>
      {anchor}
      {isOpen && (
        <StyledPopupContent attachmentSide={attachmentSide}>{children}</StyledPopupContent>
      )}
    </StyledPopup>
  );
};

export default Popup;
