import styled from 'styled-components';
import { mq } from '../../../../constant/mediaqueries';

export const StyledHeader = styled.header`
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.darkenBlue};
  max-height: ${({ theme }) => theme.sizes.headerHeight};
  grid-area: header;
  z-index: 100;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 1.875rem;
`;

export const BurgerWrapper = styled.div`
  box-sizing: content-box;
  display: none;
  ${mq.xs} {
    display: flex;
    align-items: center;
    padding: 0.8rem 0.8rem 0.8rem 0.8rem;
    height: 25px;
    width: 25px;
    fill: #fff;
    stroke: #fff;
    cursor: pointer;
  }
`;
