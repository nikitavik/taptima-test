import styled from "styled-components";

export const MainContent = styled.div`
  margin: 0;
  background-color: ${props => props.theme.colors.backgroundGray};
  grid-area: main;
`

export const MainContainer = styled.main`
  display: grid;
  grid-template-columns: ${props => props.theme.sizes.sidebarWidth} auto;
  grid-template-rows: ${props => props.theme.sizes.headerHeight} auto;
  grid-template-areas: 
          "header header"
          "sidebar main"
  ;
`
