import styled from "styled-components";

export const StyledNavBar = styled.nav`
    width: 100%;
    height: ${props => props.theme.sizes.navBarHeight};
    border-bottom: ${props => props.theme.borders.gray1pxBorder};
    grid-area: navbar;
`
export const NavTabList = styled.ul`
  height: 100%;
  list-style-type: none;
  padding: 0;margin: 0;
  display: flex;
`
