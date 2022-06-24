import { StyledPopover, StyledPopoverContent } from 'Components/molecules/Popover/Popover.style';
import useClickOutside from 'Hooks/useClickOutside';
import { useRef } from 'react';

export interface IPopoverProps {
  anchor: JSX.Element;
  children: JSX.Element;
  attachmentSide?: 'left' | 'right';
  isOpen: boolean;
  closePopover: () => void;
}

const Popover = ({
  anchor,
  attachmentSide = 'left',
  closePopover,
  isOpen,
  children,
}: IPopoverProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, closePopover);

  return (
    <StyledPopover ref={ref}>
      {anchor}
      {isOpen && (
        <StyledPopoverContent attachmentSide={attachmentSide}>{children}</StyledPopoverContent>
      )}
    </StyledPopover>
  );
};

export default Popover;
