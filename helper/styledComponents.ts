import { css } from 'styled-components';

export const attributePicker = (attrName: string, attr: string) => css`
  ${attrName}: ${attr};
`;
