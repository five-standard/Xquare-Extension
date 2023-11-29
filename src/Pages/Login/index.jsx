import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import { Cookie, messages } from "../../Utils/Utilities";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import { postLogin } from "../../Api/Auth";
import { Back } from "../../Components/Back";
import * as _ from "./style";

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
      toast.success(<b>{messages.login_success} ({data.account_id})</b>);
    }).catch(e => {
      toast.error(<b>{messages.login_fail} ({e.response.data.error_message.split(".")[0]})</b>);
    })
  }

  return <_.Wrapper>
    <Back to="/" />
    <_.InputBox>
      <Input placeholder="아이디" value={data.account_id} action={handleChange} id="account_id" />
      <Input placeholder="비밀번호" value={data.password} action={handleChange} id="password" type="password" />
      <Button action={handleSubmit} text="로그인" style={{"width": "70%", "height": "50px", "font-size": "20px"}} id="selected" />
    </_.InputBox>
  </_.Wrapper>
}