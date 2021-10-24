import styled from 'styled-components';
import { mq } from '../../../../../constant/mediaqueries';

export const CardHeader = styled.div`
  display: flex;
  align-items: baseline;
  margin: 1.625rem 1.5rem;
  ${mq.xs} {
    flex-direction: column;
  }
`;
export const HeaderTitle = styled.div`
  font-weight: 500;
  font-size: 1rem;
  line-height: 125%;
  letter-spacing: -0.05px;
  white-space: nowrap;
`;
export const HeaderSubTitle = styled.div`
  margin-left: 1rem;
  font-weight: 300;
  font-size: 0.875rem;
  line-height: 114%;
  color: ${({ theme }) => theme.colors.lightFont};
  ${mq.xs} {
    margin-top: 0.5rem;
    margin-left: 0;
  }
`;
export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem;
`;
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
export const StatusMessage = styled.div<{ isSuccessful: boolean }>`
  margin-left: 1rem;
  font-size: 1rem;
  color: ${({ isSuccessful, theme }) =>
    isSuccessful ? theme.colors.accentGreen : theme.colors.redAccent};
`;
