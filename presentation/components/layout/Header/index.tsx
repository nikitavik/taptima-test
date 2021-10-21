import React, {FC} from "react";

import Logo from "./Logo";
import Alert from "./Alert";

import {HeaderButtonsWrapper, StyledHeader } from "./styled";

const Header: FC = () => {
    return (
        <StyledHeader>
            <Logo />
            <Alert />
            <HeaderButtonsWrapper>
                Buttons
            </HeaderButtonsWrapper>
        </StyledHeader>
    )
}

export default Header
