import Typography from 'Components/atoms/Typography/Typography';
import {
  StyledVisibilityItem,
  StyledVisibilityItemHeader,
} from 'Components/molecules/VisibilityItem/VisibilityItem.style';
import { Visiblity } from 'graphql/generated/types';
import { ThemeColors } from 'Utils/theme';

interface VisibilityItemProps {
  icon: JSX.Element;
  label: string;
  value: Visiblity;
  labelColor?: ThemeColors;
  description: string;
  onChoose: (params: {
    description: string;
    icon: JSX.Element;
    label: string;
    value: Visiblity;
  }) => void;
}

const VisibilityItem = ({
  icon,
  label,
  description,
  onChoose,
  value,
  labelColor = 'gray2',
}: VisibilityItemProps) => {
  const handleOnChoose = () => {
    onChoose({
      description,
      icon,
      label,
      value,
    });
  };

  return (
    <StyledVisibilityItem onClick={handleOnChoose}>
      <>
        <StyledVisibilityItemHeader>
          {icon}
          <Typography variant='h4' color={labelColor}>
            {label}
          </Typography>
        </StyledVisibilityItemHeader>
        {description && (
          <Typography weight='400' variant='h4' color='gray3'>
            {description}
          </Typography>
        )}
      </>
    </StyledVisibilityItem>
  );
};

export default VisibilityItem;
