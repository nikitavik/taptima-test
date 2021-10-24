import React, { FC } from 'react';
import support from '/public/icons/support.svg';
import UserProfile from './UserProfile';
import { SidebarSubsection, SidebarSubtitle, StyledSidebar } from './styled';
import NavList from './NavList';
import IconNavLink from './IconNavLink';
import { SidebarRoutes } from '../../../../enums/routes';
import dashboard from '/public/icons/dashboard.svg';
import users from '/public/icons/users.svg';
import products from '/public/icons/products.svg';
import auth from '/public/icons/auth.svg';
import typography from '/public/icons/typography.svg';
import icons from '/public/icons/icons.svg';

export type NavLink = {
  to: string;
  text: string;
  icon: string;
};

const LINKS: NavLink[] = [
  { to: SidebarRoutes.dashboard, text: 'Dashboard', icon: dashboard.src },
  { to: SidebarRoutes.users, text: 'Users', icon: users.src },
  { to: SidebarRoutes.products, text: 'Products', icon: products.src },
  { to: SidebarRoutes.authentication, text: 'Authentication', icon: auth.src },
  { to: SidebarRoutes.typography, text: 'Typography', icon: typography.src },
  { to: SidebarRoutes.icons, text: 'Icons & Images', icon: icons.src },
];

const Sidebar: FC = () => {
  return (
    <StyledSidebar>
      <UserProfile />
      <NavList links={LINKS} />
      <SidebarSubsection>
        <SidebarSubtitle>Support</SidebarSubtitle>
        <IconNavLink to={SidebarRoutes.support} text="Support" icon={support.src} />
      </SidebarSubsection>
    </StyledSidebar>
  );
};

export default Sidebar;
