import { StyledDropdownItem } from 'Components/atoms/DropdownItem/DropdownItem.style';

interface DropdownItemProps {
  children: JSX.Element[] | JSX.Element;
  onClick?: () => void;
}

const DropdownItem = ({ children, onClick, ...restProps }: DropdownItemProps) => (
  <StyledDropdownItem onClick={onClick} {...restProps}>
    {children}
  </StyledDropdownItem>
);

export default DropdownItem;
