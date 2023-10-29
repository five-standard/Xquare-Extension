/*global chrome*/
import { styled } from "styled-components"
import { Input } from "../../Components/Input"
import { Button } from "../../Components/Button"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { token } from "../../Utils/Atoms";
import { useSetRecoilState } from "recoil";
import { postLogin } from "../../Api/Auth";

export const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    account_id: "",
    password: "",
    device_token: ""
  })
  const [error, setError] = useState(false);
  const setToken = useSetRecoilState(token);

  const handleChange = (e) => {
    setData({...data, [e.target.id]: e.target.value})
  }

  const handleSubmit = () => {
    postLogin(data).then(res => {
      chrome.cookies.set({url: "http://localhost:3000", name: "accessToken", value: res.data.access_token});
      chrome.cookies.set({url: "http://localhost:3000", name: "refreshToken", value: res.data.refresh_token});
      setToken(res.data.access_token);
      navigate("/");
    }).catch(() => setError(true));
  }

  return <Wrapper>
    <Back src="/imgs/svg/Back.svg" onClick={() => navigate("/")} />
    <Title>로그인</Title>
    <InputBox>
      <Input placeholder="아이디" id="account_id" value={data.account_id} action={handleChange} />
      <Input placeholder="비밀번호" type="password" id="password" value={data.password} action={handleChange} />
    </InputBox>
    <Button text="로그인" width="280px" disabled={data.id === "" || data.password === ""} action={handleSubmit} />
    <Find onClick={() => window.open("https://www.facebook.com/profile.php?id=100091948951498")}>아이디 찾기 / 비밀번호 찾기</Find>
    <Find>{error}에러</Find>
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

const Find = styled.h1`
  font-size: 10px;
  color: #5C5960;
  font-weight: 500;
  cursor: pointer;
  &:active {
    color: #DEDEE0;
  }
`