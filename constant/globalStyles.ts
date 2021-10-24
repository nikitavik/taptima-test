import { createGlobalStyle } from 'styled-components';
import { mq } from './mediaqueries';

export const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    padding: 0;
    margin: 0;
    font-size: 14px;
    color: #3A3B3F;
    overflow: hidden;
    ${mq.xl} {
      font-size: 18px;
    }
    ${mq.sm} {
      font-size: 14px;
    }
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    box-sizing: border-box;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
`;
