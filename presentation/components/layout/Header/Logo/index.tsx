import React, {FC} from 'react';
import {LogoText, LogoImage, StyledLogo } from './styled';

const Logo: FC = () => {
    return(
        <StyledLogo>
            <LogoImage/>
            <LogoText>Devias Kit</LogoText>
        </StyledLogo>
    )
}

export default Logo
