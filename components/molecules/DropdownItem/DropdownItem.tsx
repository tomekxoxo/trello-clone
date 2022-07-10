import { StyledDropdownItem } from 'Components/molecules/DropdownItem/DropdownItem.style';

interface IDropdownItemProps {
  children: JSX.Element[] | JSX.Element;
  onClick?: () => void;
}

const DropdownItem = ({ children, onClick, ...restProps }: IDropdownItemProps) => {
  return (
    <StyledDropdownItem onClick={onClick} {...restProps}>
      {children}
    </StyledDropdownItem>
  );
};

export default DropdownItem;
