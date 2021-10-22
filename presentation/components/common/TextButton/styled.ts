import styled from "styled-components";
import {ButtonColors} from "../../../../enums/styledComponents";
import {colorPicker} from "../../../../helpers/styledComponents";

export const StyledTextButton = styled.button<{color: ButtonColors} >`
  padding:  0.75rem 0.875rem;
  background: transparent;
  border: none;
  ${({ color,theme }) => color === 'primary' && colorPicker(theme.colors.primaryBlue)}
  ${({ color, theme }) => color === 'secondary' && colorPicker(theme.colors.secondaryBlue)}
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 133%;
  text-align: center;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  white-space: nowrap;
  cursor: pointer;
  transition: all 250ms ease-in;
  &:hover{
    color: ${props => props.theme.colors.darkenBlue};
  }
  &:active{
    ${({ color,theme }) => color === 'primary' && colorPicker(theme.colors.primaryBlue)}
    ${({ color, theme }) => color === 'secondary' && colorPicker(theme.colors.secondaryBlue)}
  }
  &:disabled{
    color: ${props => props.theme.colors.gray33};
    cursor: auto;
  }
`
