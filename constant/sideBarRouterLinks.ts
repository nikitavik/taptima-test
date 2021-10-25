import dashboard from '/public/icons/dashboard.svg';
import users from '/public/icons/users.svg';
import products from '/public/icons/products.svg';
import auth from '/public/icons/auth.svg';
import typography from '/public/icons/typography.svg';
import icons from '/public/icons/icons.svg';
import { SidebarRoutes } from '../enums/routes';

export type SidebarNavLink = {
  to: SidebarRoutes;
  text: string;
  icon: string;
};

export const SIDEBAR_LINKS: SidebarNavLink[] = [
  { to: SidebarRoutes.dashboard, text: 'Dashboard', icon: dashboard.src },
  { to: SidebarRoutes.users, text: 'Users', icon: users.src },
  { to: SidebarRoutes.products, text: 'Products', icon: products.src },
  { to: SidebarRoutes.authentication, text: 'Authentication', icon: auth.src },
  { to: SidebarRoutes.typography, text: 'Typography', icon: typography.src },
  { to: SidebarRoutes.icons, text: 'Icons & Images', icon: icons.src },
];
