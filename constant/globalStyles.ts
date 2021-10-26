import { createGlobalStyle, css } from 'styled-components';
import { mq } from './mediaqueries';

const PROJECT_FONT = css`
  font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`;

export const GlobalStyles = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    font-size: 14px;
    color: #3A3B3F;
    ${mq.xs} {
        font-size: 12px;
    }
    ${mq.lg} {
        font-size: 16px;
    }
    ${PROJECT_FONT};
  }
  *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button, select, textarea {
    box-sizing: border-box;
    ${PROJECT_FONT}
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
      -webkit-text-fill-color: inherit;
      -webkit-box-shadow: inherit;
      transition: background-color 5000s ease-in-out 0s;
  }
`;
