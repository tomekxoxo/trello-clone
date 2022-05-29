import styled from 'styled-components';

interface IStyledSeparatorProps {
  color: string;
  orientation: string;
}

export const StyledSeparator = styled.div<IStyledSeparatorProps>`
  border: 1px solid ${({ color }) => color};
  height: 100%;
  transform: rotate(${({ orientation }) => (orientation === 'horizontal' ? '90deg' : '0')});
`;
