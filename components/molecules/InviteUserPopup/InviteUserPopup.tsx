import DropdownItem from 'Components/atoms/DropdownItem/DropdownItem';
import Popup from 'Components/atoms/Popup/Popup';
import Typography from 'Components/atoms/Typography/Typography';
import {
  StyledInviteButton,
  StyledInviteUserPopup,
} from 'Components/molecules/InviteUserPopup/InviteUserPopup.style';
import PopupHeader from 'Components/molecules/PopupHeader/PopupHeader';
import SearchDropdown from 'Components/molecules/SearchDropdown/SearchDropdown';
import User from 'Components/molecules/User/User';
import { useState } from 'react';

const resultsMock = [
  { name: 'Morris Croft' },
  { name: 'Kunal Hough' },
  { name: 'Kierran Salinas' },
  { name: 'Boris Johnson' },
  { name: 'Morris Croft' },
  { name: 'Kunal Hough' },
  { name: 'Kierran Salinas' },
  { name: 'Boris Johnson' },
  { name: 'Morris Croft' },
  { name: 'Kunal Hough' },
  { name: 'Kierran Salinas' },
  { name: 'Boris Johnson' },
];

interface IInviteUserPopupProps {
  attachmentSide?: 'left' | 'right';
  isOpen: boolean;
  closePopup: () => void;
  anchor: JSX.Element;
}

const InviteUserPopup = ({
  anchor,
  attachmentSide = 'left',
  closePopup,
  isOpen,
}: IInviteUserPopupProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  return (
    <Popup anchor={anchor} attachmentSide={attachmentSide} closePopup={closePopup} isOpen={isOpen}>
      <StyledInviteUserPopup>
        <PopupHeader label='Invite to Board ' description='Search users you want to invite to' />
        <SearchDropdown
          isOpen={isDropdownOpen}
          placeholder='User...'
          closeDropdown={() => setIsDropdownOpen(false)}
        >
          {resultsMock?.map(({ name }, index) => {
            return (
              <DropdownItem key={index}>
                <User name={name} withName />
              </DropdownItem>
            );
          })}
        </SearchDropdown>
        <StyledInviteButton>
          <Typography color='white' variant='h5'>
            Invite
          </Typography>
        </StyledInviteButton>
      </StyledInviteUserPopup>
    </Popup>
  );
};

export default InviteUserPopup;
