import Button from 'Components/atoms/Button/Button';
import Icon from 'Components/atoms/Icon/Icon';
import Typography from 'Components/atoms/Typography/Typography';
import { StyledColumnHeader } from 'Components/molecules/ColumnHeader/ColumnHeader.style';
import Dropdown from 'Components/molecules/Dropdown/Dropdown';
import DropdownItem from 'Components/molecules/DropdownItem/DropdownItem';
import { useState } from 'react';

export interface IColumnHeaderProps {
  status: string;
}

const ColumnOptions = [
  {
    label: 'Rename',
  },
  {
    label: 'Delete this list',
  },
];

const ColumnHeader = ({ status }: IColumnHeaderProps) => {
  const [isOptionsDropdownOpen, setIsOptionsDropdownOpen] = useState(false);

  const handleVisibilityDropdownOpen = () => setIsOptionsDropdownOpen(prevState => !prevState);

  return (
    <StyledColumnHeader>
      <Typography color='dark' variant='h3'>
        {status}
      </Typography>
      <Dropdown
        attachmentSide='right'
        closeDropdown={() => setIsOptionsDropdownOpen(false)}
        isOpen={isOptionsDropdownOpen}
        anchor={
          <Button
            color='boardColor'
            onClick={handleVisibilityDropdownOpen}
            icon={<Icon name='ellipsis' color='gray3' />}
          />
        }
      >
        {ColumnOptions.map((option, index) => (
          <DropdownItem key={index} label={option.label} labelColor='gray3' />
        ))}
      </Dropdown>
    </StyledColumnHeader>
  );
};

export default ColumnHeader;
