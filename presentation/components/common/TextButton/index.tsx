import React, { ButtonHTMLAttributes, FC } from 'react';
import { ButtonColors } from '../../../../enums/styledComponents';
import { StyledTextButton } from './styled';

type PropsT = ButtonHTMLAttributes<HTMLButtonElement> & {
  color: ButtonColors.primary | ButtonColors.secondary;
  onClick?: () => void;
};

const TextButton: FC<PropsT> = (props) => {
  const { children, color, onClick, ...restProps } = props;
  return (
    <StyledTextButton color={color} onClick={onClick} {...restProps}>
      {children}
    </StyledTextButton>
  );
};

export default TextButton;
