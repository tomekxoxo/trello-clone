import Button from 'Components/atoms/Button/Button';
import styled from 'styled-components';

interface IStyledModalWrapperContentProps {
  width: string;
}

export const StyledModalWrapperContent = styled.div<IStyledModalWrapperContentProps>`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.8rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  height: fit-content;
  left: 50%;
  outline: none;
  padding: 2.4rem;
  position: relative;
  top: 50%;
  transform: translate(-50%, -50%);
  width: ${({ width }) => width};
`;

export const StyledModalWrapperOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

export const StyledModalWrapperCloseButton = styled(Button)`
  fill: white;
  position: absolute;
  right: 1.2rem;
  top: 1.2rem;
`;
