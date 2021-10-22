import styled from "styled-components";

export const StyledNavTab = styled.li<{ isActive: boolean }>`
  padding: 1rem;
  margin: 0 0.7rem;
  cursor: pointer;
  border-bottom: ${props => props.isActive ? `3px solid ${props.theme.colors.darkenBlue}`: ""};
  &:hover{
    border-bottom: 3px solid ${props => props.theme.colors.darkenBlue};
  }
`
export const TabText = styled.span`
  font-weight: 500;
  font-size: 1rem;
  line-height: 125%;
  letter-spacing: -0.05px;
`
