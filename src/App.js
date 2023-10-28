import { styled } from 'styled-components';
import { Router } from './Router/Router';
import { GlobalStyle } from './Styles/globalstyle';

export const App = () => {
  return <Wrapper>
    <GlobalStyle />
    <Router />
  </Wrapper>
}

const Wrapper = styled.div`
  width: 300px;
  height: 550px;
  background: #ffffff;
  font-family: 'Noto Sans KR';
`