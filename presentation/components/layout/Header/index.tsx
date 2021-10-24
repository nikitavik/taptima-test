import React, { FC } from 'react';
import bell from '/public/icons/bell.svg';
import exit from '/public/icons/exit.svg';
import Logo from './Logo';
import Alert from './Alert';
import IconButton from '../../common/control/IconButton';
import { ButtonsWrapper, StyledHeader } from './styled';

const Header: FC = () => {
  return (
    <StyledHeader>
      <Logo />
      <Alert />
      <ButtonsWrapper>
        <IconButton src={bell.src} size={24} color={'#fff'} onClick={() => null} />
        <IconButton src={exit.src} size={24} color={'#fff'} onClick={() => null} />
      </ButtonsWrapper>
    </StyledHeader>
  );
};

export default Header;
