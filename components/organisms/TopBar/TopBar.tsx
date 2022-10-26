import Button from 'Components/atoms/Button/Button';
import Icon from 'Components/atoms/Icon/Icon';
import Input from 'Components/atoms/Input/Input';
import Link from 'Components/atoms/Link/Link';
import AccountProfile from 'Components/molecules/AccountProfile/AccountProfile';
import BoardNavigation from 'Components/molecules/BoardNavigation/BoardNavigation';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

import { StyledTopBar, StyledTopBarSide } from './TopBar.style';

interface TopBarProps {
  boardName?: string;
}

const TobBar = ({ boardName }: TopBarProps) => {
  const { route } = useRouter();
  const isBoardsPage = route === '/';
  const { data: session } = useSession();

  const isAuthenticated = session?.user?.email;

  console.log(boardName, isAuthenticated);
  return (
    <StyledTopBar>
      <StyledTopBarSide>
        <Link href='/'>
          <Image src='/logo.svg' alt='Application Logo' width={98} height={34} />
        </Link>
        {!isBoardsPage && isAuthenticated && <BoardNavigation />}
      </StyledTopBarSide>
      {isAuthenticated && (
        <StyledTopBarSide>
          <Input
            placeholder='Filter cards'
            button={<Button icon={<Icon name='magnifying-glass' color='white' size='12' />} />}
          />
          <AccountProfile />
        </StyledTopBarSide>
      )}
    </StyledTopBar>
  );
};

export default TobBar;
