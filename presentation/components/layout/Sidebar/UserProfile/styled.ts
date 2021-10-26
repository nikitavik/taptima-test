import styled from 'styled-components';

export const StyledUserProfile = styled.section`
  margin: 1.5rem 1rem 0;
  padding-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: ${({ theme }) => theme.borders.gray1pxBorder};
  cursor: pointer;
  &:hover > figure {
    border: 2px solid ${({ theme }) => theme.colors.darkenBlue};
  }
`;
export const AvatarWrapper = styled.figure`
  box-sizing: border-box;
  border: 2px solid transparent;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  transition: border 0.25s ease-in;
`;
export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray33};
`;
export const UserName = styled.h2`
  font-weight: normal;
  font-style: normal;
  margin-top: 1rem;
  font-size: 1rem;
  line-height: 125%;
  letter-spacing: -0.05px;
`;
export const UserRole = styled.h3`
  font-weight: normal;
  font-style: normal;
  margin-top: 0.25rem;
  font-size: 0.75rem;
  line-height: 133%;
  color: ${({ theme }) => theme.colors.subFont};
`;
