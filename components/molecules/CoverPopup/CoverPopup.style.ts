import Popup from 'Components/atoms/Popup/Popup';
import styled from 'styled-components';

export const StyledCoverPopup = styled(Popup)`
  width: 100%;
`;

export const StyledCoverPopupContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  height: 25rem;
`;

export const StyledCoverPopupGallery = styled.div`
  display: grid;
  gap: 0.8rem;
  grid-template-columns: repeat(3, 1fr);
  overflow-y: scroll;
`;

export const StyledCoverPopupNoResults = styled.h4``;
