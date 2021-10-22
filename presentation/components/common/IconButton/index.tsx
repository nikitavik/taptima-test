import React, {FC} from 'react';
import {ReactSVG} from "react-svg";
import { StyledIconButton } from './styled';

type PropsT = {
    src: string
    color: string
    size: number | string
    onClick?: () => void
}

const IconButton: FC<PropsT> = (props) => {
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
