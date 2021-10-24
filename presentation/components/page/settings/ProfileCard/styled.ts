import styled from "styled-components";
import {mq} from "../../../../../constant/mediaqueries";

export const StyledProfileCard = styled.div`
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
`

export const ProfileCardFooter = styled.div`
    margin: 0.625rem 1.5rem;
    display: flex;
    justify-content: space-between;
`
export const ProfileTextWrapper = styled.div``

export const ProfileCardTitle = styled.div`
  color: ${props => props.theme.colors.deepBlackFont};
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 117%;
  letter-spacing: -0.06px;
  white-space: nowrap;
`
export const ProfileCardSubtitle = styled.div`
  font-size: 0.875rem;
  line-height: 143%;
  letter-spacing: -0.05px;
  color: ${(props) => props.theme.colors.subFont};
`;

export const ProfileImageWrapper = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 13px;
  overflow: hidden;
  ${mq.sm} {
    width: 100px;
    height: 100px;
  }
`;
export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.gray33}
`

