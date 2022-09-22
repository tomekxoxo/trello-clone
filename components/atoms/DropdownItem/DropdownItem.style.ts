import styled from 'styled-components';

export const StyledDropdownItem = styled.div`
  align-items: center;
  border-radius: 0.8rem;
  cursor: pointer;
  display: flex;
  padding: 0.2rem 0;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;
