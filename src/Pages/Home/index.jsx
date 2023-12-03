import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { toast } from "react-toastify";
import { Dates, messages, today } from "../../Utils/Utilities";
import { ProfileBox } from "../../Components/ProfileBox";
import { dayType, mealType } from "../../Utils/Types";
import Profile from "../../Assets/imgs/Profile.svg";
import { MapBox } from "../../Components/MapBox";
import { getTodayMeals } from "../../Api/Meal";
import { getUserSimple } from "../../Api/User";
import { postLogout } from "../../Api/Auth";
import { updator } from "../../Utils/Atoms";
import { Box } from "../../Components/Box";
import * as _ from "./style";

export const Home = () => {
  const [meals, setMeals] = useState({
    breakfast: undefined,
    lunch: undefined,
    dinner: undefined,
    breakfast_kcal: undefined,
    lunch_kcal: undefined,
    dinner_kcal: undefined
  })
  const [user, setUser] = useState({
    name: "아무개",
    good_point: 0,
    bad_point: 0,
    profile_file_name: undefined
  })
  const accessToken = localStorage.getItem("accessToken");
  const update = useRecoilValue(updator);
  const navigate = useNavigate();

  useEffect(() => {
    getTodayMeals().then(res => { // 급식정보 불러오기
      res.data && Object.keys(meals).map(key => {
        setMeals(meals => { return {...meals, [key]: res.data[key]} })
      })
    }).catch(() => toast.error(<b>{messages.meal}</b>))
    accessToken && getUserSimple().then(res => { // 유저정보 불러오기
      res.data && Object.keys(user).map(key => {
        setUser(user => { return {...user, [key]: res.data[key]} })
      })
    }).catch(() => toast.error(<b>{messages.user}</b>))
  }, [update])

  const handleLogout = () => {
    postLogout().then(() => { // 로그아웃 요청하기
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      navigate("/");
    }).catch(() => toast.error(<b>{messages.logout}</b>))
  }

  return <_.Wrapper>
    <Box height="70px" style={{paddingRight: "20px", cursor: `${!accessToken ? "pointer" : "default"}`}} action={() => !accessToken && navigate("/login")}>
      <_.ProfileBox>
        {
          accessToken
          ? <ProfileBox 
            profile={{
              img: user.profile_file_name && user.profile_file_name,
              name: user.name,
              sub: `상점 ${user.good_point}점 벌점 ${user.bad_point}점`,
            }}
          />
          : <_.LoginBox>
            <img src={Profile} width={40} height={40} style={{borderRadius: "50px"}} alt="" />
            <h1 style={{fontSize: "20px", color: "#5C5960"}}>로그인하세요</h1>
          </_.LoginBox>
        }
      </_.ProfileBox>
      { 
        accessToken && <_.LogoutBox onClick={handleLogout}>
          <h2 style={{color: "#FF7575"}}>로그아웃</h2>
        </_.LogoutBox>
      }
    </Box>
    <Box $rotate>
      <h1 style={{alignSelf: "start"}}>{today} ({dayType[Dates.getDay()]})</h1>
      <_.MealDataBox>
        {
          Object.entries(mealType).map(([k, v], i) => {
            return <MapBox style={{flexDirection: "column"}} key={i}>
              <_.TitleBox>
                <h1>{k}</h1>
                {
                  meals[`${v}_kcal`] && <h3>{meals[`${v}_kcal`]}</h3>
                }
              </_.TitleBox>
              <h2 style={{width: "90%"}}>
                {
                  meals[v]
                  ? meals[v].map((i, j) => `${i}${j !== meals[v].length-1 ? ", " : ""}`)
                  : "등록된 급식이 없습니다"
                }
              </h2>
            </MapBox>
          })
        }
      </_.MealDataBox>
    </Box>
  </_.Wrapper>
}