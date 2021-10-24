import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { NAVBAR_LINKS } from '../../../../../constant/navBarRouterLinks';
import NavTab from '../NavTab';
import { TabList, StyledNavBar } from './styled';

const NavBar: FC = () => {
  const { route } = useRouter();
  return (
    <StyledNavBar>
      <TabList>
        {NAVBAR_LINKS.map((link) => {
          return <NavTab key={link.to} isActive={route === link.to} {...link} />;
        })}
      </TabList>
    </StyledNavBar>
  );
};

export default NavBar;
