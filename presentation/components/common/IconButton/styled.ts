import styled from "styled-components";
import {IconButtonPropsT} from "./index";

export const StyledIconButton = styled.div<Partial<IconButtonPropsT>>`
    margin-left: 16px;
    width: ${props => props.size};
    height: ${props => props.size};
    fill: ${props => props.color};
    cursor: pointer;
`
