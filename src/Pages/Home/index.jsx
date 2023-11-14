import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTodayMeals } from "../../Api/Meal";
import { getUserSimple } from "../../Api/User";
import { days } from "../../Utils/DataTypes";
import { postLogout } from "../../Api/Auth";
import { updator } from "../../Utils/Atoms";
import { useRecoilValue } from "recoil";
import { Dates } from "../../Utils/Objs";
import { Box } from "../../components/Box";
import { Cookie } from "../../Utils/Objs";
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
  const navigate = useNavigate();
  const accessToken = Cookie.get("accessToken");
  const update = useRecoilValue(updator);

  useEffect(() => {
    getTodayMeals().then(res => { // 급식정보 불러오기
      res.data && Object.keys(meals).map(key => {
        setMeals(meals => { return {...meals, [key]: res.data[key]} })
      })
    }).catch(() => {})
    accessToken && getUserSimple().then(res => { // 유저정보 불러오기
      res.data && Object.keys(user).map(key => {
        setUser(user => { return {...user, [key]: res.data[key]} })
      })
    }).catch(() => {})
  }, [update])

  const handleLogout = () => {
    postLogout().then(() => {
      Cookie.remove("accessToken");
      Cookie.remove("refreshToken");
      setUser({...user, profile_file_name: undefined});
      navigate("/");
    }).catch(() => {})
  }

  return <_.Wrapper>
    <Box height="70px" style={{"padding-right": "20px", "cursor": `${!accessToken ? "pointer" : "default"}`, "justify-content": "space-between"}} action={() => !accessToken && navigate("/login")}>
      <_.ProfileBox>
        <img src={user.profile_file_name ? user.profile_file_name : "/imgs/svg/Profile.svg"} width={40} height={40} style={{"border-radius": "50px"}}/>
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
    <Box style={{"align-items": "center", "flex-direction": "column"}}>
      <h1 style={{"align-self": "flex-start"}}>{Dates.getFullYear()}-{Dates.getMonth()+1}-{Dates.getDate()} ({days[Dates.getDay()]})</h1>
      <_.MealDataBox>
        <_.MealBox>
          <div id="title">
            <h1>아침</h1>
            {meals.breakfast_kcal && <h3>{meals.breakfast_kcal}</h3> }
          </div>
          <h2>
            {
              meals.breakfast
              ? meals.breakfast.map((i, k) => `${i}${k !== meals.breakfast.length-1 ? ", " : ""}`)
              : "등록된 급식이 없습니다"
            }
          </h2>
        </_.MealBox>
        <_.MealBox>
          <div id="title">
            <h1>점심</h1>
            {meals.lunch_kcal && <h3>{meals.lunch_kcal}</h3> }
          </div>
          <h2>
            {
              meals.lunch
              ? meals.lunch.map((i, k) => `${i}${k !== meals.lunch.length-1 ? ", " : ""}`)
              : "등록된 급식이 없습니다"
            }
          </h2>
        </_.MealBox>
        <_.MealBox>
          <div id="title">
            <h1>저녁</h1>
            {meals.dinner_kcal && <h3>{meals.dinner_kcal}</h3> }
          </div>
          <h2>
            {
              meals.dinner
              ? meals.dinner.map((i, k) => `${i}${k !== meals.dinner.length-1 ? ", " : ""}`)
              : "등록된 급식이 없습니다"
            }
          </h2>
        </_.MealBox>
      </_.MealDataBox>
    </Box>
  </_.Wrapper>
}