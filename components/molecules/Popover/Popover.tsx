import { StyledPopover, StyledPopoverContent } from 'Components/molecules/Popover/Popover.style';
import React from 'react';

export interface IPopoverProps {
  anchor: JSX.Element;
  children: JSX.Element;
  attachmentSide?: 'left' | 'right';
  isOpen: boolean;
}

const Popover = ({ anchor, attachmentSide = 'left', isOpen, children }: IPopoverProps) => {
  return (
    <StyledPopover>
      {anchor}
      {isOpen && (
        <StyledPopoverContent attachmentSide={attachmentSide}>{children}</StyledPopoverContent>
      )}
    </StyledPopover>
  );
};

export default Popover;
