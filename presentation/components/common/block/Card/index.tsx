import React, { FC, ReactNode } from 'react';
import { CardAreaT } from '../../../../../enums/cardAreas';
import { CardFooter, CardHeader, StyledCard } from './styled';

type PropsT = {
  header?: ReactNode;
  area: CardAreaT;
  footer?: ReactNode;
};

const Card: FC<PropsT> = (props) => {
  const { children, header, footer, area } = props;
  return (
    <StyledCard area={area}>
      {header ? <CardHeader>{header}</CardHeader> : ''}
      {children}
      {footer ? <CardFooter>{footer}</CardFooter> : ''}
    </StyledCard>
  );
};

export default Card;
