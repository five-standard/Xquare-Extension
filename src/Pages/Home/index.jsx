import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { getUserSimple } from '../../Api/User';
import { token } from "../../Utils/Atoms";
import { useRecoilValue } from "recoil";

export const Home = () => {
  const [user, setUser] = useState({
    "name": "",
    "good_point": 0,
    "bad_point": 0,
    "profile_file_name": ""
  })
  const [meals, setMeals] = useState({
    "breakfast": [],
    "lunch": [],
    "dinner": []
  });
  const accessToken = useRecoilValue(token);
  
  // useEffect(() => {
  //   getUserSimple(accessToken).then(res => {
  //     setUser({
  //       "name": res.data.name,
  //       "good_point": res.data.good_point,
  //       "bad_point": res.data.bad_point,
  //       "profile_file_name": res.data.profile_file_name
  //     })
  //   }).catch(() => {})
  // }, [])

  return <Wrapper>
    <Title>홈</Title>
    <ContentBox style={{"flex-direction": "row", "padding-right": "20px", "padding-left": "20px"}}>
      <Profile src={user.profile_file_name === "" ? "/imgs/svg/Profile.svg" : user.profile_file_name} alt=""/>
      <UserBox>
        <h1>{user.name}</h1>
        <h2>상점 {user.good_point}점 벌점 {user.bad_point}점</h2>
      </UserBox>
    </ContentBox>
    <ContentBox>
      <MealTitle>
        <h1>오늘의 메뉴</h1>
        <Arrow src="/imgs/svg/Arrow.svg" alt="" />
      </MealTitle>
      <MealContent>
        <MealBox>
          <h1>아침</h1>
        </MealBox>
        <MealBox>
          <h1>점심</h1>
        </MealBox>
        <MealBox>
          <h1>저녁</h1>
        </MealBox>
      </MealContent>
    </ContentBox>
  </Wrapper>
}

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 550px;
  gap: 10px;
  background: #F9F7FA;
`

const ContentBox = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background: #ffffff;
  width: 280px;
  padding: 10px;
  box-sizing: border-box;
  cursor: pointer;
  & h1 {
    font-size: 13px;
    font-weight: 400;
    color: #000000;
  }
  & h2 {
    font-size: 12px;
    font-weight: 400;
    color: #5C5960;
  }
`

const UserBox = styled.div`
  gap: 2px;
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  font-size: 20px;
  align-self: flex-start;
`

const Profile = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
`

const MealTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Arrow = styled.img`
  width: 8%;
  height: auto;
`

const MealContent = styled.div`
  width: 100%;
  gap: 5px;
  display: flex;
  overflow-x: scroll;
  white-space: nowrap;
  &::-webkit-scrollbar {
    height: 3px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 15px;
    background: #5C5960;
  }
`

const MealBox = styled.div`
  background: #F9F7FA;
  border-radius: 10px;
  min-width: 110px;
  height: 140px;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`