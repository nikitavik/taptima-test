import React, { FC } from 'react';
import support from '/public/icons/support.svg';
import { SIDEBAR_LINKS } from '../../../../constant/sideBarRouterLinks';
import { SidebarRoutes } from '../../../../enums/routes';
import UserProfile from './UserProfile';
import IconNavLink from './IconNavLink';
import NavList from './NavList';
import { Subsection, Subtitle, StyledSidebar, SidebarCross, SubsectionList } from './styled';

type PropsT = {
  isOpen: boolean;
  onToggleSidebar: () => void;
};
const Sidebar: FC<PropsT> = (props) => {
  const { isOpen, onToggleSidebar } = props;
  return (
    <StyledSidebar isOpen={isOpen}>
      <SidebarCross onClick={onToggleSidebar}>&times;</SidebarCross>
      <UserProfile />
      <NavList links={SIDEBAR_LINKS} />
      <Subsection>
        <Subtitle>Support</Subtitle>
        <SubsectionList>
          <IconNavLink to={SidebarRoutes.support} text="Support" icon={support.src} />
        </SubsectionList>
      </Subsection>
    </StyledSidebar>
  );
};

export default Sidebar;
