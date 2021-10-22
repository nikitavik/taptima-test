import styled from "styled-components";

export const StyledSidebar = styled.aside`
  position: sticky; 
  left: 0;
  margin: 0;
  bottom: 0;
  height: calc(100vh - ${props => props.theme.sizes.headerHeight});
  background-color: #fff;
  border: ${props => props.theme.borders.light1pxBorder};
  box-shadow: ${props => props.theme.shadows.mainShadow};
  top: ${props => props.theme.sizes.headerHeight};
  max-width: ${props => props.theme.sizes.sidebarWidth};
  overflow-y: auto;
  grid-area: sidebar;
`
export const SidebarSubtitle = styled.div`
  color: ${props => props.theme.colors.gray33};
  font-size: 0.82rem;
  font-weight: 500;
  line-height: 108%;
  margin-left: 1rem;
`
export const SidebarSubsection = styled.div`
  margin: 1.5rem 1.5rem 0;
`