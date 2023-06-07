import Icon from 'Components/atoms/Icon/Icon';
import { Visibility } from 'graphql/generated/types';
import { useState } from 'react';

const boardVisibilities = [
  {
    description: 'Anyone on the internet can see this.',
    icon: <Icon name='earth' color='gray2' size='12' />,
    label: 'Public',
    value: Visibility.public,
  },
  {
    description: 'Only board members can see this',
    icon: <Icon name='lock' color='gray2' size='12' />,
    label: 'Private',
    value: Visibility.private,
  },
];

const useVisibilityPopup = (visibility: Visibility) => {
  const [chosenOption, setChosenOption] = useState(
    boardVisibilities.find(el => el.value === visibility),
  );

  return { boardVisibilities, chosenOption, setChosenOption };
};

export default useVisibilityPopup;
