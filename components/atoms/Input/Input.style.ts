import styled from 'styled-components';

export const StyledInputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledInputButton = styled.div`
  position: absolute;
  right: 2px;
  top: 50%;
  transform: translateY(-50%);
`;

export const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid rgba(224, 224, 224, 1);
  border-radius: 8px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
  filter: drop-shadow(rgba(0, 0, 0, 0.05));
  font-family: ${({ theme }) => theme.fonts.poppins};
  height: 34px;
  line-height: 15px;

  padding: 9px 13px;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray4};
    font-weight: 500;
    line-height: 15px;
  }
`;
