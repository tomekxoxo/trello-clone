import Button from 'Components/atoms/Button/Button';
import Icon from 'Components/atoms/Icon/Icon';
import Separator from 'Components/atoms/Separator/Separator';
import Typography from 'Components/atoms/Typography/Typography';
import Multiline from 'Components/molecules/Multiline/Multiline';
import SidebarSectionHeader from 'Components/molecules/SidebarSectionHeader/SidebarSectionHeader';
import SidebarTeamMember from 'Components/molecules/SidebarTeamMember/SidebarTeamMember';
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

  const mockDescription = `Simple board to start on a project.

  Each list can hold items (cards) that represent ideas or tasks.
  
  There 4 lists here:
  
  * Backlog 🤔 : Ideas are created here. Here people can describe the idea following three simple questions: Why you wish to do it, What it is, how can you do it.
  
  *   In Progress📚: Once the ideas is clearly defined, the task can move to #todo stage. Here the owner of the idea can move to #doing once s/he is ready. He can also wait a bit for other members to join.
  * In Review ⚙️: On-going
  * Completed 🙌🏽**: Finished
  
  You could add other lists like labels holding labels (with colors) in order to tag each card by a label if you wish.`;

  return (
    <StyledMenuSidebar ref={ref}>
      <StyledMenuSidebarHeader>
        <Typography color='gray1' weight='600' variant='h4'>
          Menu
        </Typography>
        <Button
          onClick={closeSidebar}
          backgroundColor='white'
          icon={<Icon name='xmark' color='gray1' />}
        />
      </StyledMenuSidebarHeader>
      <Separator orientation='horizontal' />
      <StyledMenuSidebarContent>
        <SidebarSectionHeader title='Made by' iconName='user' description='Tomasz Kasprowicz' />
        <SidebarSectionHeader title='Made on' iconName='calendar' description='May 26 2022' />
        <SidebarSectionHeader title='Description' iconName='file-lines' />
        <Multiline
          height='30rem'
          defaultValue={mockDescription}
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
