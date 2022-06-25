import Button from 'Components/atoms/Button/Button';
import Icon from 'Components/atoms/Icon/Icon';
import Typography from 'Components/atoms/Typography/Typography';
import Dropdown from 'Components/molecules/Dropdown/Dropdown';
import InviteUserPopup from 'Components/molecules/InviteUserPopup/InviteUserPopup';
import PopupHeader from 'Components/molecules/PopupHeader/PopupHeader';
import User from 'Components/molecules/User/User';
import VisibilityItem from 'Components/molecules/VisibilityItem/VisibilityItem';
import WorkBoard from 'Components/organisms/WorkBoard/WorkBoard';
import {
  StyledBoard,
  StyledBoardNavigation,
  StyledBoardNavigationUsers,
} from 'Pages/board/index.style';
import { useState } from 'react';

const users = [
  { image: '/user.jpeg', name: 'John Doe' },
  { name: 'Tomasz Kasprowicz' },
  { image: '/user.jpeg', name: 'Mark Black' },
  { image: '/user.jpeg', name: 'Elon Musk' },
  { image: '/user.jpeg', name: 'Marion Cotilard' },
  { image: '/user.jpeg', name: 'Marion Cotilard' },
];

const boardVisibilities = [
  {
    description: 'Anyone on the internet can see this.',
    icon: <Icon name='earth' color='gray2' size='12' />,
    label: 'Public',
  },
  {
    description: 'Only board members can see this',
    icon: <Icon name='lock' color='gray2' size='12' />,
    label: 'Private',
  },
];

const Index = () => {
  const [isVisibilityDropdownOpen, setIsVisibilityDropdownOpen] = useState(false);
  const [isInvitationModalOpen, setIsInvitationModalOpen] = useState(false);

  const handleVisibilityDropdownOpen = () => setIsVisibilityDropdownOpen(prevState => !prevState);

  return (
    <StyledBoard>
      <StyledBoardNavigation>
        <StyledBoardNavigationUsers>
          <Dropdown
            width='24.5rem'
            closeDropdown={() => setIsVisibilityDropdownOpen(false)}
            header={<PopupHeader label='Visibility' description='Choose who can see this board.' />}
            isOpen={isVisibilityDropdownOpen}
            anchor={
              <Button
                onClick={handleVisibilityDropdownOpen}
                color='gray6'
                icon={<Icon name='lock' color='gray3' size='12' />}
              >
                <Typography color='gray3' variant='h4'>
                  Private
                </Typography>
              </Button>
            }
          >
            {boardVisibilities.map((option, index) => (
              <VisibilityItem
                key={index}
                icon={option.icon}
                label={option.label}
                description={option.description}
              />
            ))}
          </Dropdown>
          {users.map((user, index) => (
            <User key={index} image={user.image} name={user.name} />
          ))}
          <InviteUserPopup
            closePopup={() => setIsInvitationModalOpen(false)}
            isOpen={isInvitationModalOpen}
            anchor={
              <Button
                onClick={() => setIsInvitationModalOpen(prevState => !prevState)}
                color='blue1'
                icon={<Icon name='plus' size='12' color='white' />}
              />
            }
          />
        </StyledBoardNavigationUsers>
        <Button
          color='gray6'
          onClick={() => {
            return null;
          }}
          icon={<Icon name='ellipsis' color='gray3' />}
        >
          <Typography color='gray3' variant='h4'>
            Show Menu
          </Typography>
        </Button>
      </StyledBoardNavigation>
      <WorkBoard />
    </StyledBoard>
  );
};

export default Index;
