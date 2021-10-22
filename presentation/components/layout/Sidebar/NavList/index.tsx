import React, { FC } from 'react';
import IconNavLink from "../IconNavLink";
import styled from "styled-components";
import {NavLink} from "../index";


const IconNavListWrapper = styled.nav``
const StyledNavList = styled.ul`
  margin: 0.5rem 1.5rem 0;
  padding: 0 0 1.5rem;
  border-bottom: ${props => props.theme.borders.gray1pxBorder};
  list-style-type: none;
`

type PropsT = {
    links: NavLink[]
}
const NavList: FC<PropsT> = (props) => {
    const {links} = props;
    return (
        <IconNavListWrapper>
            <StyledNavList>
                {
                    links.map(link => {
                        return <IconNavLink key={link.to} {...link} />
                    })
                }
            </StyledNavList>
        </IconNavListWrapper>
    );
};

export default NavList;