import Button from 'Components/atoms/Button/Button';
import Typography from 'Components/atoms/Typography/Typography';
import { StyledSidebarTeamMember } from 'Components/molecules/SidebarTeamMember/SidebarTeamMember.style';
import User from 'Components/molecules/User/User';

interface ISidebarTeamMemberProps {
  userImage?: string;
  userName: string;
  isAdmin?: boolean;
  removeMember?: () => void;
}

const SidebarTeamMember = ({
  userImage,
  userName,
  isAdmin,
  removeMember,
}: ISidebarTeamMemberProps) => {
  return (
    <StyledSidebarTeamMember>
      <User name={userName} image={userImage} withName />
      {isAdmin ? (
        <Typography color='gray3' variant='h5'>
          Admin
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
};

export default SidebarTeamMember;
