import styled from 'styled-components';

export const StyledIconButton = styled.figure<{ size: number | string; color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 16px;
  width: ${({ size }) => size};
  min-width: ${({ size }) => size};
  height: ${({ size }) => size};
  min-height: ${({ size }) => size};
  cursor: pointer;
  & svg {
    fill: ${({ color }) => color};
    width: 100%;
    height: 100%;
  }
`;
