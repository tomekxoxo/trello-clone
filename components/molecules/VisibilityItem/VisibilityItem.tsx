import Typography from 'Components/atoms/Typography/Typography';
import {
  StyledVisibilityItem,
  StyledVisibilityItemHeader,
} from 'Components/molecules/VisibilityItem/VisibilityItem.style';
import { ThemeColorsType } from 'Utils/theme';

interface IVisibilityItemProps {
  icon?: JSX.Element;
  label: string;
  labelColor?: ThemeColorsType;
  description?: string;
}

const VisibilityItem = ({
  icon,
  label,
  description,
  labelColor = 'gray2',
}: IVisibilityItemProps) => {
  return (
    <StyledVisibilityItem>
      <>
        <StyledVisibilityItemHeader>
          {icon}
          <Typography variant='h4' font='notoSans' color={labelColor}>
            {label}
          </Typography>
        </StyledVisibilityItemHeader>
        {description && (
          <Typography weight='400' variant='h4' font='notoSans' color='gray3'>
            {description}
          </Typography>
        )}
      </>
    </StyledVisibilityItem>
  );
};

export default VisibilityItem;
