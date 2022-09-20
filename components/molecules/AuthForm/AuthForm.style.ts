import styled from 'styled-components';

export const StyledAuthForm = styled.form`
  border: 0.1rem solid ${({ theme }) => theme.colors.gray5};
  border-radius: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 1.4rem;
  width: 25rem;
`;

export const StyledAuthButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;
