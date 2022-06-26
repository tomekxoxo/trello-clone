import Icon, { IconNameType } from 'Components/atoms/Icon/Icon';
import Typography from 'Components/atoms/Typography/Typography';
import { StyledSidebarSectionHeader } from 'Components/molecules/SidebarSectionHeader/SidebarSectionHeader.style';

interface ISidebarSectionHeaderProps {
  title: string;
  description?: string;
  iconName?: IconNameType;
}

const SidebarSectionHeader = ({ title, description, iconName }: ISidebarSectionHeaderProps) => {
  return (
    <StyledSidebarSectionHeader>
      {iconName && <Icon name={iconName} color='gray4' size='10' />}
      <Typography color='gray4' weight='600' variant='h5'>
        {title}
      </Typography>
      {description && (
        <Typography color='dark' weight='600' variant='h5'>
          {description}
        </Typography>
      )}
    </StyledSidebarSectionHeader>
  );
};

export default SidebarSectionHeader;
