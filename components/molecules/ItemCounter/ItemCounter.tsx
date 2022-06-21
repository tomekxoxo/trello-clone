import Icon, { IconNameType } from 'Components/atoms/Icon/Icon';
import Typography from 'Components/atoms/Typography/Typography';
import { StyledItemCounter } from 'Components/molecules/ItemCounter/ItemCounter.style';

interface IItemCounterProps {
  icon: IconNameType;
  count: number;
}

const ItemCounter = ({ icon, count }: IItemCounterProps) => {
  return (
    <StyledItemCounter>
      <Icon name={icon} color='gray4' />
      <Typography font='notoSans' variant='h5' color='gray4'>
        {count.toString()}
      </Typography>
    </StyledItemCounter>
  );
};

export default ItemCounter;
