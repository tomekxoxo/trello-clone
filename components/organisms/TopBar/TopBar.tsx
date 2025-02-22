import Button from 'Components/atoms/Button/Button';
import Icon from 'Components/atoms/Icon/Icon';
import Input from 'Components/atoms/Input/Input';
import Link from 'Components/atoms/Link/Link';
import AccountProfile from 'Components/molecules/AccountProfile/AccountProfile';
import TopbarNavigation from 'Components/molecules/TopbarNavigation/TopbarNavigation';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

import { StyledTopBar, StyledTopBarSide } from './TopBar.style';

const TopBar = () => {
  const { route, query } = useRouter();
  const isBoardsPage = route === '/';
  const { data: session } = useSession();

  const id = query.id as unknown as string;

  const authenticate = session?.user?.email;

  return (
    <StyledTopBar>
      <StyledTopBarSide>
        <Link href='/'>
          <Image src='/logo.svg' alt='Application Logo' width={98} height={34} />
        </Link>
        {!isBoardsPage && authenticate && id && <TopbarNavigation boardId={id} />}
      </StyledTopBarSide>
      {authenticate && (
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

export default TopBar;
