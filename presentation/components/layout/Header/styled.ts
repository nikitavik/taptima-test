import styled from 'styled-components';

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
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 1.875rem;
`;
