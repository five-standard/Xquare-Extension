import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import { RecoilRoot } from "recoil";
import { GlobalStyle } from "./Styles/globalstyle";
import 'react-toastify/dist/ReactToastify.css';
import { Router } from "./Router/Router";

export const App = () => {
  return <Wrapper>
    <RecoilRoot>
      <ToastContainer position="bottom-center" autoClose={1500} />
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
