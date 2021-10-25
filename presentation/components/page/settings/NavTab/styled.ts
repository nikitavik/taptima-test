import styled from 'styled-components';

export const StyledNavTab = styled.li<{ isActive: boolean }>`
  padding: 1rem;
  margin: 0 0.7rem;
  cursor: pointer;
  border-bottom: ${({ isActive, theme }) =>
    isActive ? `3px solid ${theme.colors.darkenBlue}` : ''};
  transition: all 250ms ease;
  &:hover {
    border-bottom: 3px solid ${({ theme }) => theme.colors.darkenBlue};
  }
`;

export const StyledLink = styled.a`
  width: 100%;
  height: 100%;
`;

export const TabText = styled.span`
  font-weight: 500;
  font-size: 1rem;
  line-height: 125%;
  letter-spacing: -0.05px;
  white-space: nowrap;
`;
