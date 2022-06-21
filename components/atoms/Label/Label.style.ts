import styled from 'styled-components';

interface IStyledLabelProps {
  color: string;
}

export const StyledLabel = styled.label<IStyledLabelProps>`
  background-color: ${({ color }) => color};
  border-radius: 0.8rem;
  padding: 0.2rem 0.9rem;
`;
