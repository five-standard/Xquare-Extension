import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    user-select: none;
    margin: 0;
    outline: none;
    border: none;
    font-weight: 400;
    font-family: 'Noto Sans KR';
  }
`;