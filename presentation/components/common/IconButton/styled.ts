import styled from "styled-components";

export const StyledIconButton = styled.div<{ size: number | string, color: string }>`
    margin-left: 16px;
    max-width: ${props => props.size};
    max-height: ${props => props.size};
    fill: ${props => props.color};
    cursor: pointer;
    & *{
      max-width: ${props => props.size};
      max-height: ${props => props.size};
    }
`
