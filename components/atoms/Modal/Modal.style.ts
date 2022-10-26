import Button from 'Components/atoms/Button/Button';
import styled from 'styled-components';

interface StyledModalWrapperContentProps {
  width: string;
}

export const StyledModalWrapperContent = styled.div<StyledModalWrapperContentProps>`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.8rem;
  box-shadow: 0px 15px 7px -10px rgba(30, 30, 30, 0.1), 0px 10px 40px -5px rgba(30, 30, 30, 0.07);
  display: flex;
  height: fit-content;
  left: 50%;
  max-height: calc(100vh - 8rem);
  outline: none;
  padding: 2.4rem;
  position: relative;
  top: 50%;
  transform: translate(-50%, -50%);
  width: ${({ width }) => width}; ;
`;

export const StyledModalWrapperOverlay = styled.div`
  backdrop-filter: blur(4px);
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
`;

export const StyledModalWrapperCloseButton = styled(Button)`
  fill: white;
  position: absolute;
  right: 1.2rem;
  top: 1.2rem;
  z-index: 1;
`;
