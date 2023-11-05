/*global chrome*/
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { useState } from "react";
import { refresh, token } from "../../Utils/Atoms";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import { postLogin } from "../../Api/Auth";
import * as _ from "./style";

export const Login = () => {
  const [data, setData] = useState({
    account_id: "",
    password: "",
    device_token: ""
  })
  const setAccessToken = useSetRecoilState(token);
  const setRefreshToken = useSetRecoilState(refresh);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({...data, [e.target.id]: e.target.value});
  }

  const handleSubmit = () => {
    postLogin(data).then(res => {
      setAccessToken(res.data.access_token);
      setRefreshToken(res.data.refresh_token);
      chrome.cookies.set({url: "http://localhost:3000", name:"accessToken", value: res.data.access_token})
      chrome.cookies.set({url: "http://localhost:3000", name:"refreshToken", value: res.data.refresh_token})
      navigate("/");
    }).catch(() => {})
  }

  return <_.Wrapper>
    <_.Back src="/imgs/svg/Back.svg" alt="" onClick={() => navigate("/")} />
    <_.InputBox>
      <Input placeholder="아이디" value={data.account_id} action={handleChange} id="account_id" />
      <Input placeholder="비밀번호" value={data.password} action={handleChange} id="password" type="password" />
      <Button action={handleSubmit} text="로그인" style={{"width": "70%", "height": "50px", "font-size": "20px"}} id="selected" />
    </_.InputBox>
  </_.Wrapper>
}