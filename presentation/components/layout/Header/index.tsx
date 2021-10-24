import React, { FC } from 'react';
import bell from '/public/icons/bell.svg';
import exit from '/public/icons/exit.svg';
import burger from '/public/icons/burger.svg';
import IconButton from '../../common/control/IconButton';
import Logo from './Logo';
import Alert from './Alert';
import { BurgerWrapper, ButtonsWrapper, StyledHeader } from './styled';
import { ReactSVG } from 'react-svg';

type PropsT = {
  onToggleSidebar: () => void;
};

const Header: FC<PropsT> = (props) => {
  const { onToggleSidebar } = props;
  return (
    <StyledHeader>
      <BurgerWrapper onClick={onToggleSidebar}>
        <ReactSVG
          src={burger.src}
          beforeInjection={(svg) => {
            svg.setAttribute('style', 'width: 36px');
            svg.setAttribute('style', 'height: 36px');
          }}
        />
      </BurgerWrapper>
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
