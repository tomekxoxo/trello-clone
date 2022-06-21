import styled from 'styled-components';

export const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1.2rem;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 1.2rem;
  width: 24.3rem;
`;

export const StyledCardLabels = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
`;

export const StyledCardUsers = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
`;

export const StyledCardActions = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: flex-end;
`;
