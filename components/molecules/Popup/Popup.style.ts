import styled from 'styled-components';

export const StyledPopup = styled.div`
  position: relative;
`;

interface IStyledPopupContentProps {
  attachmentSide: 'left' | 'right';
}

export const StyledPopupContent = styled.div<IStyledPopupContentProps>`
  background-color: ${({ theme }) => theme.colors.white};
  border: 0.1rem solid ${({ theme }) => theme.colors.gray5};
  border-radius: 1.2rem;
  display: flex;
  filter: drop-shadow(rgba(0, 0, 0, 0.05));
  flex-direction: column;
  height: fit-content;
  margin-top: 1.2rem;
  padding: 1.2rem;
  position: absolute;
  width: 24rem;
  z-index: 2;
  ${({ attachmentSide }) => (attachmentSide === 'left' ? 'left:0' : 'right:0')};
`;
