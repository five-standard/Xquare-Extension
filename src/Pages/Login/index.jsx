import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Cookie } from "../../Utils/Objs";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import { postLogin } from "../../Api/Auth";
import * as _ from "./style";
import { toast } from "react-toastify";

export const Login = () => {
  const [data, setData] = useState({
    account_id: "",
    password: "",
    device_token: ""
  })
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({...data, [e.target.id]: e.target.value});
  }

  const handleSubmit = () => {
    postLogin(data).then(res => {
      Cookie.set("accessToken", res.data.access_token, {path:"/"});
      Cookie.set("refreshToken", res.data.refresh_token, {path:"/"});
      navigate("/");
      toast.success(`로그인되었습니다 (${data.account_id})`);
    }).catch(e => {
      toast.error(`로그인에 실패했습니다. (${e.response.data.error_message.split(".")[0]})`);
    })
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