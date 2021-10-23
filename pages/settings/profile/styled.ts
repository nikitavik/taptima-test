import styled from "styled-components";
import {mq} from "../../../constant/mediaqueries";

export const PageLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, 375px) minmax(300px, 910px);
  grid-template-rows: repeat(auto-fit, 1fr);
  padding: 1.5rem;
  gap: 1.5rem;
  grid-template-areas:
    "profile basicProfile "
    ". basicProfile"
    ". notifications"
    ". notifications"
;
  ${mq.sm} {
    grid-template-columns: auto;
    column-gap: 0;
    grid-template-areas: 
    "profile"
    "basicProfile"
    "notifications"
  ;
  }
`