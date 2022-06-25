import { StyledDropdownItem } from 'Components/molecules/DropdownItem/DropdownItem.style';

interface IDropdownItemProps {
  children: JSX.Element[] | JSX.Element;
}

const DropdownItem = ({ children, ...restProps }: IDropdownItemProps) => {
  return <StyledDropdownItem {...restProps}>{children}</StyledDropdownItem>;
};

export default DropdownItem;
