import Button from 'Components/atoms/Button/Button';
import Icon from 'Components/atoms/Icon/Icon';
import Typography from 'Components/atoms/Typography/Typography';
import { StyledColumnHeader } from 'Components/molecules/ColumnHeader/ColumnHeader.style';

export interface IColumnHeaderProps {
  name: string;
  onMenuClick: () => void;
}

const ColumnHeader = ({ name, onMenuClick }: IColumnHeaderProps) => {
  return (
    <StyledColumnHeader>
      <Typography color='dark' variant='h3'>
        {name}
      </Typography>
      <Button
        color='boardColor'
        onClick={onMenuClick}
        icon={<Icon name='ellipsis' color='gray3' />}
      />
    </StyledColumnHeader>
  );
};

export default ColumnHeader;
