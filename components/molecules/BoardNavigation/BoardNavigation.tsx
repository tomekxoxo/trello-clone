import Button from 'Components/atoms/Button/Button';
import Icon from 'Components/atoms/Icon/Icon';
import Separator from 'Components/atoms/Separator/Separator';
import Typography from 'Components/atoms/Typography/Typography';
import { StyledBoardNavigation } from 'Components/molecules/BoardNavigation/BoardNavigation.style';
import { useBoardQuery } from 'graphql/generated/hooks';
import { useRouter } from 'next/router';

const BoardNavigation = () => {
  const router = useRouter();

  const id = router.query.id as unknown as string;

  const goToBoards = () => router.push('/');

  const { data } = useBoardQuery({
    variables: {
      boardId: id,
    },
  });

  return (
    <StyledBoardNavigation>
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
    </StyledBoardNavigation>
  );
};

export default BoardNavigation;
