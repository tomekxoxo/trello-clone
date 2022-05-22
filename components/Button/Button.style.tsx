import styled from 'styled-components';

interface IStyledButton {
  size: 'small' | 'medium' | 'large';
  color: 'primary' | 'secondary';
}

export const StyledButton = styled.button<IStyledButton>`
  border: 0;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${({ color }) => (color === 'primary' ? '#0070f3' : '#f5f5f5')};
  width: ${({ size }) => (size === 'small' ? '80px' : size === 'medium' ? '120px' : '160px')};
  height: ${({ size }) => (size === 'small' ? '80px' : size === 'medium' ? '120px' : '160px')};
`;
