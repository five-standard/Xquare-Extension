import { styled } from "styled-components"
import { useNavigate } from 'react-router-dom';
import { Button } from "../../Components/Button"

export const Main = () => {
  const navigate = useNavigate();
  return <Wrapper>
    <LogoBox>
      <Logo src="/imgs/MainLogo.png" alt=""/>
    </LogoBox>
    <InteractBox>
      <Button text="바로 시작하기" action={() => navigate("/signup")} />
      <LoginText onClick={() => navigate("/login")}>이미 계정이 있으신가요? 로그인하기</LoginText>
    </InteractBox>
  </Wrapper>
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 3fr 1fr;
  height: 550px;
`

const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #9451F9;
`

const InteractBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background: #ffffff;
`

const Logo = styled.img`
  width: 35%;
  height: auto;
`

const LoginText = styled.h1`
  font-size: 10px;
  color: #5C5960;
  font-weight: 500;
  cursor: pointer;
  &:active {
    color: #DEDEE0;
  }
`