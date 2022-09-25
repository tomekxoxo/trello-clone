import Button, { IButtonProps } from 'Components/atoms/Button/Button';
import Icon from 'Components/atoms/Icon/Icon';
import { StyledAddAnotherButtonWrapper } from 'Components/molecules/AddAnotherButton/AddAnotherButton.style';

interface IAddAnotherButtonProps extends IButtonProps {
  text: string;
}

const AddAnotherButton = ({ text, ...restProps }: IAddAnotherButtonProps) => (
  <StyledAddAnotherButtonWrapper>
    <Button
      {...restProps}
      width='100%'
      backgroundColor='blue2'
      icon={<Icon name='plus' size='12' />}
      iconPosition='right'
      variant='h4'
      color='blue1'
    >
      {text}
    </Button>
  </StyledAddAnotherButtonWrapper>
);

export default AddAnotherButton;
