import Button from 'Components/atoms/Button/Button';
import Icon from 'Components/atoms/Icon/Icon';
import Typography from 'Components/atoms/Typography/Typography';
import { StyledAddAnotherButtonWrapper } from 'Components/molecules/AddAnotherButton/AddAnotherButton.style';

interface IAddAnotherButtonProps {
  text: string;
}

const AddAnotherButton = ({ text }: IAddAnotherButtonProps) => {
  return (
    <StyledAddAnotherButtonWrapper>
      <Button width='100%' color='blue2' icon={<Icon name='plus' size='12' />} iconPosition='right'>
        <Typography variant='h4'>{text}</Typography>
      </Button>
    </StyledAddAnotherButtonWrapper>
  );
};

export default AddAnotherButton;
