/*global chrome*/
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { getTodayMeals } from "../../Api/Meal";
import { getUserSimple } from "../../Api/User";
import { days } from "../../Utils/DataTypes";
import { postLogout } from "../../Api/Auth";
import { Box } from "../../components/Box";
import { token } from "../../Utils/Atoms";
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
    name: "",
    good_point: 0,
    bad_point: 0,
    profile_file_name: ""
  })
  const [accessToken, setAccessToken] = useRecoilState(token);
  const navigate = useNavigate();
  const date = new Date();

  useEffect(() => {
    getTodayMeals().then(res => {
      Object.keys(meals).map(key => {
        setMeals(meals => { return {...meals, [key]: res.data[key]} })
      })
    }).catch(() => {})
  })

  useEffect(() => {
    accessToken && getUserSimple(accessToken).then(res => {
      Object.keys(user).map(key => {
        setUser(user => { return {...user, [key]: res.data[key]} })
      })
    }).catch(() => {})
  }, [accessToken])

  const handleLogout = () => {
    postLogout(accessToken).then(() => {
      chrome.cookies.remove({url: "http://localhost:3000", name: "accessToken"});
      navigate("/");
      setAccessToken(undefined);
    }).catch(() => {})
  }

  return <_.Wrapper>
    <Box height="70px" style={{"padding-right": "20px", "cursor": `${!accessToken ? "pointer" : "default"}`, "justify-content": "space-between"}} action={() => !accessToken && navigate("/login")}>
      <_.ProfileBox>
        <img src={accessToken ? user.profile_file_name : "/imgs/svg/Profile.svg"} width={40} height={40} style={{"border-radius": "50px"}}/>
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
      <h1 style={{"align-self": "flex-start"}}>{date.getFullYear()}-{date.getMonth()+1}-{date.getDate()} ({days[date.getDay()]})</h1>
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