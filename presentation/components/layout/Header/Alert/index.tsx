import React, { FC } from 'react';
import { Tag, Text, StyledAlert } from './styled';

const Alert: FC = () => {
  return (
    <StyledAlert>
      <Tag>free</Tag>
      <Text>
        See our PRO version for more design components & coded in React follow this link:&nbsp;
        <a
          href="https://devias.io/products/devias-kit-pro"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://devias.io/products/devias-kit-pro
        </a>
      </Text>
    </StyledAlert>
  );
};

export default Alert;
