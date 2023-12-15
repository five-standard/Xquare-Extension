import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import { RecoilRoot } from "recoil";
import { GlobalStyle } from "./Styles/globalStyle";
import 'react-toastify/dist/ReactToastify.css';
import { Router } from "./Router/Router";
import { QueryClient, QueryClientProvider } from "react-query";

export const App = () => {
  const queryClient = new QueryClient();

  return <Wrapper>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ToastContainer position="bottom-center" autoClose={1500} />
        <GlobalStyle />
        <Router />
      </RecoilRoot>
    </QueryClientProvider>
  </Wrapper>
}

const Wrapper = styled.div`
  width: 450px;
  height: 450px;
  background: #F9F7FA;
  box-sizing: border-box;
  font-family: "Noto Sans KR";
`
