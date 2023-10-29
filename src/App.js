import { styled } from 'styled-components';
import { Router } from './Router/Router';
import { GlobalStyle } from './Styles/globalstyle';
import { RecoilRoot } from 'recoil';

export const App = () => {
  return <Wrapper>
    <RecoilRoot>
      <GlobalStyle />
      <Router />
    </RecoilRoot>
  </Wrapper>
}

const Wrapper = styled.div`
  width: 300px;
  height: 550px;
  background: #ffffff;
  font-family: 'Noto Sans KR';
`