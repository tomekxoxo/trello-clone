import styled from 'styled-components';

interface StyledMultilineContainerProps {
  isEditMode: boolean;
}

export const StyledMultilineContainer = styled.div<StyledMultilineContainerProps>`
  filter: drop-shadow(rgba(0, 0, 0, 0.05));
  padding-bottom: ${({ isEditMode }) => (isEditMode ? '5rem' : '0rem')};
  position: relative;
`;

interface StyledMultilineButtonsProps {
  justifyContent: string;
}

export const StyledMultilineButtons = styled.div<StyledMultilineButtonsProps>`
  bottom: 1.2rem;
  display: flex;
  gap: 1.2rem;
  justify-content: ${({ justifyContent }) => justifyContent};
  padding: 0 1.2rem;
  position: absolute;
  width: 100%;
`;
