import { Visibility } from '@prisma/client';
import Button from 'Components/atoms/Button/Button';
import PopupHeader from 'Components/molecules/PopupHeader/PopupHeader';
import VisibilityItem from 'Components/molecules/VisibilityItem/VisibilityItem';
import {
  StyledVisibilityPopup,
  StyledVisibilityPopupContent,
} from 'Components/molecules/VisibilityPopup/VisibilityPopup.style';
import useVisibilityPopup from 'Hooks/useVisibilityPopup';
import { Dispatch, SetStateAction, useState } from 'react';

export interface VisibilityPopupProps {
  attachmentSide?: 'left' | 'right';
  buttonWidth?: string;
  chosenOption:
    | {
        description: string;
        icon: JSX.Element;
        label: string;
        value: Visibility;
      }
    | undefined;
  setChosenOption: Dispatch<
    SetStateAction<
      | {
          description: string;
          icon: JSX.Element;
          label: string;
          value: Visibility;
        }
      | undefined
    >
  >;
}

const VisibilityPopup = ({
  attachmentSide = 'left',
  buttonWidth,
  setChosenOption,
  chosenOption,
}: VisibilityPopupProps) => {
  const [isVisibilityDropdownOpen, setIsVisibilityDropdownOpen] = useState(false);
  const { boardVisibilities } = useVisibilityPopup(Visibility.PUBLIC);

  const handleVisibilityDropdownOpen = () => setIsVisibilityDropdownOpen(prevState => !prevState);

  const handleOnChoose = (params: typeof chosenOption) => {
    setChosenOption(params);
    handleVisibilityDropdownOpen();
  };

  console.log('cwele', chosenOption);

  if (!chosenOption) return null;

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
      <StyledVisibilityPopupContent>
        <PopupHeader label='Visibility' description='Choose who can see this board.' />
        {boardVisibilities.map((option, index) => (
          <VisibilityItem
            key={index}
            icon={option.icon}
            label={option.label}
            value={option.value}
            description={option.description}
            onChoose={handleOnChoose}
          />
        ))}
      </StyledVisibilityPopupContent>
    </StyledVisibilityPopup>
  );
};

export default VisibilityPopup;
