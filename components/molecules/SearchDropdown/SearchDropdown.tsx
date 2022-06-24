import Button from 'Components/atoms/Button/Button';
import Icon from 'Components/atoms/Icon/Icon';
import Input from 'Components/atoms/Input/Input';
import Dropdown from 'Components/molecules/Dropdown/Dropdown';
import { StyledSearchDropdown } from 'Components/molecules/SearchDropdown/SearchDropdown.style';
import useClickOutside from 'Hooks/useClickOutside';
import { useRef } from 'react';

interface ISearchDropdownProps {
  children: JSX.Element[];
  placeholder?: string;
  isOpen: boolean;
  closeDropdown: () => void;
}

const SearchDropdown = ({ isOpen, children, placeholder, closeDropdown }: ISearchDropdownProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, closeDropdown);

  return (
    <StyledSearchDropdown ref={ref}>
      <Dropdown
        anchor={
          <Input
            placeholder={placeholder}
            button={<Button icon={<Icon name='magnifying-glass' color='white' size='12' />} />}
          />
        }
        isOpen={isOpen}
        closeDropdown={closeDropdown}
      >
        {children}
      </Dropdown>
    </StyledSearchDropdown>
  );
};

export default SearchDropdown;
