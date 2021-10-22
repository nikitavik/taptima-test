import React, {ButtonHTMLAttributes, FC} from 'react';
import { ButtonColors } from '../../../../enums/styledComponents';
import { StyledTextButton } from './styled';

type PropsT = ButtonHTMLAttributes<HTMLButtonElement> & {
    color: ButtonColors.primary | ButtonColors.secondary
}

const TextButton: FC<PropsT> = (props) => {
    const { children, color, ...restProps } = props;
    return (
        <StyledTextButton color={color} {...restProps}>
            { children }
        </StyledTextButton>
    );
};

export default TextButton;