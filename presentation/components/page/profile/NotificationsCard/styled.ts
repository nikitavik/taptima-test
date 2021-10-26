import styled from 'styled-components';
import { mq } from '../../../../../constant/mediaqueries';

export const StyledForm = styled.form`
  padding: 1.5rem;
  display: flex;
`;

export const Fieldset = styled.fieldset`
  padding: 0;
  border: none;
  &:not(:last-child) {
    margin-right: 5rem;
    ${mq.xs} {
      margin-right: 2.5rem;
    }
  }
`;

export const SetTitle = styled.legend`
  margin-right: 0.5rem;
  font-weight: 500;
  font-size: 1rem;
  line-height: 125%;
  letter-spacing: -0.05px;
`;
