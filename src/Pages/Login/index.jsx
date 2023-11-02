/*global chrome*/
import styled from "styled-components"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Input } from "../../Components/Input"
import { Button } from "../../Components/Button"
import { postLogin } from "../../Api/Auth"

export const Login = () => {
  const [data, setData] = useState({
    account_Id: "",
    password: "",
    device_token: ""
  })
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({...data, [e.target.id]: e.target.value});
  }

  const handleSubmit = () => {
    postLogin(data).then(res => {
      navigate("/");
      chrome.cookies.set({url: "http://localhost:3000", data: res.data.accessToken})
    })
  }

  return <Wrapper>
    <Back src="/imgs/svg/Back.svg" alt="" onClick={() => navigate("/")} />
    <InputBox>
      <Input placeholder="아이디" value={data.account_Id} action={handleChange} id="account_Id" />
      <Input placeholder="비밀번호" value={data.password} action={handleChange} id="password" />
      <Button action={handleSubmit} text="로그인" style={{"width": "70%", "height": "50px", "display": "flex", "align-items": "center", "justify-content": "center", "font-size": "20px", "font-weight": "500"}} id="selected" />
    </InputBox>
  </Wrapper>
}

const Wrapper = styled.div`
  width: 100%;
  height: 450px;
  gap: 15px;
  display: grid;
  grid-template-rows: 1fr 99fr;
  place-items: center center;
`

const Back = styled.img`
  cursor: pointer;
  place-self: start;
`

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
`