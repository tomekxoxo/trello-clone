import styled from 'styled-components';

export const StyledWorkBoardColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

interface IStyledWorkBoardContentProps {
  isHovered: boolean;
}

export const StyledWorkBoardContent = styled.div<IStyledWorkBoardContentProps>`
  background-color: ${({ isHovered, theme }) => isHovered && theme.colors.green3};
  border: 0.2rem dashed
    ${({ isHovered, theme }) => (isHovered ? theme.colors.green1 : 'transparent')};
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  height: 100%;
`;
