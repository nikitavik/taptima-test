import styled from 'styled-components';
import { attributePicker } from '../../../../../helper/styledComponents';

export const StyledPrimaryButton = styled.button<{ color: string }>`
  padding: 0.75rem 1rem;
  ${({ color, theme }) => color === 'primary' && attributePicker('color', theme.colors.white)}
  ${({ color, theme }) =>
    color === 'primary' && attributePicker('background-color', theme.colors.primaryBlue)}
  ${({ color, theme }) =>
    color === 'primary' && attributePicker('box-shadow', theme.shadows.buttonShadow)}
  ${({ color }) => color === 'primary' && attributePicker('border', 'transparent')}
  ${({ color, theme }) =>
    color === 'secondary' && attributePicker('color', theme.colors.primaryBlue)} 
  ${({ color }) => color === 'secondary' && attributePicker('background-color', 'transparent')}
  ${({ color, theme }) =>
    color === 'secondary' && attributePicker('border', theme.borders.lightBlue1pxBorder)}
  border-radius: 4px;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 114%;
  text-align: center;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.25s ease;
  &:hover {
    ${({ color, theme }) =>
      color === 'primary' && attributePicker('background-color', theme.colors.darkenBlue)}
    ${({ color, theme }) =>
      color === 'secondary' && attributePicker('background-color', theme.colors.primaryBlue)}
    ${({ color, theme }) => color === 'secondary' && attributePicker('color', theme.colors.white)}
  }
  &:active {
    ${({ color, theme }) =>
      color === 'primary' && attributePicker('background-color', theme.colors.primaryBlue)}
    ${({ color, theme }) =>
      color === 'secondary' && attributePicker('color', theme.colors.primaryBlue)}
    ${({ color }) => color === 'secondary' && attributePicker('background-color', 'transparent')}
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray33};
    color: ${({ theme }) => theme.colors.white};
    cursor: auto;
  }
`;
