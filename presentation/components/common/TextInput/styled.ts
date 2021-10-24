import styled from "styled-components";
import { attributePicker } from "../../../../helpers/styledComponents";

export const InputWrapper = styled.div`
  position: relative;
`

export const InputLabel = styled.label<{isInvalid: boolean}>`
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
  ${({ isInvalid, theme }) => isInvalid && attributePicker("color", `${theme.colors.redAccent} !important;`)}
`

export const StyledTextInput = styled.input<{isInvalid: boolean}>`
  box-sizing: border-box;
  width: 100%;
    padding: 1rem;
    border-radius: 4px;
    outline: none;
  font-size: 1rem;
  line-height: 150%;
  max-height: 3.6rem;
  letter-spacing: 0.15px; 
  color: ${props => props.theme.colors.gray6};
  transition: all 0.2s ease;
  border: ${props => props.theme.borders.gray1pxBorder};
  ${({ isInvalid, theme }) => isInvalid && attributePicker("border", `2px solid ${theme.colors.redAccent} !important;`)}
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
  &:not([value=""]) ~ label{
    font-size: 0.75rem;
    transform: translateY(-125%);
    background-color: #fff;
    padding: 0.2rem;
  }
`
export const InputErrorMessage = styled.div`
    margin: 0.1875rem 1rem;
  font-size: 0.75rem;
  line-height: 133%;
  letter-spacing: 0.4px;
  color: ${props => props.theme.colors.redAccent};
`