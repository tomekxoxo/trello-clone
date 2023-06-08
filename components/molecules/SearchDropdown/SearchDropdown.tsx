import Button from 'Components/atoms/Button/Button';
import Dropdown from 'Components/atoms/Dropdown/Dropdown';
import Icon from 'Components/atoms/Icon/Icon';
import Input from 'Components/atoms/Input/Input';
import { StyledSearchDropdown } from 'Components/molecules/SearchDropdown/SearchDropdown.style';
import useClickOutside from 'Hooks/useClickOutside';
import { Dispatch, SetStateAction, useRef } from 'react';

interface SearchDropdownProps {
  children: JSX.Element[];
  placeholder?: string;
  isOpen: boolean;
  closeDropdown: () => void;
  onClick: () => void;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const SearchDropdown = ({
  isOpen,
  children,
  placeholder,
  onClick,
  closeDropdown,
  value,
  setValue,
}: SearchDropdownProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, closeDropdown);

  return (
    <StyledSearchDropdown ref={ref}>
      <Dropdown
        anchor={
          <Input
            value={value}
            onChange={e => setValue(e.target.value)}
            onClick={onClick}
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
