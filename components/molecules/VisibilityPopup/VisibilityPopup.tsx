import Button from 'Components/atoms/Button/Button';
import Icon from 'Components/atoms/Icon/Icon';
import PopupHeader from 'Components/molecules/PopupHeader/PopupHeader';
import VisibilityItem from 'Components/molecules/VisibilityItem/VisibilityItem';
import { StyledVisibilityPopup } from 'Components/molecules/VisibilityPopup/VisibilityPopup.style';
import { useState } from 'react';

const boardVisibilities = [
  {
    description: 'Anyone on the internet can see this.',
    icon: <Icon name='earth' color='gray2' size='12' />,
    label: 'Public',
  },
  {
    description: 'Only board members can see this',
    icon: <Icon name='lock' color='gray2' size='12' />,
    label: 'Private',
  },
];

export interface IVisibilityPopupProps {
  attachmentSide?: 'left' | 'right';
  buttonWidth?: string;
}

const VisibilityPopup = ({ attachmentSide = 'left', buttonWidth }: IVisibilityPopupProps) => {
  const [isVisibilityDropdownOpen, setIsVisibilityDropdownOpen] = useState(false);
  const [chosenOption, setChosenOption] = useState(boardVisibilities[0]);

  const handleVisibilityDropdownOpen = () => setIsVisibilityDropdownOpen(prevState => !prevState);

  const handleOnChoose = (params: { description: string; icon: JSX.Element; label: string }) => {
    setChosenOption(params);
    handleVisibilityDropdownOpen();
  };

  return (
    <StyledVisibilityPopup
      closePopup={() => setIsVisibilityDropdownOpen(false)}
      isOpen={isVisibilityDropdownOpen}
      anchor={
        <Button
          color='gray3'
          width={buttonWidth}
          onClick={handleVisibilityDropdownOpen}
          backgroundColor='gray6'
          icon={chosenOption.icon}
          variant='h4'
        >
          {chosenOption.label}
        </Button>
      }
      attachmentSide={attachmentSide}
    >
      <>
        <PopupHeader label='Visibility' description='Choose who can see this board.' />
        {boardVisibilities.map((option, index) => (
          <VisibilityItem
            key={index}
            icon={option.icon}
            label={option.label}
            description={option.description}
            onChoose={handleOnChoose}
          />
        ))}
      </>
    </StyledVisibilityPopup>
  );
};

export default VisibilityPopup;
