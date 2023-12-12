import { createGlobalStyle } from "styled-components";
import Font from "../Assets/fonts/NotoSansKR.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Noto Sans KR';
    src: url(${Font});
    font-style: 500;
  }

  * {
    margin: 0;
    border: none;
    outline: none;
    user-select: none;
    font-weight: 100;
    font-family: "Noto Sans KR";
    &::-webkit-scrollbar { display: none; }
  }

  h1 { // 제목
    font-size: 15px;
    color: #000000;
    font-weight: 500;
  }

  h2 { // 내용
    font-size: 13px;
    color: #5C5960;
  }

  h3 { // 내용 2
    font-size: 12px;
    color: #77757A;
  }
`;