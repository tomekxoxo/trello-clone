import Button from 'Components/atoms/Button/Button';
import styled from 'styled-components';

export const StyledMultilineContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 0.1rem solid ${({ theme }) => theme.colors.gray5};
  border-radius: 1.2rem;
  filter: drop-shadow(rgba(0, 0, 0, 0.05));
  height: 12rem;
  padding-bottom: 5rem;
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

export const StyledMultilineButton = styled(Button)`
  bottom: 1.2rem;
  left: 1.2rem;
  position: absolute;
`;
