import React, {FC, InputHTMLAttributes} from 'react';
import {InputErrorMessage, InputLabel, InputWrapper, StyledTextInput } from './styled';

type PropsT = InputHTMLAttributes<HTMLInputElement> & {
    label: string
}

const TextInput: FC<PropsT> = (props) => {
    const {label, name, ...restProps} = props
    return (
        <>
            <InputWrapper>
                <StyledTextInput {...restProps} id={name} />
                <InputLabel htmlFor={name}>{ label }</InputLabel>
                <InputErrorMessage>Assistive Text</InputErrorMessage>
            </InputWrapper>
        </>
    );
};

export default TextInput;