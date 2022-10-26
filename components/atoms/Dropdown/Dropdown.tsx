import {
  StyledDropdown,
  StyledDropdownContent,
  StyledDropdownContentScrollable,
} from 'Components/atoms/Dropdown/Dropdown.style';
import useClickOutside from 'Hooks/useClickOutside';
import { useRef } from 'react';

interface DropdownProps {
  anchor: JSX.Element;
  attachmentSide?: 'left' | 'right';
  isOpen: boolean;
  closeDropdown: () => void;
  children: JSX.Element[];
  width?: string;
}

const Dropdown = ({
  anchor,
  isOpen,
  children,
  closeDropdown,
  attachmentSide = 'left',
  width = '100%',
}: DropdownProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, closeDropdown);

  return (
    <StyledDropdown ref={ref}>
      {anchor}
      {isOpen && (
        <StyledDropdownContent width={width} attachmentSide={attachmentSide}>
          <StyledDropdownContentScrollable>{children}</StyledDropdownContentScrollable>
        </StyledDropdownContent>
      )}
    </StyledDropdown>
  );
};

export default Dropdown;
