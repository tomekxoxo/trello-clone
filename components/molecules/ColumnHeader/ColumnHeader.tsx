import Button from 'Components/atoms/Button/Button';
import Icon from 'Components/atoms/Icon/Icon';
import Typography from 'Components/atoms/Typography/Typography';
import { StyledColumnHeader } from 'Components/molecules/ColumnHeader/ColumnHeader.style';
import Popup from 'Components/molecules/Popup/Popup';
import VisibilityItem from 'Components/molecules/VisibilityItem/VisibilityItem';
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
      <Popup
        attachmentSide='right'
        closePopup={() => setIsOptionsDropdownOpen(false)}
        isOpen={isOptionsDropdownOpen}
        anchor={
          <Button
            backgroundColor='transparent'
            color='boardColor'
            onClick={handleVisibilityDropdownOpen}
            icon={<Icon name='ellipsis' color='gray3' />}
          />
        }
      >
        <>
          {ColumnOptions.map((option, index) => (
            <VisibilityItem key={index} label={option.label} labelColor='gray3' />
          ))}
        </>
      </Popup>
    </StyledColumnHeader>
  );
};

export default ColumnHeader;
