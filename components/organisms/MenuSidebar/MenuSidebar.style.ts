import styled from 'styled-components';

export const StyledMenuSidebar = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  height: calc(100vh - 6.8rem);
  padding: 2rem;
  position: absolute;
  right: 0;
  top: 6.8rem;
  width: 37.7rem;
  z-index: 2;
`;

export const StyledMenuSidebarHeader = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const StyledMenuSidebarContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  overflow-y: scroll;
  width: 100%;
`;
