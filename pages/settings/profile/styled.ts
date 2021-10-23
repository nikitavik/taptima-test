import styled from "styled-components";
import {mq} from "../../../constant/mediaqueries";

export const PageLayout = styled.div`
  display: grid;
  grid-template-columns: 0 minmax(300px, 375px) minmax(300px, 375px);
  grid-gap: 1.5rem;
  grid-template-areas: 
    "navbar navbar navbar"
    ". profile basicProfile"
    ". profile notifications"
  ;
  ${mq.sm} {
    padding: 0 1.5rem;
    grid-template-columns: auto;
    grid-template-areas: 
    "navbar"
    "profile"
    "basicProfile"
    "notifications"
  ;
  }
`