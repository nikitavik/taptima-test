import styled from "styled-components";

export const StyledLogo = styled.div`
  margin-left: 24px;
  display: flex;
  align-items: center;
`
export const LogoImage = styled.div`
  height: 36px;
  min-width: 36px;
  background-image: url("${props => props.theme.svgs.logoURL}");
`
export const LogoText = styled.div`
  margin-left: 8px;
  color: #fff;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: -0.0555556px;
`