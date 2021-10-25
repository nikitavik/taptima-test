import React, { FC } from 'react';
import Link from 'next/link';
import { NavBarLink } from '../../../../../constant/navBarRouterLinks';
import { StyledLink, StyledNavTab, TabText } from './styled';

type PropsT = NavBarLink & {
  isActive: boolean;
};

const NavTab: FC<PropsT> = (props) => {
  const { to, text, isActive } = props;
  return (
    <Link href={to} passHref>
      <StyledNavTab isActive={isActive}>
        <StyledLink href={to}>
          <TabText>{text}</TabText>
        </StyledLink>
      </StyledNavTab>
    </Link>
  );
};

export default NavTab;
