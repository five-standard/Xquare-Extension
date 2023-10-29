import { styled } from "styled-components"
import { Input } from "../../Components/Input"
import { Button } from "../../Components/Button"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { postLogin } from "../../Api/Auth";

export const SignUp = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    verification_code: "",
    account_id: "",
    profile_file_name: "",
    password: ""
  })
  const [chk, setChk] = useState("");
  const regExp = /[{}[\]/?.,;:|)*~`!^\-_+<>@#$%&=('"][0-9]/g;
  const disable = (data.verification_code.length === 0) 
  || (data.verification_code.length > 6)
  || (data.account_id.length < 6) 
  || (data.account_id.length > 20) 
  || (data.password !== chk) 
  || (data.password.length < 6) 
  || !(regExp.test(data.password));

  const handleChange = (e) => {
    if(e.target.id === "chkPassword") { 
      setChk(e.target.value);
    }
    else {
      setData({...data, [e.target.id]: e.target.value})
    }
  }

  const handleSubmit = () => {
    // 회원가입도 만들 것!
  }

  return <Wrapper>
    <Back src="/imgs/svg/Back.svg" onClick={() => navigate("/")} />
    <Title>회원가입</Title>
    <InputBox>
      <InputTitle>인증코드 <span>*</span></InputTitle>
      <Input placeholder="6자리를 입력해주세요" id="verification_code" value={data.verification_code} action={handleChange} />
    </InputBox>
    <InputBox>
      <InputTitle>아이디 <span>*</span></InputTitle>
      <Input placeholder="영문, 숫자 6~20자" id="account_id" value={data.account_id} action={handleChange} />
    </InputBox>
    <InputBox>
      <InputTitle>비밀번호 <span>*</span></InputTitle>
      <Input placeholder="숫자, 영문, 특수문자 조합 최소 6자" type="password" id="password" value={data.password} action={handleChange} />
    </InputBox>
    <InputBox>
    <InputTitle>비밀번호 재입력 <span>*</span></InputTitle>
      <Input placeholder="재입력" type="password" id="chkPassword" value={chk} action={handleChange} />
    </InputBox>
    <Button text="입력 완료" width="280px" disabled={disable} action={handleSubmit} />
    <Agree>가입시 <span onClick={() => window.open("https://team-xquare.github.io/terms/PrivacyPolicy.html")}>개인정보처리방침</span> 및 <span onClick={() => window.open("https://team-xquare.github.io/terms/TermsOfService.html")}>이용약관</span>에 동의하는 것으로 간주합니다.</Agree>
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
  margin: 10px 0 10px 0;
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

const Agree = styled.h1`
  font-size: 10px;
  color: #5C5960;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  width: 210px;
  & > span {
    text-decoration: underline;
    cursor: pointer;
    &:active {
      color: #DEDEE0;
    }
  }
`

const InputTitle = styled.h1`
  font-size: 10px;
  color: #5C5960;
  font-weight: 500;
  & > span {
    color: red;
  }
`