import styled from 'styled-components';
import { mq } from '../../../../../constant/mediaqueries';

export const Tag = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  font-size: 0.625rem;
  line-height: 120%;
  letter-spacing: 0.3px;
  background-color: ${({ theme }) => theme.colors.accentGreen};
  padding: 0.1875rem 0.375rem;
  border-radius: 4px;
  text-transform: uppercase;
  max-height: 0.8rem;
`;
export const StyledAlert = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2.25rem;
  padding: 0.375rem 1rem 0.375rem 0.375rem;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.lightGray23};
  ${mq.xs} {
    display: none;
  }
`;
export const Text = styled.p`
  margin: 0 0 0 0.875rem;
  color: ${({ theme }) => theme.colors.lightBlue};
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 114%;
  & a {
    color: ${({ theme }) => theme.colors.white};
  }
`;
