import React, { FC } from 'react';
import Link from 'next/link';
import { NavBarLink } from '../../../../../constant/navBarRouterLinks';
import { StyledNavTab, TabText } from './styled';

type PropsT = NavBarLink & {
  isActive: boolean;
};

const NavTab: FC<PropsT> = (props) => {
  const { to, text, isActive } = props;
  return (
    <Link href={to}>
      <StyledNavTab isActive={isActive}>
        <TabText>{text}</TabText>
      </StyledNavTab>
    </Link>
  );
};

export default NavTab;
