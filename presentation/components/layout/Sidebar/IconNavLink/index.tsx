import React, { FC } from 'react';
import Link from 'next/link';
import IconButton from '../../../common/IconButton';
import { LinkText, StyledIconNavLink, StyledLink } from './styled';
import { useRouter } from 'next/router';

type PropsT = {
  to: string;
  text: string;
  icon: string;
};

const IconNavLink: FC<PropsT> = (props) => {
  const { to, text, icon } = props;
  const { route } = useRouter();
  return (
    <Link href={to} passHref>
      <StyledIconNavLink isActive={route === to}>
        <StyledLink>
          <IconButton src={icon} color={'#66788A'} size={24} />
          <LinkText>{text}</LinkText>
        </StyledLink>
      </StyledIconNavLink>
    </Link>
  );
};

export default IconNavLink;
