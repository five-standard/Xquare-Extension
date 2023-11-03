import styled from "styled-components";
import { RecoilRoot } from "recoil";
import { GlobalStyle } from "./Styles/globalstyle";
import { Router } from "./Router/Router";

export const App = () => {
  return <Wrapper>
    <RecoilRoot>
      <GlobalStyle />
      <Router />
    </RecoilRoot>
  </Wrapper>
}

const Wrapper = styled.div`
  width: 450px;
  height: 450px;
  padding: 10px;
  box-sizing: border-box;
  background: #F9F7FA;
  font-family: "Noto Sans KR";
`
