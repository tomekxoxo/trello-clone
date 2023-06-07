import { Visibility } from '@prisma/client';
import Icon from 'Components/atoms/Icon/Icon';
import { useState } from 'react';

const boardVisibilities = [
  {
    description: 'Anyone on the internet can see this.',
    icon: <Icon name='earth' color='gray2' size='12' />,
    label: 'Public',
    value: Visibility.PUBLIC,
  },
  {
    description: 'Only board members can see this',
    icon: <Icon name='lock' color='gray2' size='12' />,
    label: 'Private',
    value: Visibility.PRIVATE,
  },
];

const useVisibilityPopup = (visibility: Visibility) => {
  const [chosenOption, setChosenOption] = useState(
    boardVisibilities.find(el => el.value === visibility),
  );

  return { boardVisibilities, chosenOption, setChosenOption };
};

export default useVisibilityPopup;
