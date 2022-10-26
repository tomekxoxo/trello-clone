import styled from 'styled-components';

interface StyledLabelProps {
  color: string;
}

export const StyledLabel = styled.label<StyledLabelProps>`
  background-color: ${({ color }) => color};
  border-radius: 0.8rem;
  padding: 0.2rem 0.9rem;
`;
