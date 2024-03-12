import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import { RecoilRoot } from "recoil";
import { GlobalStyle } from "./Styles/globalstyle";
import "react-toastify/dist/ReactToastify.css";
import { Router } from "./Router/Router";
import { QueryClient, QueryClientProvider } from "react-query";

export const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return (
    <Wrapper>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <ToastContainer position="bottom-center" autoClose={1500} />
          <GlobalStyle />
          <Router />
        </RecoilRoot>
      </QueryClientProvider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 450px;
  height: 450px;
  background: #f9f7fa;
  box-sizing: border-box;
  font-family: "Noto Sans KR";
`;
