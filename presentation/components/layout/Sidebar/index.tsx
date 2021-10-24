import React, { FC } from 'react';
import support from '/public/icons/support.svg';
import { SIDEBAR_LINKS } from '../../../../constant/sideBarRouterLinks';
import { SidebarRoutes } from '../../../../enums/routes';
import UserProfile from './UserProfile';
import IconNavLink from './IconNavLink';
import NavList from './NavList';
import { Subsection, Subtitle, StyledSidebar } from './styled';

const Sidebar: FC = () => {
  return (
    <StyledSidebar>
      <UserProfile />
      <NavList links={SIDEBAR_LINKS} />
      <Subsection>
        <Subtitle>Support</Subtitle>
        <IconNavLink to={SidebarRoutes.support} text="Support" icon={support.src} />
      </Subsection>
    </StyledSidebar>
  );
};

export default Sidebar;
