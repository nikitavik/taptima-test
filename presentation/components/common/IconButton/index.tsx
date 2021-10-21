import React, {FC} from 'react';
import {ReactSVG} from "react-svg";
import { StyledIconButton } from './styled';

export type IconButtonPropsT = {
    src: string
    color: string
    size: number | string
    onClick?: () => void
}

const IconButton: FC<IconButtonPropsT> = (props) => {
    const {src, onClick, color, size} = props
    return(
        <StyledIconButton onClick={onClick} size={`${size}px`} color={color}>
            <ReactSVG src={src}
                      beforeInjection={(svg) => {
                          svg.setAttribute('style', `width: ${size}px`)
                          svg.setAttribute('style', `height: ${size}px`)
                      }}
            />
        </StyledIconButton>
    )
}

export default IconButton
