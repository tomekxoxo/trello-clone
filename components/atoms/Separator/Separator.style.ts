import styled from 'styled-components';

interface IStyledSeparatorProps {
  color: string;
  orientation: string;
}

export const StyledSeparator = styled.hr<IStyledSeparatorProps>`
  border: 1px solid ${({ color }) => color};
  height: ${({ orientation }) => (orientation === 'horizontal' ? '0' : '100%')};
  width: ${({ orientation }) => (orientation === 'horizontal' ? '100%' : '0')};
`;
