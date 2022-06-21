import styled from 'styled-components';

export const StyledDropdownItem = styled.div`
  border-radius: 0.8rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  justify-content: center;
  padding: 0.8rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;

export const StyledDropdownItemHeader = styled.header`
  align-items: center;
  display: flex;
  gap: 0.8rem;
`;
