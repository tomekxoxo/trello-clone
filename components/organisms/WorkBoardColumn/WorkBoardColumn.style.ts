import styled from 'styled-components';

export const StyledWorkBoardColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

interface StyledWorkBoardContentProps {
  isHovered: boolean;
}

export const StyledWorkBoardContent = styled.div<StyledWorkBoardContentProps>`
  background-color: ${({ isHovered, theme }) => isHovered && theme.colors.blue2};
  border: 0.2rem dashed
    ${({ isHovered, theme }) => (isHovered ? theme.colors.blue1 : 'transparent')};
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  height: 100%;
`;

export const StyledWorkBoardMultilineWrapper = styled.div`
  bottom: 8.2rem;
  position: sticky;
  z-index: 3;
`;
