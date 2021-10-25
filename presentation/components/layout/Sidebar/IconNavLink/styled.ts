import styled from 'styled-components';

export const StyledIconNavLink = styled.li<{ isActive: boolean }>`
  list-style-type: none;
  margin-top: 0.3rem;
  width: 100%;
  padding: 0.8rem 0;
  border-radius: 4px;
  transition: all 250ms ease;
  border-bottom-color: ${({ theme, isActive }) => (isActive ? theme.colors.transparentBlue : '')};
  cursor: pointer;
  border-left: ${({ theme, isActive }) =>
    isActive ? `2px solid ${theme.colors.primaryBlue}` : ''};
  &:hover {
    background-color: ${({ theme }) => theme.colors.transparentBlue};
    border-left: 2px solid ${({ theme }) => theme.colors.primaryBlue};
  }
`;

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
`;

export const LinkText = styled.h2`
  margin-left: 0.5rem;
  color: ${(props) => props.theme.colors.lightFont};
  font-size: 0.875rem;
  line-height: 143%;
  font-weight: 500;
  letter-spacing: -0.05px;
`;
