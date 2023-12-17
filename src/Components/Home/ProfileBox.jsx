import { styled } from "styled-components";
import { useRecoilValue } from "recoil";
import { toast } from "react-toastify";
import { useQuery } from "react-query";
import { memo } from "react";
import Default from "../../Assets/imgs/Default.svg";
import { messages } from "../../Utils/Utilities";
import { getUserSimple } from "../../Api/User";
import { useNavigate } from "react-router-dom";
import { postLogout } from "../../Api/Auth";
import { updator } from "../../Utils/Atoms";
import { Profile } from "../Common/Profile";
import { Box } from "../Box";

export const ProfileBox = memo(() => {
  const accessToken = localStorage.getItem("accessToken");
  const update = useRecoilValue(updator);
  const navigate = useNavigate();

  const { data } = useQuery(["user", [update]], () => accessToken && getUserSimple(), {
    onError: () => toast.error(<b>{messages.user}</b>),
    select: (data) => {
      return data?.data;
    }
  })

  const handleLogout = () => {
    postLogout().then(() => { // 로그아웃 요청하기
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      navigate("/");
    }).catch(() => toast.error(<b>{messages.logout}</b>))
  }

  if(accessToken) {
    return <Component>
      <Profile
        profile={data && {
          img: data.profile_file_name,
          name: data.name,
          sub: `상점 ${data?.good_point}점 벌점 ${data?.bad_point}점`,
        }}
      />
      <LogoutButton onClick={handleLogout}>
        로그아웃
      </LogoutButton>
    </Component>
  } else {
    return <Component action={() => navigate("/login")}>
      <LoginBox>
        <img src={Default} style={{borderRadius: "50px"}} alt="" />
        <h1 style={{fontSize: "20px", color: "#5C5960"}}>로그인하세요</h1>
      </LoginBox>
    </Component>
  }
});

const Component = styled(Box)`
  padding: 10px 20px 10px 20px;
`

const LoginBox = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
`

const LogoutButton = styled.button`
  cursor: pointer;
  border-radius: 10px;
  background: #F9F7FA;
  box-sizing: border-box;
  padding: 10px 15px 10px 15px;
  color: #FF7575;
`