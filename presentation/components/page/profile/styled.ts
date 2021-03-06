import styled from 'styled-components';
import { mq } from '../../../../constant/mediaqueries';

export const PageLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, 375px) minmax(300px, 910px);
  grid-template-rows: repeat(auto-fit, 1fr);
  padding: 1.5rem;
  gap: 1.5rem;
  grid-template-areas:
    'profile basicProfile '
    '. basicProfile'
    '. notifications'
    '. notifications';
  ${mq.sm} {
    padding: 0.5rem;
    grid-template-columns: 1fr;
    column-gap: 0;
    grid-template-areas:
      'profile'
      'basicProfile'
      'notifications';
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: baseline;
  margin: 1.625rem 1.5rem;
  ${mq.xs} {
    flex-direction: column;
  }
`;

export const HeaderTitle = styled.h3`
  padding: 0;
  margin: 0;
  font-weight: 500;
  font-size: 1rem;
  line-height: 125%;
  letter-spacing: -0.05px;
  white-space: nowrap;
`;

export const HeaderSubTitle = styled.h4`
  margin: 0 0 0 1rem;
  padding: 0;
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
