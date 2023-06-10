import Button from 'Components/atoms/Button/Button';
import Typography from 'Components/atoms/Typography/Typography';
import { StyledSidebarTeamMember } from 'Components/molecules/SidebarTeamMember/SidebarTeamMember.style';
import User from 'Components/molecules/User/User';

interface SidebarTeamMemberProps {
  userImage?: string;
  userName: string;
  isOwner?: boolean;
  removeMember?: () => void;
}

const SidebarTeamMember = ({
  userImage,
  userName,
  isOwner,
  removeMember,
}: SidebarTeamMemberProps) => (
  <StyledSidebarTeamMember>
    <User name={userName} image={userImage} withName />
    {isOwner ? (
      <Typography color='gray3' variant='h5'>
        Owner
      </Typography>
    ) : (
      <Button
        color='red'
        variant='h5'
        backgroundColor='transparent'
        borderColor='red'
        onClick={removeMember}
      >
        Remove
      </Button>
    )}
  </StyledSidebarTeamMember>
);

export default SidebarTeamMember;
