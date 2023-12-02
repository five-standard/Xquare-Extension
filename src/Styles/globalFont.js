import { createGlobalStyle } from "styled-components";
import Font from "../Assets/fonts/NotoSansKR.ttf";

export const GlobalFont = createGlobalStyle`
  @font-face {
    font-family: 'Noto Sans KR';
    src: url(${Font});
    font-style: 500;
  }
`