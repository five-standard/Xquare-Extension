import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { useState } from "react";
import { Dates, lastDay, messages, year_month } from "../../Utils/Utilities";
import { ProfileBox } from "../../Components/ProfileBox";
import { dayType, mealType } from "../../Utils/Types";
import { Icon as IconElement } from "@iconify/react";
import Profile from "../../Assets/imgs/Profile.svg";
import { MapBox } from "../../Components/MapBox";
import { getTodayMeals } from "../../Api/Meal";
import { getUserSimple } from "../../Api/User";
import { postLogout } from "../../Api/Auth";
import { updator } from "../../Utils/Atoms";
import { Box } from "../../Components/Box";
import * as _ from "./style";

export const Home = () => {
  const [date, setDate] = useState(Dates.getDate());
  const accessToken = localStorage.getItem("accessToken");
  const update = useRecoilValue(updator);
  const navigate = useNavigate();
  const day = dayType[new Date(Dates.getFullYear(), Dates.getMonth(), date).getDay()];

  const { data: mealData } = useQuery(["meals", [date, update]], () => getTodayMeals(date), {
    onError: () => toast.error(<b>{messages.meal}</b>)
  })
  const { data: userData } = useQuery(["user", [update]], () => accessToken && getUserSimple(), {
    onError: () => toast.error(<b>{messages.user}</b>)
  })

  const handleLogout = () => {
    postLogout().then(() => { // 로그아웃 요청하기
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      navigate("/");
    }).catch(() => toast.error(<b>{messages.logout}</b>))
  }

  const handlePrevMeal = () => {
    if(date > 1) setDate(prev => prev-1);
  }

  const handleTodayMeal = () => {
    setDate(Dates.getDate());
  }

  const handleNextMeal = () => {
    if(date < lastDay) setDate(prev => prev+1);
  }

  return <>
    <Box height="70px" style={{paddingRight: "20px", cursor: `${!accessToken ? "pointer" : "default"}`}} action={() => !accessToken && navigate("/login")}>
      <_.ProfileBox>
        {
          accessToken
          ? <ProfileBox 
            profile={{
              img: userData?.data.profile_file_name && userData?.data.profile_file_name,
              name: userData?.data.name,
              sub: `상점 ${userData?.data.good_point}점 벌점 ${userData?.data.bad_point}점`,
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
    <Box height="100%" $rotate>
      <_.MealTitleBox>
        <h1 style={{alignSelf: "start"}}>{year_month(date)} ({day})</h1>
        <div>
          <IconElement icon="mingcute:up-fill" color="#5C5960" width="20px" onClick={handleNextMeal} />
          <h4 onClick={handleTodayMeal}>today</h4>
          <IconElement icon="mingcute:down-fill" color="#5C5960" width="20px" onClick={handlePrevMeal} />
        </div>
      </_.MealTitleBox>
      <_.MealDataBox>
        {
          mealData 
          ? Object.entries(mealType).map(([k, v], i) => {
            const { data } = mealData;
            return <MapBox style={{flexDirection: "column"}} key={i}>
              <_.TitleBox>
                <h1>{k}</h1>
                <h3>{data[`${v}_kcal`] && data[`${v}_kcal`]}</h3>
              </_.TitleBox>
              <h2 style={{width: "90%"}}>
                {
                  data[v]
                  ? data[v].map((i, j) => `${i}${j !== data[v].length-1 ? ", " : ""}`)
                  : "등록된 급식이 없습니다"
                }
              </h2>
            </MapBox>
          })
          : <h2>급식을 불러오고 있습니다</h2>
        }
      </_.MealDataBox>
    </Box>
  </>
}