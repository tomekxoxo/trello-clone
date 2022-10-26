import { Orientation } from 'Components/atoms/Separator/Separator';
import styled from 'styled-components';

interface StyledSeparatorProps {
  color: string;
  orientation: Orientation;
}

export const StyledSeparator = styled.hr<StyledSeparatorProps>`
  border: 1px solid ${({ color }) => color};
  height: ${({ orientation }) => (orientation === 'horizontal' ? '0' : '100%')};
  width: ${({ orientation }) => (orientation === 'horizontal' ? '100%' : '0')};
`;
