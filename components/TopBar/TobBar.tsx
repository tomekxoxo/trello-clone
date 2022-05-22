import Image from 'next/image';
import Logo from 'Public/logo.svg';

import { StyledTopBar } from './TopBar.style';

interface ITopBar {
  boardName?: string;
}

const TobBar = ({ boardName }: ITopBar) => {
  return (
    <StyledTopBar>
      <Image src={Logo} alt='Application Logo' />
      {boardName}
    </StyledTopBar>
  );
};

export default TobBar;
