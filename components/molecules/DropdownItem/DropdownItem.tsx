import Typography from 'Components/atoms/Typography/Typography';
import {
  StyledDropdownItem,
  StyledDropdownItemHeader,
} from 'Components/molecules/DropdownItem/DropdownItem.style';
import { ThemeColorsType } from 'Utils/theme';

interface IDropdownItemProps {
  icon?: JSX.Element;
  label: string;
  labelColor?: ThemeColorsType;
  description?: string;
}

const DropdownItem = ({ icon, label, description, labelColor = 'gray2' }: IDropdownItemProps) => {
  return (
    <StyledDropdownItem>
      <StyledDropdownItemHeader>
        {icon}
        <Typography variant='h4' font='notoSans' color={labelColor}>
          {label}
        </Typography>
      </StyledDropdownItemHeader>
      {description && (
        <Typography weight='400' variant='h4' font='notoSans' color='gray3'>
          {description}
        </Typography>
      )}
    </StyledDropdownItem>
  );
};

export default DropdownItem;
