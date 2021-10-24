import React, {FC, InputHTMLAttributes} from 'react';
import styled from 'styled-components';


const InputWrapper = styled.div`
  position: relative;
`

const InputLabel = styled.label`
    position: absolute;
    left: 0;
    top: 2px;
    margin: 1rem calc(1rem + 1px) ;
  font-size: 1rem;
  line-height: 150%;
  letter-spacing: 0.15px;
  color: ${props => props.theme.colors.gray6};
  cursor: text;
  transition: all 0.2s ease; 
`

const StyledTextInput = styled.input`
  width: 100%;
    padding: 1rem;
    border: 1px solid ${props => props.theme.borders.gray1pxBorder};
    border-radius: 4px;
    outline: none;
  font-size: 1rem;
  line-height: 150%;
  letter-spacing: 0.15px;
  color: ${props => props.theme.colors.gray6};
  transition: all 0.2s ease;

  &:hover{
      border: 2px solid ${props => props.theme.colors.primaryBlue}
    }
    &:active{
      border: 2px solid ${props => props.theme.colors.primaryBlue}

    }
    &:focus{
      border: 2px solid ${props => props.theme.colors.primaryBlue}
    }
  &:hover~ label{
      color: ${props => props.theme.colors.primaryBlue};
  }
  &:focus ~ label {
    color: ${props => props.theme.colors.primaryBlue};
    font-size: 0.75rem;
    transform: translateY(-125%);
    background-color: #fff;
    padding: 0.2rem;
    
  }
  &[value=""] ~ label{
    font-size: 0.75rem;
    transform: translateY(-125%);
    background-color: #fff;
    padding: 0.2rem;
  }
`
const InputErrorMessage = styled.div`
    margin: 0.1875rem 1rem;
  font-size: 0.75rem;
  line-height: 133%;
  letter-spacing: 0.4px;
  color: ${props => props.theme.colors.gray6};
`


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