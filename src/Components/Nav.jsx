import { useNavigate } from "react-router-dom"
import { token } from "../Utils/Atoms";
import { useRecoilValue } from "recoil";
import styled from "styled-components"
import { useState } from "react";

export const Nav = () => {
  const navigate = useNavigate();
  const [cnt, setCnt] = useState(1);
  const accessToken = useRecoilValue(token);

  const setNav = (e) => {
    if(accessToken) {
      navigate(`/${e.target.className.split(" ")[2]}`)
      setCnt(Number(e.target.className.split(" ")[3]))
    }
  }

  return <Wrapper>
    <img src="/imgs/svg/Settings.svg" alt="" />
    <Points>
      <Point token={accessToken} id={cnt===1 && "selected"} className=" 1" onClick={setNav} />
      <Point token={accessToken} id={cnt===2 && "selected"} className="timetable 2" onClick={setNav} />
      <Point token={accessToken} id={cnt===3 && "selected"} className="apply 3" onClick={setNav} />
      <Point token={accessToken} id={cnt===4 && "selected"} className="all 4" onClick={setNav} />
    </Points>
  </Wrapper>
}

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 99fr;
  place-items: center center;
  box-sizing: border-box;
  padding-bottom: 10px;
`

const Points = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`

const Point = styled.div`
  width: 15px;
  height: 15px;
  background: #D9D9D9;
  border-radius: 65px;
  cursor: ${({token}) => token ? "pointer" : "not-allowed"};
  &#selected {
    background: #9550F9;
  }
`