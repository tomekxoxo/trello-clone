import Button from 'Components/atoms/Button/Button';
import Checkbox from 'Components/atoms/Checkbox/Checkbox';
import Icon from 'Components/atoms/Icon/Icon';
import Input from 'Components/atoms/Input/Input';
import Label from 'Components/atoms/Label/Label';
import {
  StyledLabelsPopup,
  StyledLabelsPopupContent,
  StyledLabelsPopupList,
} from 'Components/molecules/LabelsPopup/LabelsPopup.style';
import PopupHeader from 'Components/molecules/PopupHeader/PopupHeader';
import {
  useAssignLabelsToTaskMutation,
  useCreateLabelMutation,
  useLabelsQuery,
} from 'graphql/generated/hooks';
import { Label as LabelType } from 'graphql/generated/types';
import { ChangeEvent, FormEvent, useState } from 'react';
import { CirclePicker, ColorResult } from 'react-color';

interface LabelsPopupProps {
  attachmentSide?: 'left' | 'right';
  taskId: string;
  defaultLabels: LabelType[];
}

const LabelsPopup = ({ attachmentSide = 'left', taskId, defaultLabels }: LabelsPopupProps) => {
  const [isVisibilityDropdownOpen, setIsVisibilityDropdownOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [color, setColor] = useState<ColorResult>();

  const [chosenElements, setChosenElements] = useState<string[]>(
    defaultLabels.map(label => label.id),
  );

  const [createLabel] = useCreateLabelMutation();
  const [assignLabelsToTask] = useAssignLabelsToTaskMutation();
  const { data } = useLabelsQuery();

  const handleVisibilityDropdownOpen = () => setIsVisibilityDropdownOpen(prevState => !prevState);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);

  const handleChangeColor = (color: ColorResult) => {
    setColor(color);
  };

  const onCreatelabel = async () => {
    if (!color) return;

    await createLabel({
      refetchQueries: 'active',
      variables: {
        label: {
          color: color?.hex,
          name: inputValue,
        },
      },
    });
  };

  const handleCheck = (isChecked: boolean, id: string) => {
    console.log('isChecked', isChecked, id);
    if (isChecked) {
      setChosenElements(prevState => {
        return prevState?.concat(id);
      });
    } else {
      setChosenElements(prevState => {
        return prevState?.filter(el => el !== id);
      });
    }
  };

  const onSubmitLabels = async (event: FormEvent) => {
    event.preventDefault();

    await assignLabelsToTask({
      refetchQueries: 'active',
      variables: {
        labels: {
          labelsIds: chosenElements,
          taskId,
        },
      },
    });
  };

  return (
    <StyledLabelsPopup
      anchor={
        <Button
          color='gray3'
          width='100%'
          onClick={handleVisibilityDropdownOpen}
          backgroundColor='gray6'
          variant='h4'
          icon={<Icon name='tag' color='gray2' size='12' />}
        >
          Labels
        </Button>
      }
      attachmentSide={attachmentSide}
      closePopup={() => setIsVisibilityDropdownOpen(false)}
      isOpen={isVisibilityDropdownOpen}
    >
      <StyledLabelsPopupContent>
        <PopupHeader label='Choose label' description='choose or create label' />
        <Input
          value={inputValue}
          onChange={handleOnChange}
          placeholder='create label name'
          button={
            <Button icon={<Icon name='plus' color='white' size='12' />} onClick={onCreatelabel} />
          }
        />
        <CirclePicker width='240' color={color} onChangeComplete={handleChangeColor} />
        <form onSubmit={onSubmitLabels}>
          <StyledLabelsPopupList>
            {data?.labels.map(label => {
              return (
                <Checkbox
                  key={label.id}
                  value={chosenElements?.some(el => el === label.id)}
                  onChange={isChecked => handleCheck(isChecked, label?.id)}
                >
                  <Label color={label?.color} name={label?.name} />
                </Checkbox>
              );
            })}
          </StyledLabelsPopupList>
          <Button variant='h5' type='submit'>
            Submit
          </Button>
        </form>
      </StyledLabelsPopupContent>
    </StyledLabelsPopup>
  );
};

export default LabelsPopup;
