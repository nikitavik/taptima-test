import Link from 'next/link';
import React, {FC} from 'react';
import { StyledNavTab, TabText } from './styled';

type PropsT = {
    to: string
    text: string
    isActive: boolean
}

const NavTab: FC<PropsT> = (props) => {
    const {to, text, isActive} = props
    return (
        <Link href={to} >
            <StyledNavTab isActive={isActive}>
                <TabText>{ text }</TabText>
            </StyledNavTab>
        </Link>

    );
};

export default NavTab;