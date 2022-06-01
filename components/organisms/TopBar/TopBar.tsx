import Button from 'Components/atoms/Button/Button';
import Input from 'Components/atoms/Input/Input';
import Link from 'Components/atoms/Link/Link';
import Typography from 'Components/atoms/Typography/Typography';
import AccountProfile from 'Components/molecules/AccountProfile/AccountProfile';
import BoardNavigation from 'Components/molecules/BoardNavigation/BoardNavigation';
import Image from 'next/image';

import { StyledTopBar, StyledTopBarSide } from './TopBar.style';

interface ITopBarProps {
  boardName?: string;
}

const TobBar = ({ boardName }: ITopBarProps) => {
  console.log(boardName);
  return (
    <StyledTopBar>
      <StyledTopBarSide>
        <Link href='/'>
          <Image src='/logo.svg' alt='Application Logo' width={98} height={29} />
        </Link>
        <BoardNavigation />
      </StyledTopBarSide>
      <StyledTopBarSide>
        <Input
          placeholder='Keyword...'
          button={
            <Button>
              <Typography color='white' variant='h5'>
                Search
              </Typography>
            </Button>
          }
        />
        <AccountProfile />
      </StyledTopBarSide>
    </StyledTopBar>
  );
};

export default TobBar;
