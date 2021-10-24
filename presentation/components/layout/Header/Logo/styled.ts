import styled from 'styled-components';

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  height: 36px;
  width: 36px;
  fill: ${({ theme }) => theme.colors.white};
`;

export const LogoText = styled.h1`
  margin-left: 0.5rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 120%;
  letter-spacing: -0.0555556px;
  white-space: nowrap;
`;
