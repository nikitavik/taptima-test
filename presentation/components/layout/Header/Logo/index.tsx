import React, {FC} from 'react';

import logo from "/public/logos/logo.svg"

import {LogoText, LogoImage, StyledLogo } from './styled';
import {ReactSVG} from "react-svg";

const Logo: FC = () => {
    return(
        <StyledLogo>
            <LogoImage>
                <ReactSVG
                    src={logo.src}
                    beforeInjection={(svg) => {
                        svg.setAttribute('style', 'width: 36px')
                        svg.setAttribute('style', 'height: 36px')
                    }}
                />
            </LogoImage>
            <LogoText>Devias Kit</LogoText>
        </StyledLogo>
    )
}

export default Logo
