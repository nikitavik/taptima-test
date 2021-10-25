import styled from 'styled-components';

export const StyledIconButton = styled.div<{ size: number | string; color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 16px;
  max-width: ${({ size }) => size};
  min-width: ${({ size }) => size};
  max-height: ${({ size }) => size};
  fill: ${({ color }) => color};
  cursor: pointer;
  & * {
    max-width: ${({ size }) => size};
    max-height: ${({ size }) => size};
  }
`;
