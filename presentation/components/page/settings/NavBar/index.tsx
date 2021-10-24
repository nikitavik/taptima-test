import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { NavBarTabs } from '../../../../../enums/routes';
import NavTab from '../NavTab';
import { NavTabList, StyledNavBar } from './styled';

type NavBar = {
  to: string;
  text: string;
};

const LINKS: NavBar[] = [
  { to: NavBarTabs.profile, text: 'Profile' },
  { to: NavBarTabs.account, text: 'Account' },
  { to: NavBarTabs.priceplans, text: 'Price Plans' },
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
