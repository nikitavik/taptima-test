import React, { FC, ReactNode } from 'react';
import { CardAreaT } from '../../../../../enums/cardAreas';
import { Footer, Header, StyledCard } from './styled';

type PropsT = {
  header?: ReactNode;
  area: CardAreaT;
  footer?: ReactNode;
};

const Card: FC<PropsT> = (props) => {
  const { children, header, footer, area } = props;
  return (
    <StyledCard area={area}>
      {header ? <Header>{header}</Header> : ''}
      {children}
      {footer ? <Footer>{footer}</Footer> : ''}
    </StyledCard>
  );
};

export default Card;
