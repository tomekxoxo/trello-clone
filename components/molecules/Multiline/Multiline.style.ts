import styled from 'styled-components';

interface IStyledMultilineContainerProps {
  isEditMode: boolean;
  height: string;
}

export const StyledMultilineContainer = styled.div<IStyledMultilineContainerProps>`
  background-color: ${({ theme }) => theme.colors.white};
  border: 0.1rem solid ${({ theme }) => theme.colors.gray5};
  border-radius: 1.2rem;
  filter: drop-shadow(rgba(0, 0, 0, 0.05));
  height: ${({ height }) => height};
  padding-bottom: ${({ isEditMode }) => (isEditMode ? '5rem' : '0rem')};
  position: relative;
`;

export const StyledMultiline = styled.textarea`
  border: none;
  border-radius: 1.2rem;
  height: 100%;
  line-height: 1.4rem;
  padding: 1.2rem;
  resize: none;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray4};
    font-weight: 500;
  }
`;

interface IStyledMultilineButtonsProps {
  justifyContent: string;
}

export const StyledMultilineButtons = styled.div<IStyledMultilineButtonsProps>`
  bottom: 1.2rem;
  display: flex;
  gap: 1.2rem;
  justify-content: ${({ justifyContent }) => justifyContent};
  padding: 0 1.2rem;
  position: absolute;
  width: 100%;
`;
