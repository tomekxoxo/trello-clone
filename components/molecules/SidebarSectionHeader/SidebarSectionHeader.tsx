import Icon, { IconNameType } from 'Components/atoms/Icon/Icon';
import Typography from 'Components/atoms/Typography/Typography';
import { StyledSidebarSectionHeader } from 'Components/molecules/SidebarSectionHeader/SidebarSectionHeader.style';

interface ISidebarSectionHeaderProps {
  title: string;
  iconName: IconNameType;
}

const SidebarSectionHeader = ({ title, iconName }: ISidebarSectionHeaderProps) => {
  return (
    <StyledSidebarSectionHeader>
      <Icon name={iconName} color='gray4' size='10' />
      <Typography color='gray4' weight='600' variant='h5'>
        {title}
      </Typography>
    </StyledSidebarSectionHeader>
  );
};

export default SidebarSectionHeader;
