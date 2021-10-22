import React, {FC} from 'react';
import Link from "next/link"
import IconButton from "../../../common/IconButton";
import {LinkText, StyledIconNavLink, StyledLink } from './styled';

type PropsT = {
    to: string
    text: string
    icon: string
}

const IconNavLink: FC<PropsT> = (props) => {
    const {to, text, icon} = props
    return (
        <StyledIconNavLink>
            <Link href={to} passHref>
                <StyledLink>
                    <IconButton src={icon} color={"#66788A"} size={24} />
                    <LinkText>{ text }</LinkText>
                </StyledLink>
            </Link>
        </StyledIconNavLink>
    );
};

export default IconNavLink;
