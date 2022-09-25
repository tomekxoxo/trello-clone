import styled from 'styled-components';

interface IStyledDropdownContentProps {
  attachmentSide: 'left' | 'right';
  width: string;
}

export const StyledDropdown = styled.div`
  position: relative;
`;

export const StyledDropdownContent = styled.div<IStyledDropdownContentProps>`
  background-color: ${({ theme }) => theme.colors.white};
  border: 0.1rem solid ${({ theme }) => theme.colors.gray5};
  border-radius: 1.2rem;
  display: flex;
  filter: drop-shadow(rgba(0, 0, 0, 0.05));
  flex-direction: column;
  height: fit-content;
  margin-top: 1.2rem;
  max-height: 19.9rem;
  position: absolute;
  width: ${({ width }) => width};
  z-index: 2;
  ${({ attachmentSide }) => (attachmentSide === 'left' ? 'left:0' : 'right:0')};
`;

export const StyledDropdownContentScrollable = styled.div`
  overflow-y: scroll;
`;
