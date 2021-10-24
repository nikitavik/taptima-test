import React, { ButtonHTMLAttributes, FC } from 'react';
import { ButtonColorsT } from '../../../../../enums/styledComponents';
import { StyledPrimaryButton } from './styled';

type PropsT = ButtonHTMLAttributes<HTMLButtonElement> & {
  color: ButtonColorsT;
  onClick?: () => void;
};

const PrimaryButton: FC<PropsT> = (props) => {
  const { children, color, onClick, ...restProps } = props;
  return (
    <StyledPrimaryButton color={color} onClick={onClick} {...restProps}>
      {children}
    </StyledPrimaryButton>
  );
};

export default PrimaryButton;
