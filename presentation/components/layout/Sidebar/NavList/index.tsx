import React, { FC } from 'react';
import IconNavLink from "../IconNavLink";
import {NavLink} from "../index";
import {IconNavListWrapper, StyledNavList } from './styled';


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