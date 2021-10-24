import styled from 'styled-components';
import { attributePicker } from '../../../../../helper/styledComponents';

export const Wrapper = styled.div`
  position: relative;
`;

export const Label = styled.label<{ isInvalid: boolean }>`
  position: absolute;
  left: 0;
  top: 2px;
  margin: 1rem calc(1rem + 1px);
  font-size: 1rem;
  line-height: 150%;
  letter-spacing: 0.15px;
  color: ${({ theme }) => theme.colors.gray6};
  cursor: text;
  transition: all 0.2s ease;
  ${({ isInvalid, theme }) =>
    isInvalid && attributePicker('color', `${theme.colors.redAccent} !important;`)}
`;

export const Input = styled.input<{ isInvalid: boolean }>`
  box-sizing: border-box;
  width: 100%;
  padding: 1rem;
  border-radius: 4px;
  outline: none;
  font-size: 1rem;
  line-height: 150%;
  max-height: 3.6rem;
  letter-spacing: 0.15px;
  color: ${({ theme }) => theme.colors.gray6};
  transition: all 0.2s ease;
  border: ${({ theme }) => theme.borders.gray1pxBorder};
  ${({ isInvalid, theme }) =>
    isInvalid && attributePicker('border', `2px solid ${theme.colors.redAccent} !important;`)}
  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.primaryBlue};
  }
  &:active {
    border: 2px solid ${({ theme }) => theme.colors.primaryBlue};
  }
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primaryBlue};
  }
  &:hover ~ label {
    color: ${({ theme }) => theme.colors.primaryBlue};
  }
  &:focus ~ label {
    color: ${({ theme }) => theme.colors.primaryBlue};
    font-size: 0.75rem;
    transform: translateY(-125%);
    background-color: ${({ theme }) => theme.colors.white};
    padding: 0.2rem;
  }
  &:disabled {
    border: ${({ theme }) => theme.borders.light1pxBorder};
  }
  &:disabled ~ label {
    color: ${({ theme }) => theme.colors.subFont};
  }
  &:not([value='']) ~ label {
    font-size: 0.75rem;
    transform: translateY(-125%);
    background-color: ${({ theme }) => theme.colors.white};
    padding: 0.2rem;
  }
`;
export const ErrorMessage = styled.div`
  margin: 0.1875rem 1rem;
  font-size: 0.75rem;
  line-height: 133%;
  letter-spacing: 0.4px;
  color: ${({ theme }) => theme.colors.redAccent};
`;
