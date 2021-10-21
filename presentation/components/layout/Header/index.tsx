import React, {FC} from "react";

import Logo from "./Logo";
import Alert from "./Alert";

import {HeaderButtonsWrapper, StyledHeader } from "./styled";

import bell from "/public/bell.svg"
import exit from "/public/exit.svg"

import IconButton from "../../common/IconButton";

const Header: FC = () => {
    return (
        <StyledHeader>
            <Logo />
            <Alert />
            <HeaderButtonsWrapper>
                <IconButton src={bell.src} size={24} color={"#fff"} onClick={() => null}/>
                <IconButton src={exit.src} size={24} color={"#fff"} onClick={() => null}/>
            </HeaderButtonsWrapper>
        </StyledHeader>
    )
}

export default Header
