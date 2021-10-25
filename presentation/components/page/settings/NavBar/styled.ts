import styled from 'styled-components';
import { mq } from '../../../../../constant/mediaqueries';

export const StyledNavBar = styled.nav`
  width: 100%;
  height: ${({ theme }) => theme.sizes.navBarHeight};
  border-bottom: ${({ theme }) => theme.borders.gray1pxBorder};

  ${mq.xs} {
    height: calc(${({ theme }) => theme.sizes.navBarHeight} - 1rem);
  }
`;

export const TabList = styled.ul`
  display: flex;
  height: 100%;
  padding: 0;
  margin: 0;
  list-style-type: none;
`;
