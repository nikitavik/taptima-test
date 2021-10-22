import styled from "styled-components";

export const StyledHeader = styled.header`
  position: sticky;
  left: 0;right: 0;top: 0;  
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${props => props.theme.colors.darkenBlue};
  height: ${props => props.theme.sizes.headerHeight};
  grid-area: header;
`

export const HeaderButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 30px;
`
