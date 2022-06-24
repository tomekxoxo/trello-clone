import Button from 'Components/atoms/Button/Button';
import Icon from 'Components/atoms/Icon/Icon';
import Typography from 'Components/atoms/Typography/Typography';
import Dropdown from 'Components/molecules/Dropdown/Dropdown';
import DropdownItem from 'Components/molecules/DropdownItem/DropdownItem';
import InviteUserPopover from 'Components/molecules/Popover/Popover';
import PopoverHeader from 'Components/molecules/PopoverHeader/PopoverHeader';
import User from 'Components/molecules/User/User';
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
  const [isInvitationModalOpen, setisInvitationModalOpen] = useState(false);

  const handleVisibilityDropdownOpen = () => setIsVisibilityDropdownOpen(prevState => !prevState);

  return (
    <StyledBoard>
      <StyledBoardNavigation>
        <StyledBoardNavigationUsers>
          <Dropdown
            closeDropdown={() => setIsVisibilityDropdownOpen(false)}
            header={
              <PopoverHeader label='Visibility' description='Choose who can see this board.' />
            }
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
              <DropdownItem
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
          <InviteUserPopover
            isOpen={isInvitationModalOpen}
            anchor={
              <Button
                onClick={() => setisInvitationModalOpen(prevState => !prevState)}
                color='blue1'
                icon={<Icon name='plus' size='12' color='white' />}
              />
            }
          >
            <h1>asd</h1>
          </InviteUserPopover>
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
