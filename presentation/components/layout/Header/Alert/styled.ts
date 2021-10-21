import styled from "styled-components";

export const HeaderAlert = styled.div`
  display: flex;
  margin-left: 34px;
  padding: 6px 16px 6px 6px;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.lightGray23};
`
export const AlertTag = styled.div`
  color: #fff;
  font-weight: 500;
  font-size: 10px;
  line-height: 120%;
  letter-spacing: 0.3px;
  background-color: ${props => props.theme.colors.accentGreen};
  border-radius: 4px;
  padding: 3px 6px;
  text-transform: uppercase;
  max-height: 19px;
`
export const AlertText = styled.div`
  margin-left: 14px;
  color: ${props => props.theme.colors.lightBlue};
  font-size: 14px;
  font-weight: 400;
  line-height: 114%;
  & a {
    color: #fff;
  }
`
