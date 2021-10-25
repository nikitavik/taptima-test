import styled from 'styled-components';
import { mq } from '../../../../../constant/mediaqueries';

export const StyledForm = styled.form`
  padding: 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(150px, 1fr));
  grid-template-rows: 1fr 1fr 1fr;
  gap: 1.5rem;
  ${mq.xs} {
    gap: 1.5rem;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;
