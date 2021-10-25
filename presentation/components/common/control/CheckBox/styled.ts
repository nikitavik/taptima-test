import styled from 'styled-components';
import { hideVisually } from 'polished';
import checkbox from '/public/checkbox.svg';

export const Label = styled.label`
  cursor: pointer;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;
export const HiddenInput = styled.input`
  ${hideVisually()}

  &:checked + div {
    background-image: url(${checkbox.src});
    border: none;
  }
  &:disabled + div {
    border: 2px solid ${({ theme }) => theme.colors.gray33};
    cursor: default;
  }
  &:disabled ~ div {
    color: ${({ theme }) => theme.colors.subFont};
  }
`;

export const Box = styled.div`
  width: 1.125rem;
  height: 1.125rem;
  min-width: 1.125rem;
  min-height: 1.125rem;
  border: 2px solid ${({ theme }) => theme.colors.secondaryBlue};
  border-radius: 4px;
`;

export const CheckBoxText = styled.div`
  margin-left: 0.5rem;
  font-size: 1rem;
  line-height: 150%;
  letter-spacing: 0.15px;
  color: ${({ theme }) => theme.colors.gray6};
`;

export const SubText = styled.div`
  margin-left: calc(1.225rem + 0.5rem);
  font-size: 12px;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.lightFont};
`;
