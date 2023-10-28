import { styled } from "styled-components"
import { Input } from "../../Components/Input"
import { Button } from "../../Components/Button"

export const Login = () => {
  return <Wrapper>
    <Back src="/imgs/svg/Back.svg"/>
    <Title>로그인</Title>
    <InputBox>
      <Input placeholder="아이디" />
      <Input placeholder="비밀번호" type="password" />
      <Button text="로그인" />
    </InputBox>
  </Wrapper>
}

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 550px;
  gap: 10px;
`

const Title = styled.h1`
  font-size: 20px;
  align-self: flex-start;
`

const Back = styled.img`
  width: 5%;
  height: auto;
  align-self: flex-start;
  cursor: pointer;
`

const InputBox = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: column;
`

const ButtonBox = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
`