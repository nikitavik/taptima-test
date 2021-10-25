import React, { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { SidebarNavLink } from '../../../../../constant/sideBarRouterLinks';
import IconButton from '../../../common/control/IconButton';
import { LinkText, StyledIconNavLink, StyledLink } from './styled';

type PropsT = SidebarNavLink;

const IconNavLink: FC<PropsT> = (props) => {
  const { to, text, icon } = props;
  const { route } = useRouter();
  return (
    <Link href={to} passHref>
      <StyledIconNavLink isActive={route === to}>
        <StyledLink href={to}>
          <IconButton src={icon} color={'#66788A'} size={24} />
          <LinkText>{text}</LinkText>
        </StyledLink>
      </StyledIconNavLink>
    </Link>
  );
};

export default IconNavLink;
