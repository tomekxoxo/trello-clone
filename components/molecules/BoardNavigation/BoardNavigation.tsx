import Button from 'Components/atoms/Button/Button';
import Icon from 'Components/atoms/Icon/Icon';
import Separator from 'Components/atoms/Separator/Separator';
import Typography from 'Components/atoms/Typography/Typography';
import { StyledBoardNavigation } from 'Components/molecules/BoardNavigation/BoardNavigation.style';
import { useRouter } from 'next/router';

const BoardNavigation = () => {
  const router = useRouter();

  const goToBoards = () => router.push('/boards');

  return (
    <StyledBoardNavigation>
      <Typography color='dark' variant='h1'>
        Devchallenges Board
      </Typography>
      <Separator />
      <Button
        color='gray3'
        variant='h4'
        backgroundColor='gray'
        onClick={goToBoards}
        icon={<Icon name='grid' color='gray3' />}
      >
        All boards
      </Button>
    </StyledBoardNavigation>
  );
};

export default BoardNavigation;
