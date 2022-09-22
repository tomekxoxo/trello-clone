import { StyledDropdownItem } from 'Components/atoms/DropdownItem/DropdownItem.style';

interface IDropdownItemProps {
  children: JSX.Element[] | JSX.Element;
  onClick?: () => void;
}

const DropdownItem = ({ children, onClick, ...restProps }: IDropdownItemProps) => (
  <StyledDropdownItem onClick={onClick} {...restProps}>
    {children}
  </StyledDropdownItem>
);

export default DropdownItem;
