import Button from 'Components/atoms/Button/Button';
import Separator from 'Components/atoms/Separator/Separator';
import Typography from 'Components/atoms/Typography/Typography';
import { StyledBoardNavigation } from 'Components/molecules/BoardNavigation/BoardNavigation.style';

const BoardNavigation = () => {
  return (
    <StyledBoardNavigation>
      <Typography color='dark' variant='h1'>
        Devchallenges Board
      </Typography>
      <Separator />
      <Button color='gray'>
        <Typography color='gray3' variant='h4'>
          All boards
        </Typography>
      </Button>
    </StyledBoardNavigation>
  );
};

export default BoardNavigation;
