import Popup from 'Components/atoms/Popup/Popup';
import styled from 'styled-components';

export const StyledLabelsPopup = styled(Popup)`
  width: 100%;
`;

export const StyledLabelsPopupContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  height: fit-content;
`;

export const StyledLabelsPopupList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  max-height: 10rem;
  overflow-y: scroll;
`;

export const StyledLabelsPopupNoResults = styled.h4``;
