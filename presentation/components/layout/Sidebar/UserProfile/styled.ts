import styled from "styled-components";

export const StyledUserProfile = styled.div`
  margin: 1.5rem 1rem 0;
  padding-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;  
  border-bottom: ${props => props.theme.borders.gray1pxBorder};
`
export const AvatarWrapper = styled.div``
export const AvatarImage = styled.img`
  border-radius: 50%;
`
export const UserName = styled.div`
  margin-top: 1rem;
  font-size: 1rem;
  line-height: 125%;
  letter-spacing: -0.05px;

`
export const UserRole = styled.div`
  margin-top: 0.25rem;
  font-size: 0.75rem;
  line-height: 133%;
  color: ${props => props.theme.colors.subFont};
`