import styled from 'styled-components';
import { mq } from '../../../../constant/mediaqueries';

export const StyledSidebar = styled.aside<{ isOpen: boolean }>`
  position: sticky;
  left: 0;
  margin: 0;
  bottom: 0;
  height: calc(100vh - ${({ theme }) => theme.sizes.headerHeight});
  background-color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => theme.borders.light1pxBorder};
  box-shadow: ${({ theme }) => theme.shadows.mainShadow};
  top: ${({ theme }) => theme.sizes.headerHeight};
  max-width: ${({ theme }) => theme.sizes.sidebarWidth};
  overflow-y: hidden;
  grid-area: sidebar;
  transition: transform 0.25s ease;
  ${mq.xs} {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
    z-index: 1000;
  }
`;

export const Subtitle = styled.h3`
  color: ${(props) => props.theme.colors.gray33};
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 108%;
  margin-left: 1.25rem;
`;

export const Subsection = styled.nav`
  margin: 1.5rem 1.5rem 0;
`;

export const SubsectionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SidebarCross = styled.figure`
  display: none;
  ${mq.xs} {
    display: block;
    position: absolute;
    top: -1rem;
    right: 0;
    padding: 1rem;
    font-size: 3rem;
    cursor: pointer;
  }
`;
