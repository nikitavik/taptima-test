import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

const StyledCard = styled.div<{ area: string }>`
  border: ${(props) => props.theme.borders.light1pxBorder};
  box-shadow: ${(props) => props.theme.shadows.lightShadow};
  border-radius: 4px;
  background-color: #fff;
  grid-area: ${(props) => props.area};
`;
const CardHeader = styled.div`
  border-bottom: ${(props) => props.theme.borders.gray1pxBorder};
`;
const CardFooter = styled.div`
  border-top: ${(props) => props.theme.borders.gray1pxBorder};
`;

type PropsT = {
  header?: ReactNode;
  area: string;
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
