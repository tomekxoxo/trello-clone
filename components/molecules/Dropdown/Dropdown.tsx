import {
  StyledDropdown,
  StyledDropdownContent,
  StyledDropdownContentScrollable,
} from 'Components/molecules/Dropdown/Dropdown.style';
import useClickOutside from 'Hooks/useClickOutside';
import { useRef } from 'react';

interface IDropdownProps {
  anchor: JSX.Element;
  attachmentSide?: 'left' | 'right';
  isOpen: boolean;
  closeDropdown: () => void;
  children: JSX.Element[];
  header?: JSX.Element;
  width?: string;
}

const Dropdown = ({
  anchor,
  isOpen,
  children,
  header,
  closeDropdown,
  attachmentSide = 'left',
  width = '100%',
}: IDropdownProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, closeDropdown);

  return (
    <StyledDropdown ref={ref}>
      {anchor}
      {isOpen && (
        <StyledDropdownContent width={width} attachmentSide={attachmentSide}>
          {header}
          <StyledDropdownContentScrollable>{children}</StyledDropdownContentScrollable>
        </StyledDropdownContent>
      )}
    </StyledDropdown>
  );
};

export default Dropdown;
