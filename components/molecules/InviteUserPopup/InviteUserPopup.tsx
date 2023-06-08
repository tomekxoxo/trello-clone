import Checkbox from 'Components/atoms/Checkbox/Checkbox';
import DropdownItem from 'Components/atoms/DropdownItem/DropdownItem';
import Popup from 'Components/atoms/Popup/Popup';
import {
  StyledInviteButton,
  StyledInviteUserForm,
} from 'Components/molecules/InviteUserPopup/InviteUserPopup.style';
import PopupHeader from 'Components/molecules/PopupHeader/PopupHeader';
import SearchDropdown from 'Components/molecules/SearchDropdown/SearchDropdown';
import User from 'Components/molecules/User/User';
import {
  useAddUsersToBoardMutation,
  useUsersNotAssignedToBoardQuery,
} from 'graphql/generated/hooks';
import { useState } from 'react';

interface InviteUserPopupProps {
  attachmentSide?: 'left' | 'right';
  isOpen: boolean;
  closePopup: () => void;
  anchor: JSX.Element;
  boardId: string;
}

interface UserInterface {
  name: string;
  id: string;
}

const InviteUserPopup = ({
  anchor,
  attachmentSide = 'left',
  closePopup,
  isOpen,
  boardId,
}: InviteUserPopupProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const [value, setValue] = useState('');
  const [chosenElements, setChosenElements] = useState<UserInterface[]>([]);

  const [addUsersToBoard] = useAddUsersToBoardMutation();

  const { data } = useUsersNotAssignedToBoardQuery({
    variables: {
      boardId,
    },
  });

  if (!data?.usersNotAssignedToBoard) return null;

  const filteredList = data?.usersNotAssignedToBoard.filter(user =>
    user?.name.toLowerCase().replace(/ /g, '').includes(value),
  );

  const handleCheck = (isChecked: boolean, user: UserInterface) => {
    if (isChecked) {
      console.log(user);
      setChosenElements(prevState => {
        return prevState?.concat(user);
      });
    } else {
      setChosenElements(prevState => {
        return prevState?.filter(el => el.id !== user.id);
      });
    }
  };

  const onSubmit = async () => {
    await addUsersToBoard({
      refetchQueries: ['Users'],
      variables: {
        users: {
          boardId,
          userIds: chosenElements.map(el => el.id),
        },
      },
    });
  };

  return (
    <Popup anchor={anchor} attachmentSide={attachmentSide} closePopup={closePopup} isOpen={isOpen}>
      <StyledInviteUserForm onSubmit={onSubmit}>
        <PopupHeader label='Invite to Board ' description='Search users you want to invite to' />
        <SearchDropdown
          value={value}
          setValue={setValue}
          isOpen={isDropdownOpen}
          placeholder='User...'
          closeDropdown={() => setIsDropdownOpen(false)}
          onClick={() => setIsDropdownOpen(true)}
        >
          {filteredList?.map(user => {
            return (
              <Checkbox
                key={user.id}
                value={chosenElements?.some(el => el.id === user.id)}
                onChange={isChecked =>
                  handleCheck(isChecked, {
                    id: user?.id,
                    name: user?.name,
                  })
                }
              >
                <DropdownItem>
                  <User name={user.name} withName />
                </DropdownItem>
              </Checkbox>
            );
          })}
        </SearchDropdown>
        <div>
          {chosenElements?.map(user => {
            return (
              <DropdownItem key={user?.id}>
                <User name={user.name} withName />
              </DropdownItem>
            );
          })}
        </div>
        <StyledInviteButton color='white' variant='h5' type='submit'>
          Invite
        </StyledInviteButton>
      </StyledInviteUserForm>
    </Popup>
  );
};

export default InviteUserPopup;
