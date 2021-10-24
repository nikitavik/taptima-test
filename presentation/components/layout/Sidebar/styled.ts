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
  overflow-y: auto;
  grid-area: sidebar;
  transition: all 0.2s ease-in;
  ${mq.xs} {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    display: ${({ isOpen }) => (isOpen ? 'block' : `none`)};
    z-index: 1000;
  }
`;
export const Subtitle = styled.h6`
  color: ${(props) => props.theme.colors.gray33};
  font-size: 0.82rem;
  font-weight: 500;
  line-height: 108%;
  margin: 0 0 0 1rem;
`;

export const Subsection = styled.div`
  margin: 1.5rem 1.5rem 0;
`;
export const SidebarCross = styled.div`
  display: none;
  ${mq.xs} {
    display: block;
    position: absolute;
    top: -1rem;
    right: 0;
    padding: 1rem;
    font-size: 3rem;
  }
`;
