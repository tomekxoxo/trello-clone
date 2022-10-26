import Icon, { IconName } from 'Components/atoms/Icon/Icon';
import Typography from 'Components/atoms/Typography/Typography';
import { StyledItemCounter } from 'Components/molecules/ItemCounter/ItemCounter.style';

interface ItemCounterProps {
  icon: IconName;
  count: number;
}

const ItemCounter = ({ icon, count }: ItemCounterProps) => (
  <StyledItemCounter>
    <Icon name={icon} color='gray4' />
    <Typography variant='h5' color='gray4'>
      {count.toString()}
    </Typography>
  </StyledItemCounter>
);

export default ItemCounter;
