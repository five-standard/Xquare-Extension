import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { toast } from "react-toastify";
import { Cookie, Dates, messages, days, today } from "../../Utils/Utilities";
import { MapBox } from "../../Components/MapBox";
import { getTodayMeals } from "../../Api/Meal";
import { getUserSimple } from "../../Api/User";
import { postLogout } from "../../Api/Auth";
import { updator } from "../../Utils/Atoms";
import { Box } from "../../components/Box";
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
  const accessToken = Cookie.get("accessToken");
  const update = useRecoilValue(updator);
  const navigate = useNavigate();
  const mealType = {
    "아침": "breakfast",
    "점심": "lunch",
    "저녁": "dinner"
  }

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
    Cookie.set("accessToken", "abcd");
    // postLogout().then(() => {
    //   Cookie.remove("accessToken");
    //   Cookie.remove("refreshToken");
    //   navigate("/");
    // }).catch(() => toast.error(<b>{messages.logout}</b>))
  }

  return <_.Wrapper>
    <Box height="70px" style={{"padding-right": "20px", "cursor": `${!accessToken ? "pointer" : "default"}`}} action={() => !accessToken && navigate("/login")}>
      <_.ProfileBox>
        <img src={accessToken && user.profile_file_name ? user.profile_file_name : "/imgs/svg/Profile.svg"} width={40} height={40} style={{"border-radius": "50px"}}/>
        {
          accessToken
          ? <_.DataBox>
            <h1>{user.name}</h1>
            <h2>상점 {user.good_point}점 벌점 {user.bad_point}점</h2>
          </_.DataBox> 
          : <h1 style={{"font-size": "20px", "color": "#5C5960"}}>로그인하세요</h1>
        }
      </_.ProfileBox>
      { accessToken && <_.LogoutBox onClick={handleLogout}>로그아웃</_.LogoutBox>}
    </Box>
    <Box style={{"flex-direction": "column"}}>
      <h1 style={{"align-self": "flex-start"}}>{today} ({days[Dates.getDay()]})</h1>
      <_.MealDataBox>
        {
          Object.entries(mealType).map(([k, v]) => {
            return <MapBox style={{"flex-direction": "column"}}>
              <div id="title">
                <h1>{k}</h1>
                {meals[`${v}_kcal`] && <h3>{meals[`${v}_kcal`]}</h3> }
              </div>
              <h2>
              {
                meals[v]
                ? meals[v].map((i, k) => `${i}${k !== meals[v].length-1 ? ", " : ""}`)
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