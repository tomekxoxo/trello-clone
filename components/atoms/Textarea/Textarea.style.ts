import styled from 'styled-components';

interface StyledTextareaProps {
  height: string;
}

export const StyledTextarea = styled.textarea<StyledTextareaProps>`
  background-color: ${({ theme }) => theme.colors.white};
  border: 0.1rem solid ${({ theme }) => theme.colors.gray5};
  border-radius: 1.2rem;
  height: ${({ height }) => height};
  line-height: 1.4rem;
  padding: 1.2rem;
  resize: none;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray4};
    font-weight: 500;
  }
`;
