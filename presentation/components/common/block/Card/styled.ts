import styled from 'styled-components';

export const StyledCard = styled.div<{ area: string }>`
  border: ${({ theme }) => theme.borders.light1pxBorder};
  box-shadow: ${({ theme }) => theme.shadows.lightShadow};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  grid-area: ${({ area }) => area};
`;
export const Header = styled.div`
  border-bottom: ${({ theme }) => theme.borders.gray1pxBorder};
`;
export const Footer = styled.div`
  border-top: ${({ theme }) => theme.borders.gray1pxBorder};
`;
