import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { NavBarRoutes } from '../../../../../enums/routes';
import NavTab from '../NavTab';
import { NavTabList, StyledNavBar } from './styled';

type NavBar = {
  to: string;
  text: string;
};

const LINKS: NavBar[] = [
  { to: NavBarRoutes.profile, text: 'Profile' },
  { to: NavBarRoutes.account, text: 'Account' },
  { to: NavBarRoutes.priceplans, text: 'Price Plans' },
];

const NavBar: FC = () => {
  const { route } = useRouter();
  return (
    <StyledNavBar>
      <NavTabList>
        {LINKS.map((link) => {
          return <NavTab key={link.to} isActive={route === link.to} {...link} />;
        })}
      </NavTabList>
    </StyledNavBar>
  );
};

export default NavBar;
