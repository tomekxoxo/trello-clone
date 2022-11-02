import Icon from 'Components/atoms/Icon/Icon';
import { Visiblity } from 'graphql/generated/types';
import { useState } from 'react';

const boardVisibilities = [
  {
    description: 'Anyone on the internet can see this.',
    icon: <Icon name='earth' color='gray2' size='12' />,
    label: 'Public',
    value: Visiblity.public,
  },
  {
    description: 'Only board members can see this',
    icon: <Icon name='lock' color='gray2' size='12' />,
    label: 'Private',
    value: Visiblity.private,
  },
];

const useVisibilityPopup = () => {
  const [chosenOption, setChosenOption] = useState(boardVisibilities[0]);

  return { boardVisibilities, chosenOption, setChosenOption };
};

export default useVisibilityPopup;
