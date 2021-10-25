import styled from 'styled-components';

export const StatusMessage = styled.p<{ isSuccessful: boolean }>`
  margin-left: 1rem;
  font-size: 1rem;
  color: ${({ isSuccessful, theme }) =>
    isSuccessful ? theme.colors.accentGreen : theme.colors.redAccent};
`;
