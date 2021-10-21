import React, { FC } from 'react';
import {AlertTag, AlertText, HeaderAlert } from './styled';

const Alert: FC = () => {
    return(
        <HeaderAlert>
            <AlertTag>free</AlertTag>
            <AlertText>
                See our PRO version for more design components & coded in React follow this link:
                <a
                    href="https://devias.io/products/devias-kit-pro"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    https://devias.io/products/devias-kit-pro
                </a>
            </AlertText>
        </HeaderAlert>
    )
}

export default Alert