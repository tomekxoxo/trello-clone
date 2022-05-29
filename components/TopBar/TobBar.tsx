import Button from 'Components/Button/Button';
import Input from 'Components/Input/Input';
import Link from 'Components/Link/Link';
import Typography from 'Components/Typography/Typography';
import Image from 'next/image';
import Logo from 'Public/logo.svg';

import { StyledTopBar } from './TopBar.style';

interface ITopBar {
  boardName?: string;
}

const TobBar = ({ boardName }: ITopBar) => {
  console.log(boardName);
  return (
    <StyledTopBar>
      <Link href='/api/hello'>
        <Image src={Logo} alt='Application Logo' />
      </Link>
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
    </StyledTopBar>
  );
};

export default TobBar;
