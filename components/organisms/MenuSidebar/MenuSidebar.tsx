import Button from 'Components/atoms/Button/Button';
import Icon from 'Components/atoms/Icon/Icon';
import Separator from 'Components/atoms/Separator/Separator';
import Typography from 'Components/atoms/Typography/Typography';
import Multiline from 'Components/molecules/Multiline/Multiline';
import SidebarSectionHeader from 'Components/molecules/SidebarSectionHeader/SidebarSectionHeader';
import SidebarTeamMember from 'Components/molecules/SidebarTeamMember/SidebarTeamMember';
import User from 'Components/molecules/User/User';
import {
  StyledMenuSidebar,
  StyledMenuSidebarContent,
  StyledMenuSidebarHeader,
} from 'Components/organisms/MenuSidebar/MenuSidebar.style';
import useClickOutside from 'Hooks/useClickOutside';
import { useRef } from 'react';

const membersMock = [
  { isAdmin: true, userImage: '', userName: 'Tomasz kasprowicz' },
  { isAdmin: false, userImage: '', userName: 'łukasz kasprowicz' },
  { isAdmin: false, userImage: '', userName: 'Michał Mostowiak' },
];

interface IMenuSidebarProps {
  closeSidebar: () => void;
}

const MenuSidebar = ({ closeSidebar }: IMenuSidebarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, closeSidebar);

  return (
    <StyledMenuSidebar ref={ref}>
      <StyledMenuSidebarHeader>
        <Typography color='gray1' weight='600' variant='h4'>
          Menu
        </Typography>
        <Button onClick={closeSidebar} color='white'>
          <Icon name='xmark' color='gray1' />
        </Button>
      </StyledMenuSidebarHeader>
      <Separator orientation='horizontal' />
      <StyledMenuSidebarContent>
        <SidebarSectionHeader title='Made by' iconName='user' />
        <User withName name='Tomasz kasprowicz' />
        <SidebarSectionHeader title='Made on' iconName='calendar' />
        <SidebarSectionHeader title='Description' iconName='file-lines' />
        <Multiline
          defaultValue='coś tam'
          submitButtonText='Save'
          secondButtonText='Cancel'
          onSubmitButtonClick={value => {
            console.log('save', value);
          }}
        />
        <SidebarSectionHeader title='Team' iconName='file-lines' />
        {membersMock.map((member, index) => {
          return (
            <SidebarTeamMember
              key={index}
              userImage={member.userImage}
              userName={member.userName}
              isAdmin={member.isAdmin}
              removeMember={() => {
                return;
              }}
            />
          );
        })}
      </StyledMenuSidebarContent>
    </StyledMenuSidebar>
  );
};

export default MenuSidebar;
