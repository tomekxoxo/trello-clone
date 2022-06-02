import Button from 'Components/atoms/Button/Button';
import Icon from 'Components/atoms/Icon/Icon';
import Typography from 'Components/atoms/Typography/Typography';
import User from 'Components/molecules/User/User';
import WorkBoard from 'Components/organisms/WorkBoard/WorkBoard';
import {
  StyledBoard,
  StyledBoardNavigation,
  StyledBoardNavigationUsers,
} from 'Pages/board/index.style';

const index = () => {
  const users = [
    { image: '/user.jpeg', name: 'John Doe' },
    { name: 'Tomasz Kasprowicz' },
    { image: '/user.jpeg', name: 'Mark Black' },
    { image: '/user.jpeg', name: 'Elon Musk' },
    { image: '/user.jpeg', name: 'Marion Cotilard' },
    { image: '/user.jpeg', name: 'Marion Cotilard' },
  ];
  return (
    <StyledBoard>
      <StyledBoardNavigation>
        <StyledBoardNavigationUsers>
          <Button color='gray6' icon={<Icon name='lock' color='gray3' size='12' />}>
            <Typography color='gray3' variant='h4'>
              Private
            </Typography>
          </Button>
          {users.map((user, index) => (
            <User key={index} image={user.image} name={user.name} />
          ))}
        </StyledBoardNavigationUsers>
        <Button
          color='gray6'
          onClick={() => {
            return null;
          }}
          icon={<Icon name='ellipsis' color='gray3' />}
        >
          <Typography color='gray3' variant='h4'>
            Show Menu
          </Typography>
        </Button>
      </StyledBoardNavigation>
      <WorkBoard />
    </StyledBoard>
  );
};

export default index;
