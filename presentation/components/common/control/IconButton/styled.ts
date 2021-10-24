import styled from 'styled-components';

export const StyledIconButton = styled.div<{ size: number | string; color: string }>`
  margin-left: 16px;
  max-width: ${({ size }) => size};
  max-height: ${({ size }) => size};
  fill: ${({ color }) => color};
  cursor: pointer;
  & * {
    max-width: ${({ size }) => size};
    max-height: ${({ size }) => size};
  }
`;
