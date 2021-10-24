import React, { FC } from 'react';
import { SidebarNavLink } from '../../../../../constant/sideBarRouterLinks';
import IconNavLink from '../IconNavLink';
import { Nav, StyledNavList } from './styled';

type PropsT = {
  links: SidebarNavLink[];
};

const NavList: FC<PropsT> = (props) => {
  const { links } = props;
  return (
    <Nav>
      <StyledNavList>
        {links.map((link) => {
          return <IconNavLink key={link.to} {...link} />;
        })}
      </StyledNavList>
    </Nav>
  );
};

export default NavList;
