import styled from 'styled-components';
import { mq } from '../../../../../constant/mediaqueries';

export const StyledProfileCard = styled.div`
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
`;

export const Footer = styled.div`
  display: flex;
  margin: 0.625rem 1.5rem;
  justify-content: space-between;
`;
export const TextWrapper = styled.div``;

export const CardTitle = styled.h3`
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.colors.deepBlackFont};
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 117%;
  letter-spacing: -0.06px;
  white-space: nowrap;
`;
export const CardSubtitle = styled.h4`
  padding: 0;
  margin: 0.625rem 0 0 0;
  font-size: 0.875rem;
  font-weight: normal;
  line-height: 143%;
  letter-spacing: -0.05px;
  color: ${({ theme }) => theme.colors.subFont};
`;

export const ImageWrapper = styled.figure`
  width: 140px;
  height: 140px;
  border-radius: 13px;
  overflow: hidden;
  ${mq.sm} {
    width: 100px;
    height: 100px;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray33};
`;
