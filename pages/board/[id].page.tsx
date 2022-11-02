import Button from 'Components/atoms/Button/Button';
import Icon from 'Components/atoms/Icon/Icon';
import InviteUserPopup from 'Components/molecules/InviteUserPopup/InviteUserPopup';
import User from 'Components/molecules/User/User';
import VisibilityPopup from 'Components/molecules/VisibilityPopup/VisibilityPopup';
import MenuSidebar from 'Components/organisms/MenuSidebar/MenuSidebar';
import WorkBoard from 'Components/organisms/WorkBoard/WorkBoard';
import useVisibilityPopup from 'Hooks/useVisibilityPopup';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/react';
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

const Index = () => {
  const [isInvitationModalOpen, setIsInvitationModalOpen] = useState(false);
  const [isShowMenuSidebarOpen, setIsShowMenuSidebarOpen] = useState(false);

  const { chosenOption, setChosenOption } = useVisibilityPopup();

  const router = useRouter();
  const { id } = router.query;

  console.log('tomasz', id);

  return (
    <StyledBoard>
      <StyledBoardNavigation>
        <StyledBoardNavigationUsers>
          <VisibilityPopup chosenOption={chosenOption} setChosenOption={setChosenOption} />
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
          color='gray3'
          variant='h4'
          backgroundColor='gray6'
          onClick={() => setIsShowMenuSidebarOpen(true)}
          icon={<Icon name='ellipsis' color='gray3' />}
        >
          Show menu
        </Button>
        {isShowMenuSidebarOpen && (
          <MenuSidebar closeSidebar={() => setIsShowMenuSidebarOpen(false)} />
        )}
      </StyledBoardNavigation>
      <WorkBoard />
    </StyledBoard>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Index;
