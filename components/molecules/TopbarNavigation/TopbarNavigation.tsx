import Button from 'Components/atoms/Button/Button';
import Icon from 'Components/atoms/Icon/Icon';
import Separator from 'Components/atoms/Separator/Separator';
import Typography from 'Components/atoms/Typography/Typography';
import { StyledTopbarNavigation } from 'Components/molecules/TopbarNavigation/TopbarNavigation.style';
import { useBoardQuery } from 'graphql/generated/hooks';
import { useRouter } from 'next/router';

interface TopbarNavigationProps {
  boardId: string;
}

const TopbarNavigation = ({ boardId }: TopbarNavigationProps) => {
  const router = useRouter();

  const goToBoards = () => router.push('/');

  const { data } = useBoardQuery({
    variables: {
      boardId,
    },
  });

  return (
    <StyledTopbarNavigation>
      {data?.board.name && (
        <Typography color='dark' variant='h1'>
          {data?.board.name}
        </Typography>
      )}
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
    </StyledTopbarNavigation>
  );
};

export default TopbarNavigation;
