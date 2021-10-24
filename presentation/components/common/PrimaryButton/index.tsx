import React, { ButtonHTMLAttributes, FC } from 'react';
import { ButtonColors } from '../../../../enums/styledComponents';
import { StyledPrimaryButton } from './styled';

type PropsT = ButtonHTMLAttributes<HTMLButtonElement> & {
  color: ButtonColors.primary | ButtonColors.secondary;
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
