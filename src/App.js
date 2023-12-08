import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import { RecoilRoot } from "recoil";
import { GlobalStyle } from "./Styles/globalStyle";
import { GlobalFont } from "./Styles/globalFont";
import 'react-toastify/dist/ReactToastify.css';
import { Router } from "./Router/Router";
import { QueryClient, QueryClientProvider } from "react-query";

export const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 2,
      },
    },
  });

  return <Wrapper>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ToastContainer position="bottom-center" autoClose={1500} />
        <GlobalFont />
        <GlobalStyle />
        <Router />
      </RecoilRoot>
    </QueryClientProvider>
  </Wrapper>
}

const Wrapper = styled.div`
  width: 450px;
  height: 450px;
  padding: 10px;
  background: #F9F7FA;
  box-sizing: border-box;
  font-family: "Noto Sans KR";
`
