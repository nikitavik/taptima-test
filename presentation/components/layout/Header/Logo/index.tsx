import React, { FC } from 'react';
import Link from 'next/link';
import { ReactSVG } from 'react-svg';
import logo from '/public/logos/logo.svg';
import { LogoText, ImageWrapper, StyledLogo } from './styled';

const Logo: FC = () => {
  return (
    <Link href="/" passHref>
      <StyledLogo>
        <ImageWrapper>
          <ReactSVG
            src={logo.src}
            beforeInjection={(svg) => {
              svg.setAttribute('style', 'width: 36px');
              svg.setAttribute('style', 'height: 36px');
            }}
          />
        </ImageWrapper>
        <LogoText>Devias Kit</LogoText>
      </StyledLogo>
    </Link>
  );
};

export default Logo;
