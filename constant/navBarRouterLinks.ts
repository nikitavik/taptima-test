import { NavBarRoutes, NavBarRoutesT } from '../enums/routes';

export type NavBarLink = {
  to: NavBarRoutesT;
  text: string;
};

export const NAVBAR_LINKS: NavBarLink[] = [
  { to: NavBarRoutes.profile, text: 'Profile' },
  { to: NavBarRoutes.account, text: 'Account' },
  { to: NavBarRoutes.priceplans, text: 'Price Plans' },
];