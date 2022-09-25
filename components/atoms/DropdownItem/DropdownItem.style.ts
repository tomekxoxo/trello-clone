import styled from 'styled-components';

export const StyledDropdownItem = styled.div`
  align-items: center;
  border-radius: 1.2rem;
  cursor: pointer;
  display: flex;
  padding: 1.2rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;
